import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "🤖",
      title: "AI-Powered Organization",
      description: "Automatically categorize and tag your notes using advanced AI algorithms. Never waste time organizing again.",
      benefits: ["Smart tagging", "Auto-categorization", "Content analysis"],
      gradient: "gradient-blue",
      bgColor: "bg-blue"
    },
    {
      id: 2,
      icon: "📝",
      title: "Smart Summarization",
      description: "Turn lengthy notes into concise summaries with our AI assistant. Capture the essence instantly.",
      benefits: ["Key point extraction", "TL;DR generation", "Meeting summaries"],
      gradient: "gradient-green",
      bgColor: "bg-green"
    },
    {
      id: 3,
      icon: "🔍",
      title: "Intelligent Search",
      description: "Find exactly what you're looking for with semantic search that understands context and meaning.",
      benefits: ["Semantic search", "Context awareness", "Cross-note references"],
      gradient: "gradient-purple",
      bgColor: "bg-purple"
    },
    {
      id: 4,
      icon: "👥",
      title: "Team Collaboration",
      description: "Share and collaborate on notes in real-time with your team. Perfect for projects and meetings.",
      benefits: ["Real-time editing", "Comment threads", "Version history"],
      gradient: "gradient-orange",
      bgColor: "bg-orange"
    },
    {
      id: 5,
      icon: "🎯",
      title: "Smart Suggestions",
      description: "Get AI-powered suggestions to improve your notes, fix grammar, and enhance clarity.",
      benefits: ["Grammar correction", "Style improvements", "Content suggestions"],
      gradient: "gradient-indigo",
      bgColor: "bg-indigo"
    },
    {
      id: 6,
      icon: "🔒",
      title: "Secure & Private",
      description: "Your notes are encrypted end-to-end. We never share your data with third parties.",
      benefits: ["End-to-end encryption", "Privacy first", "Data ownership"],
      gradient: "gradient-gray",
      bgColor: "bg-gray"
    }
  ];

  return (
    <>
      <section className="features-section">
        <div className="features-container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-badge">
              <span>✨ Powerful Features</span>
            </div>
            <h2>Why Choose AI Notes?</h2>
            <p>Experience the future of note-taking with our AI-powered features designed to boost your productivity and creativity.</p>
          </div>

          {/* Features Grid - Fixed */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="feature-card"
              >
                <div className="feature-icon-container">
                  <div className={`feature-icon ${feature.bgColor}`}>
                    <span className="icon-emoji">{feature.icon}</span>
                  </div>
                  <div className={`gradient-bar ${feature.gradient}`}></div>
                </div>
                
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                
                <ul className="benefits-list">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <div className="feature-actions">
                  <button className="learn-more-btn">
                    Learn More
                    <svg className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h3>Ready to Transform Your Note-Taking?</h3>
              <p>Join thousands of productive users who already enhanced their workflow with AI Notes.</p>
              <div className="cta-buttons">
                <Link to="/create" className="cta-primary">
                  Start Creating Notes
                </Link>
                <Link to="/demo" className="cta-secondary">
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FIXED CSS Styles ===== */}
      <style jsx="true">{`
        .features-section {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-flex;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* FIXED Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 5rem;
          width: 100%;
        }

        /* Make sure cards are visible */
        .feature-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: auto;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon-container {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 18px;
          position: relative;
          z-index: 2;
        }

        /* Background colors for icons */
        .bg-blue { background: #dbeafe; }
        .bg-green { background: #d1fae5; }
        .bg-purple { background: #ede9fe; }
        .bg-orange { background: #ffedd5; }
        .bg-indigo { background: #e0e7ff; }
        .bg-gray { background: #f3f4f6; }

        .icon-emoji {
          font-size: 2rem;
        }

        .gradient-bar {
          position: absolute;
          top: 50%;
          left: 0;
          width: 40px;
          height: 4px;
          border-radius: 2px;
          transform: translateY(-50%);
        }

        /* Gradient colors */
        .gradient-blue { background: linear-gradient(90deg, #3b82f6, #06b6d4); }
        .gradient-green { background: linear-gradient(90deg, #10b981, #84cc16); }
        .gradient-purple { background: linear-gradient(90deg, #8b5cf6, #ec4899); }
        .gradient-orange { background: linear-gradient(90deg, #f59e0b, #ef4444); }
        .gradient-indigo { background: linear-gradient(90deg, #4f46e5, #3b82f6); }
        .gradient-gray { background: linear-gradient(90deg, #6b7280, #374151); }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .feature-card p {
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .benefits-list {
          list-style: none;
          margin-bottom: 2rem;
          padding: 0;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #4b5563;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .check-icon {
          width: 18px;
          height: 18px;
          color: #10b981;
          flex-shrink: 0;
        }

        .feature-actions {
          margin-top: auto;
        }

        .learn-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #3b82f6;
          border: 1px solid #dbeafe;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }

        .learn-more-btn:hover {
          background: #3b82f6;
          color: white;
          transform: translateX(4px);
        }

        .arrow-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .learn-more-btn:hover .arrow-icon {
          transform: translateX(2px);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 24px;
          padding: 4rem 2rem;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-content h3 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          background: white;
          color: #667eea;
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .cta-secondary {
          background: transparent;
          color: white;
          padding: 1rem 2rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* ===== RESPONSIVE FIXES ===== */
        @media (max-width: 768px) {
          .features-section {
            padding: 3rem 1rem;
            min-height: auto;
          }

          .section-header h2 {
            font-size: 2.2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
            min-height: 350px;
          }

          .cta-section {
            padding: 3rem 1.5rem;
          }

          .cta-content h3 {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 250px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .section-header h2 {
            font-size: 1.8rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            padding: 1.5rem;
            min-height: 320px;
          }

          .section-header p {
            font-size: 1rem;
          }
        }

        /* Debug borders - remove in production */
        .features-grid {
          /* border: 2px solid red; */
        }
        
        .feature-card {
          /* border: 1px solid blue; */
        }
      `}</style>
    </>
  );
};

export default FeaturesSection;