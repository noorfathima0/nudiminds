import heroVideo from "../assets/hero.mp4";

function Hero() {
  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
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
