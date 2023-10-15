import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

library.add(faArrowRight, faDownload);

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="header-description">
          <p className="header-prefix">Hi, my name is</p>
          <p className="header-name">Kunal Kene.</p>
          <p className="header-title">
            I write code and build architectures for the cloud.
          </p>
          <p className="header-bio">
            I'm a software engineer with a passion for developing cutting-edge
            AI chatbots, architectures, and cloud computing solutions. I believe
            that these technologies have the potential to revolutionize the way
            we interact with computers and the world around us.
          </p>
          <div className="header-links">
          <Link to="/work" className="header-button">
            Download Resume
            <FontAwesomeIcon className="arrow" icon={faDownload} />
          </Link>
          <Link to="/work" className="header-button">
            Checkout my work
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </Link>
          
          </div>
          
        </div>

        <div className="header-images">
          {/* <p className="skills-text">C# ASP.NET</p> */}
        </div>
      </div>

      {/* <div className="section-1">
        <p className="slider-text">
          <span>
            C# Development ● AI Chatbots ● ASP.Net Development ● React
            Development ● Azure Cloud Computing & DevOps ● Natural Langauge
            Processing
          </span>
        </p>
      </div> */}
    </>
  );
}
