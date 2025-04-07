import React from "react";
import "./Home.css"; // Import the updated CSS

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Modern Website!</h1>
        <p>Your gateway to amazing features</p>
      </header>

      <main className="home-content">
        <section className="intro-section">
          <h2>What We Offer</h2>
          <p>
            Discover innovative solutions that make your life easier. Whether
            you're looking for productivity tools or creative inspiration, we've
            got you covered.
          </p>
          <button className="explore-button">Explore More</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Productivity</h3>
            <p>Tools to help you stay organized and efficient.</p>
          </div>
          <div className="feature-card">
            <h3>Creativity</h3>
            <p>Unleash your creative potential with our resources.</p>
          </div>
          <div className="feature-card">
            <h3>Community</h3>
            <p>Join a community of like-minded individuals.</p>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Your Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
