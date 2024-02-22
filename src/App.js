import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faSquareGithub} from  "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

import ContentSection from './components/ContentSection';
import NavigationPanel from './components/Navigation';
import RevealEffect from './components/RevealEffect';



function App() {
  return (
  <>
    <NavigationPanel/>
    <ContentSection id="about">
      <h1>Hi, my name is Sarah.</h1>

    </ContentSection>
    <ContentSection id="work" className="two"><h1>I'm a web developer.</h1>
    <p></p></ContentSection>
    <ContentSection id="skills" className="three"><h1>My training included:</h1>

      <RevealEffect listItems={["HTML", "CSS", "JavaScript", "Python","SQLite","jQuery","React","Bootstrap","Sass"]} />
     
 
    </ContentSection>

    <ContentSection id="contact" className="four">
      <h1>Here is how to reach me:</h1>
      <ul id="contact-info">
        <li><a href = "mailto: sarahirons11@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
        <li><a href="https://www.linkedin.com/in/sarah-e-irons/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        <li><a href="https://github.com/SarahIrons"><FontAwesomeIcon icon={faSquareGithub}/></a></li>
      </ul>
   </ContentSection>
  </>
  );
}

export default App;
