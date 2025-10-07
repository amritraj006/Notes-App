import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Smart Notes with",
      highlight: "AI Power",
      description: "Capture your ideas effortlessly and let AI organize, summarize, and enhance your notes. The future of productivity is here!",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      primaryBtn: "✍️ Create Note Now",
      secondaryBtn: "🤖 Try AI Helper",
      primaryLink: "/create",
      secondaryLink: "/ai-helper",
      bgGradient: "linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)"
    },
    {
      id: 2,
      title: "Organize &",
      highlight: "Summarize",
      description: "Let AI automatically categorize and summarize your notes. Find what you need instantly with smart search and organization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      primaryBtn: "📚 View Features",
      secondaryBtn: "🎯 Learn More",
      primaryLink: "/features",
      secondaryLink: "/about",
      bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)"
    },
    {
      id: 3,
      title: "Collaborate with",
      highlight: "Team Notes",
      description: "Share and collaborate on notes with your team in real-time. Perfect for projects, meetings, and brainstorming sessions.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      primaryBtn: "👥 Team Workspace",
      secondaryBtn: "💼 Projects",
      primaryLink: "/team",
      secondaryLink: "/projects",
      bgGradient: "linear-gradient(135deg, #fef7ff 0%, #ffffff 100%)"
    }
  ];

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="main-banner">
        {/* Navigation Buttons */}
        <button className="slider-nav-btn prev-btn" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="slider-nav-btn next-btn" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="banner-container">
          <div className="banner-slider">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ background: slide.bgGradient }}
              >
                <div className="slide-content">
                  <div className="banner-content">
                    <h1>
                      {slide.title} <span className="ai-highlight">{slide.highlight}</span>
                    </h1>
                    <p>{slide.description}</p>
                    <div className="banner-buttons">
                      <Link to={slide.primaryLink} className="primary-btn">
                        {slide.primaryBtn}
                      </Link>
                      <Link to={slide.secondaryLink} className="secondary-btn">
                        {slide.secondaryBtn}
                      </Link>
                    </div>
                  </div>

                  <div className="banner-image">
                    <img
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* ===== Fixed CSS ===== */}
      <style jsx="true">{`
        .main-banner {
          position: relative;
          overflow: hidden;
          height: 500px;
          width: 100%;
        }

        .banner-container {
          max-width: 1200px;
          margin: 0 auto;
          height: 100%;
          position: relative;
        }

        .banner-slider {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.8s ease-in-out;
        }

        .slide.active {
          opacity: 1;
          visibility: visible;
        }

        .slide-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
          padding: 0 2rem;
          gap: 3rem;
        }

        .banner-content {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
        }

        .banner-content h1 {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          color: #1e3a8a;
          margin-bottom: 1rem;
        }

        .ai-highlight {
          color: #2563eb;
          position: relative;
          display: inline-block;
        }

        .ai-highlight::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #bfdbfe, #93c5fd);
          border-radius: 4px;
          z-index: -1;
        }

        .banner-content p {
          font-size: 1.1rem;
          color: #4b5563;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .banner-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .primary-btn {
          background: linear-gradient(135deg, #2563eb, #1e40af);
          color: white;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.9);
          color: #2563eb;
          border: 1px solid #bfdbfe;
          backdrop-filter: blur(10px);
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }

        .banner-image {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .banner-image img {
          max-width: 100%;
          max-height: 350px;
          width: auto;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        /* Slider Navigation Buttons */
        .slider-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }

        .slider-nav-btn:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .slider-nav-btn svg {
          width: 24px;
          height: 24px;
          color: #2563eb;
        }

        .prev-btn {
          left: 2rem;
        }

        .next-btn {
          right: 2rem;
        }

        /* Dot Indicators */
        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          position: absolute;
          bottom: 2rem;
          left: 0;
          right: 0;
          z-index: 10;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(37, 99, 235, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: rgba(37, 99, 235, 0.6);
          transform: scale(1.2);
        }

        .dot.active {
          background: #2563eb;
          transform: scale(1.3);
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }

        /* ===== Responsive Design ===== */
        @media (max-width: 768px) {
          .main-banner {
            height: 450px;
          }

          .slide-content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 1.5rem;
            padding: 0 1rem;
          }

          .banner-content {
            max-width: 100%;
          }

          .banner-content h1 {
            font-size: 2.2rem;
          }

          .banner-buttons {
            justify-content: center;
          }

          .banner-image {
            max-width: 300px;
          }

          .banner-image img {
            max-height: 200px;
          }

          .slider-nav-btn {
            width: 40px;
            height: 40px;
          }

          .prev-btn {
            left: 1rem;
          }

          .next-btn {
            right: 1rem;
          }

          .slider-nav-btn svg {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 480px) {
          .main-banner {
            height: 500px;
          }

          .banner-content h1 {
            font-size: 1.8rem;
          }

          .banner-buttons {
            flex-direction: column;
            align-items: center;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }

          .banner-image {
            min-width: 250px;
          }

          .banner-image img {
            max-height: 150px;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .slide,
          .primary-btn,
          .secondary-btn,
          .slider-nav-btn,
          .dot {
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default MainBanner;