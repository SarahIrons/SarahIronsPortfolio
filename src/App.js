import './App.scss';
import ContentSection from './components/ContentSection';
import NavigationPanel from './components/Navigation';

function App() {
  return (
  <>
    <NavigationPanel/>
    <ContentSection id="about"><h1>Hi, my name is Sarah.</h1></ContentSection>
    <ContentSection id="work" className="two"><h1>I'm a web developer.</h1></ContentSection>
    <ContentSection id="skills" className="three"><h1>My training included: .</h1></ContentSection>
    <ContentSection id="contact" className="four">
      <h1>Here is how to reach me:</h1>
      <ul>
        <li><a href = "mailto: sarahirons11@gmail.com">sarahirons11@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/sarah-e-irons/">LinkedIn</a></li>
        <li><a href="https://github.com/SarahIrons">Github</a></li>
      </ul>
   </ContentSection>
  </>
  );
}

export default App;
