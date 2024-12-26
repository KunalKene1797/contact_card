import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faArrowRight, faDownload);

const downloadResume = () => {
  const url = 'resume/Resume.pdf'; // Assuming the file is in the public directory
  const link = document.createElement('a');
  link.href = url;
  link.download = 'kunal_kene_resume.pdf'; 
  // ... rest of the download logic
  document.body.appendChild(link);
    link.click();

    // Clean up
    window.URL.revokeObjectURL(url); 
    document.body.removeChild(link);
};

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="header-description">
          <p className="header-prefix">Hi, my name is</p>
          <p className="header-name">Kunal Kene</p>
          <p className="header-title">
            I write code and build architectures for the cloud
          </p>
          <p className="header-bio">
            I'm a software engineer with a passion for developing cutting-edge
            AI chatbots, architectures, and cloud computing solutions. I believe
            that these technologies have the potential to revolutionize the way
            we interact with computers and the world around us.
          </p>
          <div className="header-links">
          <Link onClick={downloadResume} className="header-button">
            Download Resume
            <FontAwesomeIcon className="arrow" icon={faDownload} />
          </Link>
          <Link to="https://www.linkedin.com/in/kunalkene/" target="_blank" className="header-button">
            Checkout my LinkedIn
            <FontAwesomeIcon className="arrow" icon={faLinkedin} />
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
