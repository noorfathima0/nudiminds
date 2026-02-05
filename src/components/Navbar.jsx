import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Left */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />

        <div>
          <h4>NORTHWEST ARKANSAS</h4>
          <p>KANNADA SANGHA</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="nav-menu">
        <a href="#">Home</a>
        <a href="#">About NWAKS ▾</a>
        <a href="#">Kannada Shale ▾</a>
        <a href="#">Awards</a>
        <a href="#">Events</a>
        <a href="#">Contribution ▾</a>
        <a href="#">Sponsors</a>
      </nav>

      {/* Right */}
      <div className="nav-right">

        <button className="lang-btn">ಕನ್ನಡ</button>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>

        <a href="#" onClick={() => setOpen(false)}>Home</a>
        <a href="#" onClick={() => setOpen(false)}>About NWAKS</a>
        <a href="#" onClick={() => setOpen(false)}>Kannada Shale</a>
        <a href="#" onClick={() => setOpen(false)}>Awards</a>
        <a href="#" onClick={() => setOpen(false)}>Events</a>
        <a href="#" onClick={() => setOpen(false)}>Contribution</a>
        <a href="#" onClick={() => setOpen(false)}>Sponsors</a>

      </div>

    </header>
  );
}

export default Navbar;
