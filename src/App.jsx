
import "./App.css";

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <h2>Bloom<span>.</span></h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <p className="eyebrow">WELCOME TO BLOOM STUDIO</p>
        <h1>Beautiful ideas.<br />
          <span>Made for your business.</span>
        </h1>
        <p className="description">
          We help small businesses build a beautiful online presence
          with modern websites designed for their customers.
        </p>
        <a className="button" href="#contact">Let's Talk →</a>
      </section>

      <section id="services" className="services">
        <p className="eyebrow">WHAT WE DO</p>
        <h2>Our Services</h2>
        <div className="service-grid">
          <article className="card">
            <h3>Website Design</h3>
            <p>Clean websites that showcase your business.</p>
          </article>
          <article className="card">
            <h3>Responsive Design</h3>
            <p>Websites for mobiles, tablets and desktops.</p>
          </article>
          <article className="card">
            <h3>Web Development</h3>
            <p>Interactive experiences built with React.</p>
          </article>
        </div>
      </section>

      <section id="about" className="about">
        <p className="eyebrow">ABOUT US</p>
        <h2>Small business, big possibilities.</h2>
        <p>Bloom Studio is a demo business website built with React.</p>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Ready to grow online?</h2>
        <p>Let's discuss your next website project.</p>
        <a className="button" href="mailto:hello@example.com">
          Contact Us →
        </a>
      </section>

      <footer>
        <p>© 2026 Bloom Studio · Demo project by Jayapriya</p>
      </footer>
    </div>
  );
}

export default App;
