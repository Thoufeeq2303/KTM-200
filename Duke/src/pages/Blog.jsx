import React, { useEffect, useRef, useState } from 'react';
import './blog.css';
import Footer from '../Main/Footer';

const slides = [
  {
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-4117/web-carousel.webp',
    title:
      "Adventure Bike: Answer the Call of Adventure with the KTM 390 Adventure",
  },
  {
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-2117/web-carousel-780-x-568-3.webp',
    title: 'KTM 390 Duke – What makes the Gen 3’s a class apart and segment leader',
  },
  {
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blogrc/rc-390/web-carousel.webp',
    title: 'Top Picks: The Best Sports Bikes You Can Buy in 2025',
  },
];

const posts = [
  {
    img: 'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-4/latest---web.webp',
    title: 'Breaking Down the KTM 390 Adventure Price: Is It the Right Fit for You?',
    excerpt:
      'Adventure riding isnt just about the destination—its about pushing past limits, facing unpredictable terrain,',
  },
  {
    img: 'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-3112/web-latest-150-x-150-1.webp',
    title: 'KTM 390 ADVENTURE: BEST BIKES FOR RIDERS WHO SEEK THRILL',
    excerpt:
      'Adventure does not adhere to maps—it redefines them. And for riders who live for the rush',
  },
  {
    img: 'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-0117/web-latest-150-x-150-1.webp',
    title: 'DUKE 250 2025: A BOLD STEP FORWARD IN PERFORMANCE AND DESIGN',
    excerpt:
      'Some machines are built to follow the rules. Others are designed to break them. For those who ride with',
  },
  {
    img: 'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-4117/web-latest.webp',
    title: 'KTM 390 ADVENTURE: BEST BIKES FOR RIDERS WHO SEEK THRILL',
    excerpt:
      'Adventure does not adhere to maps—it redefines them. And for riders who live for the rush',
  },
  {
    img: 'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-3/latest---web.webp',
    title: 'THE ULTIMATE THRILL RIDE: EXPLORING THE WORLD OF DIRT BIKES',
    excerpt:
      "There's a unique kind of freedom that comes with leaving the road behind. For those who prefer tracks",
  },
];

const TABS = ['ALL', 'NAKED', 'OFFROAD', 'SUPERSPORT'];

const BLOGS = [
  {
    id: 1,
    title: 'Breaking Down the KTM 390 Adventure Price: Is It the Right Fit for You?',
    date: 'Jul 30 2025',
    excerpt:
      'Adventure riding isnt just about the destination—its about pushing past limits, facing unpredictable terrain,',
    category: 'NAKED',
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-4/top---web.webp',
  },
  {
    id: 2,
    title: 'KTM 390 Adventure X: The Ultimate Exploration Machine',
    date: 'Jul 29 2025',
    excerpt: 'Adventure isnt just about the destination. Instead, its about the thrill of the ride, the grit in your tyres, and the',
    category: 'OFFROAD',
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-3112/web-top-370-x-460-1.webp',
  },
  {
    id: 3,
    title: 'Duke 250 2025: A Bold Step Forward in Performance and Design',
    date: 'Jul 28 2025',
    excerpt: 'Some machines are built to follow the rules. Others are designed to break them. For those who ride with',
    category: 'SUPERSPORT',
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-0117/web-top-370-x-460.webp',
  },
  {
    id: 4,
    title: 'KTM 390 Adventure: Best Bikes for Riders Who Seek Thrill',
    date: 'Jul 28 2025',
    excerpt: 'Adventure does not adhere to maps—it redefines them. And for riders who live for the rush',
    category: 'SUPERSPORT',
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-4117/web-top.webp',
  },
  {
    id: 5,
    title: 'The Ultimate Thrill Ride: Exploring the World of Dirt Bikes',
    date: 'Jul 25 2025',
    excerpt: 'There’s a unique kind of freedom that comes with leaving the road behind. For those who prefer tracks',
    category: 'OFFROAD',
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-3/top---web.webp',
  },
  {
    id: 6,
    title: 'KTM 390 Adventure X: Built for the Bold and Brave',
    date: 'Jul 24 2025',
    excerpt: 'Adventure motorcycling offers an escape from the ordinary, allowing riders to explore terrains that challenge',
    category: 'NAKED',
    image:
      'https://cdn.bajajauto.com/-/media/images/ktm/blogs/blog-3012/web-top-370-x-460-2.webp',
  },
];

const Blog = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredBlogs =
    activeTab === 'ALL'
      ? BLOGS
      : BLOGS.filter((blog) => blog.category === activeTab);

  const [index, setIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const timer = useRef(null);

  const startAutoSlide = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setIndex((s) => (s + 1) % slides.length),
      4500
    );
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    setTextVisible(false);
    const id = setTimeout(() => setTextVisible(true), 80);
    return () => clearTimeout(id);
  }, [index]);

  const goTo = (i) => {
    setIndex(i);
    startAutoSlide();
  };

  return (
    <>
      <div className="top">
        <div className="blog-wrap">
          <section className="left-slider">
            <div
              className="slide"
              style={{ backgroundImage: `url(${slides[index].image})` }}
              role="img"
              aria-label={`Slide ${index + 1}`}
            >
              <div className="overlay-gradient" />
              <div className={`slide-text ${textVisible ? 'show' : 'hide'}`}>
                <h2 className="slide-title">{slides[index].title}</h2>
                <div className="dots" aria-hidden>
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={`dot ${i === index ? 'active' : ''}`}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="right-list" aria-label="Latest blogs">
            <h3 className="side-title">LATEST BLOGS</h3>
            <div className="posts-scroll">
              {posts.map((p, i) => (
                <article key={i} className="post-row">
                  <img src={p.img} alt={p.title} className="post-thumb" />
                  <div className="post-body">
                    <h4>{p.title}</h4>
                    <p>{p.excerpt}</p>
                    <a className="read" href="#!">
                      Read More
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="right-footer" />
          </aside>
        </div>

        <div className="blogs-page">
          <div className="blogs-header">
            <h1 className="blogs-title">TOP BLOGS</h1>

            <div className="blog-tabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`blog-tab ${
                    activeTab === tab ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="blogs-grid">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="blog-card"
                style={{ backgroundImage: `url(${blog.image})` }}
              >
                <div className="blog-card-overlay" />
                <div className="blog-card-content">
                  <p className="blog-card-date">{blog.date}</p>
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-excerpt">{blog.excerpt}</p>
                  <h6 className="blog-card-read">Read Article</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Blog;