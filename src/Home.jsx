import React from 'react';
import './Home.css'; // 引入样式文件

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here.</p>
      </header>
      <main className="home-main">
        <section className="home-intro">
          <h2>About Us</h2>
          <p>
            We are a team of passionate developers and designers, dedicated to
            creating innovative and user-friendly web applications.
          </p>
        </section>
        <section className="home-features">
          <h2>Our Features</h2>
          <ul>
            <li>Fast and efficient performance</li>
            <li>Modern and responsive design</li>
            <li>Seamless user experience</li>
          </ul>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2025 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;