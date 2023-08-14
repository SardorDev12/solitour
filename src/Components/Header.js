import logo from "../images/logo.png";
import { pageLinks } from "../data";
import { socialLinks } from "../data";

function Header() {
  function handleToggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show-links");
  }

  function handleClickNavItem(e) {
    if (e.target.classList.contains("nav-link")) {
      document.querySelector(".nav-links").classList.remove("show-links");
    }
  }

  return (
    <nav className="navbar" onClick={handleClickNavItem}>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <a href="/">
              <img src={logo} className="nav-logo" alt="logo" />
              <h2>
                Soli<span>Tour</span>
              </h2>
            </a>
          </div>
          <button
            onClick={handleToggleMenu}
            type="button"
            className="nav-toggle"
            id="nav-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={"fab fa-" + link.name}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Header;
