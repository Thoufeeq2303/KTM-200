const express = require("express")
const app = express()
const port = 3229
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("hello thoufeeq")
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://thoufeeq:Thoufii23@bike.mgjok7d.mongodb.net/?appName=Bike";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productCollection = client.db("bikeCollection").collection("bikedata")

    app.post("/uploadbikedata", async(req,res)=>{
      const data = req.body
      const result = await productCollection.insertMany([data])
      res.send(result)
    })

    app.get("/getKTM", async(req,res)=>{
      const KTM = productCollection.find()
      const result = await KTM.toArray()
      res.send(result)
    })
    
    app.get("/getKTMByCategory", async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const result = await productCollection.find(filter).toArray();
  res.send(result);
});


    app.get("/getKTM/:id", async(req,res)=>{
      const id = req.params.id
      const filter = {_id : new ObjectId(id)}
      const result = await productCollection.findOne(filter)
      res.send(result)
    })

    app.patch("/updateKTM/:id", async(req,res)=>{
      const id = req.params.id
      const update = req.body
      const filter = {_id: new ObjectId(id)}
      const object = {$set:{...update}}

      const option = {upsert: true}
      const result = await productCollection.updateOne(filter,  object, option)
      res.send(result)
    })

    app.delete("/getKTM/:id", async(req,res)=>{
      const id = req.params.id
      const filter = {_id : new ObjectId(id)}
      const result = await productCollection.deleteOne(filter)
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})