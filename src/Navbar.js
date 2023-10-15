import { Link } from "react-router-dom";
import siteLogo from "./resources/logos/kk_wh_skl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faXTwitter, faGithub);

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="page-links">
        <Link className="nav-link" to="/work">
          DEVELOPER
        </Link>
        <Link className="nav-link" to="/lens">
          PHOTOGRAPHER
        </Link>
        <Link className="nav-link" to="/contact">
          CONTACT
        </Link>
      </div>

      <Link to="/" className="site-title">
        <img className="site-logo" src={siteLogo} />
      </Link>

      <div className="social-links">
        <a target="_blank" href="https://github.com/KunalKene1797">
          <FontAwesomeIcon className="nav-icons" icon={faGithub} />
        </a>
        <a target="_blank" href="https://twitter.com/thygeekgod">
          <FontAwesomeIcon className="nav-icons" icon={faXTwitter} />
        </a>
        <a target="_blank" href="https://www.instagram.com/thygeekgod/">
          <FontAwesomeIcon className="nav-icons" icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
}
