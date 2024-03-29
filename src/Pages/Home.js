import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentSection from "../components/ContentSection";
import RevealEffect from "../components/RevealEffect";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
    <ContentSection id="about">
    <h1>Hi, my name is Sarah.</h1>
    <RevealEffect listItems={["Welcome.","It's so nice to have you here!"]} />

  </ContentSection>
  <ContentSection id="work" className="two"><h1>I'm a web developer.</h1>
  <p>Here are some examples of my work</p>
  <ul>
    <li><Link to="tictactoe">tictactoe</Link></li>
    <li><Link to="meditation">meditation</Link></li>
    <li><Link to="dotti">dotti</Link></li>
  </ul>
  </ContentSection>
  <ContentSection id="skills" className="three"><h1>My training included:</h1>

    <RevealEffect listItems={["HTML", "CSS", "JavaScript", "Python","SQLite","jQuery","React","Bootstrap","Sass"]} />
   

  </ContentSection>

  <ContentSection id="contact" className="four">
    <h1>Here is how to reach me:</h1>
    <div id="contact-info">
      <a className="icon-link" href = "mailto: sarahirons11@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
      <a className="icon-link" href="https://www.linkedin.com/in/sarah-e-irons/"><FontAwesomeIcon icon={faLinkedin}/></a>
      <a className="icon-link" href="https://github.com/SarahIrons"><FontAwesomeIcon icon={faSquareGithub}/></a>
    </div>
 </ContentSection>
 </>
    )
  };
  
  export default Home;