import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { likedNotesCount } = useAppContext();

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
            <div className="logo-wrapper">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 7H17M7 12H17M7 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              AI<span className="highlight">Notes</span>
            </div>
          </Link>

          {/* Hamburger Icon */}
          <div
            className={`menu-icon ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/" onClick={handleLinkClick} className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </NavLink>
            </li>
            
            <SignedIn>
              <li>
                <NavLink to="/create" onClick={handleLinkClick} className="nav-link">
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Create Note
                </NavLink>
              </li>
              <li>
                <NavLink to="/mynotes" onClick={handleLinkClick} className="nav-link">
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M2 3H8C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5V21C10 20.2044 9.68393 19.4413 9.12132 18.8787C8.55871 18.3161 7.79565 18 7 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 3H16C15.4696 3 14.9609 3.21071 14.5858 3.58579C14.2107 3.96086 14 4.46957 14 5V21C14 20.2044 14.3161 19.4413 14.8787 18.8787C15.4413 18.3161 16.2044 18 17 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  My Notes
                </NavLink>
              </li>
              <li>
                <NavLink to="/ai-helper" onClick={handleLinkClick} className="nav-link">
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M9.663 17H4.012C3.552 17 3.187 16.62 3.261 16.167C3.712 13.401 5.353 10.932 7.757 9.459C7.85 9.4 7.9 9.292 7.888 9.183C7.787 8.193 7.787 7.193 7.888 6.203C7.9 6.094 7.85 5.986 7.757 5.927C5.353 4.454 3.712 1.985 3.261 -0.781C3.187 -1.234 3.552 -1.614 4.012 -1.614H9.663C9.913 -1.614 10.13 -1.411 10.15 -1.162C10.275 0.265 10.7 1.654 11.4 2.9C11.475 3.033 11.613 3.113 11.763 3.113C11.913 3.113 12.05 3.033 12.125 2.9C12.825 1.654 13.25 0.265 13.375 -1.162C13.395 -1.411 13.613 -1.614 13.863 -1.614H19.513C19.973 -1.614 20.338 -1.234 20.263 -0.781C19.813 1.985 18.172 4.454 15.768 5.927C15.675 5.986 15.625 6.094 15.637 6.203C15.738 7.193 15.738 8.193 15.637 9.183C15.625 9.292 15.675 9.4 15.768 9.459C18.172 10.932 19.813 13.401 20.263 16.167C20.338 16.62 19.973 17 19.513 17H13.863C13.613 17 13.395 16.797 13.375 16.548C13.25 15.121 12.825 13.732 12.125 12.486C12.05 12.353 11.913 12.273 11.763 12.273C11.613 12.273 11.475 12.353 11.4 12.486C10.7 13.732 10.275 15.121 10.15 16.548C10.13 16.797 9.913 17 9.663 17Z" fill="currentColor"/>
                  </svg>
                  AI Helper
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" onClick={handleLinkClick} className="nav-link">
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Profile
                </NavLink>
              </li>
              
              {likedNotesCount > 0 && (
                <li className="likes-container">
                  <div className="likes-badge">
                    <svg className="heart-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span className="likes-count">{likedNotesCount}</span>
                  </div>
                </li>
              )}
            </SignedIn>

            {/* Auth Buttons */}
            <SignedOut>
              <li>
                <SignInButton mode="modal">
                  <button className="signin-btn">
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sign In
                  </button>
                </SignInButton>
              </li>
            </SignedOut>

            <SignedIn>
              <li className="user-button-wrapper">
                <UserButton afterSignOutUrl="/" />
              </li>
            </SignedIn>
          </ul>
        </div>
      </nav>

      {/* ===== Enhanced CSS ===== */}
      <style jsx="true">{`
        .navbar {
          background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
          border-bottom: 1px solid #e1e8ff;
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.08);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.5rem;
        }

        /* Enhanced Logo */
        .navbar-logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: #2563eb;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          color: #2563eb;
        }

        .navbar-logo:hover {
          color: #1e40af;
          transform: translateY(-1px);
        }

        .highlight {
          color: #1e40af;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Enhanced Nav Links */
        .nav-links {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0;
          transition: all 0.3s ease;
        }

        .nav-links li {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #475569;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.05);
          transform: translateY(-1px);
        }

        .nav-icon {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .nav-link:hover .nav-icon {
          transform: scale(1.1);
        }

        /* Active state with modern indicator */
        .nav-link.active {
          color: #2563eb;
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #2563eb;
          border-radius: 50%;
        }

        /* Enhanced Likes Badge */
        .likes-container {
          margin-left: 0.5rem;
        }

        .likes-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #fef2f2, #fecaca);
          color: #dc2626;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.15);
          animation: pulse 2s infinite;
        }

        .heart-icon {
          width: 14px;
          height: 14px;
        }

        .likes-count {
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Enhanced Sign-in Button */
        .signin-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #2563eb, #1e40af);
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .signin-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
          background: linear-gradient(135deg, #1e40af, #1e3a8a);
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }

        /* User Button Wrapper */
        .user-button-wrapper {
          margin-left: 0.5rem;
        }

        /* Enhanced Hamburger Icon */
        .menu-icon {
          display: none;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          gap: 4px;
          padding: 0.5rem;
          border-radius: 6px;
          transition: background 0.3s ease;
        }

        .menu-icon:hover {
          background: rgba(37, 99, 235, 0.1);
        }

        .menu-icon span {
          width: 25px;
          height: 3px;
          background: linear-gradient(135deg, #2563eb, #1e40af);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .menu-icon.active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .menu-icon.active span:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }

        .menu-icon.active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* ===== Enhanced Mobile Responsive ===== */
        @media (max-width: 768px) {
          .menu-icon {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
            text-align: left;
            display: none;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-top: 1px solid #e1e8ff;
            padding: 1rem 0;
            backdrop-filter: blur(10px);
          }

          .nav-links.active {
            display: flex;
          }

          .nav-links li {
            margin: 0.3rem 0;
            width: 100%;
          }

          .nav-link {
            padding: 0.8rem 1.5rem;
            border-radius: 0;
            border-left: 3px solid transparent;
          }

          .nav-link.active {
            border-left-color: #2563eb;
            background: rgba(37, 99, 235, 0.05);
          }

          .nav-link.active::after {
            display: none;
          }

          .likes-container {
            margin: 0.5rem 1.5rem;
          }

          .user-button-wrapper {
            margin: 0.5rem 1.5rem;
          }
        }

        /* Smooth animations */
        @media (prefers-reduced-motion: reduce) {
          .nav-link,
          .signin-btn,
          .navbar-logo,
          .menu-icon span {
            transition: none;
          }
          
          .likes-badge {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;