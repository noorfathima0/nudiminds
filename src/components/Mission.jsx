function Mission() {
  return (
    <section className="mission">

      {/* Heading */}
      <h2 className="mission-title">Our Mission</h2>

      <p className="mission-desc">
        To promote Kannada language, culture, and traditions among the
        Kannada-speaking community in Northwest Arkansas and to foster
        a sense of community and belonging.
      </p>

      {/* Cards */}
      <div className="mission-grid">

        <div className="mission-card">
          <div className="icon yellow">
            👥
          </div>

          <h3>Strong Community</h3>

          <p>
            A vibrant community of Kannada-speaking families in
            Northwest Arkansas
          </p>
        </div>

        <div className="mission-card">
          <div className="icon red">
            📖
          </div>

          <h3>Kannada Shale</h3>

          <p>
            Weekend language classes to teach Kannada to children
          </p>
        </div>

        <div className="mission-card">
          <div className="icon yellow">
            🏆
          </div>

          <h3>Community Awards</h3>

          <p>
            Recognizing outstanding contributions to our community
          </p>
        </div>

        <div className="mission-card">
          <div className="icon yellow">
            📅
          </div>

          <h3>Cultural Events</h3>

          <p>
            Regular celebrations of festivals and cultural programs
          </p>
        </div>

      </div>
    </section>
  );
}

export default Mission;
