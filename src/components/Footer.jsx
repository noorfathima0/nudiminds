function Footer() {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">

        {/* About */}
        <div className="footer-col">
          <p className="footer-about">
            Promoting Kannada language and culture in Northwest Arkansas
            since 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li>About</li>
            <li>Membership</li>
            <li>Upcoming Events</li>
            <li>Kannada Shale</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <p>✉ info@nwaks.org</p>
          <p>📞 (479) 555-0123</p>
          <p>📍 Northwest Arkansas, USA</p>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <span>f</span>
            <span>▶</span>
            <span>◎</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2024 Northwest Arkansas Kannada Sangha. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
