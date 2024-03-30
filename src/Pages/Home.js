import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentSection from "../components/ContentSection";
import RevealEffect from "../components/RevealEffect";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './home.scss';

const Home = () => {
    return (
        <>
        <ContentSection id="about">
          <h1>Hi, my name is Sarah.</h1>
        </ContentSection>
        <ContentSection id="work" className="two">
          <h2>Here is some of my work:</h2>
          <div className="work-links">
            <Link className="work-link" to="tictactoe">Play</Link>
            <Link className="work-link" to="meditation">Rest</Link>
            <Link className="work-link" to="dotti">Plan</Link>
          </div>
        </ContentSection>
        <ContentSection id="skills" className="three">
          <h2>My training included:</h2>
          <RevealEffect listItems={["HTML", "CSS", "JavaScript", "Python","SQLite","jQuery","React","Bootstrap","Sass"]} />
        </ContentSection>

        <ContentSection id="contact" className="four">
          <h2>Here is how to reach me:</h2>
          <div id="contact-info">
            <a className="link--icon" href = "mailto: sarahirons11@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
            <a className="link--icon" href="https://www.linkedin.com/in/sarah-e-irons/"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a className="link--icon" href="https://github.com/SarahIrons"><FontAwesomeIcon icon={faSquareGithub}/></a>
          </div>
      </ContentSection>
      </>
    )
  };
  
  export default Home;