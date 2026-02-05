import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-small">Welcome to</p>

        <h1>
          Northwest Arkansas Kannada <br />
          Sangha
        </h1>

        <p className="hero-desc">
          Preserving and celebrating Kannada culture in Northwest Arkansas
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Learn More →
          </button>

          <button className="btn-outline">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
