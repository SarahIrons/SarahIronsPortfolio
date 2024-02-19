import './App.scss';
import ContentSection from './components/ContentSection';
import NavigationPanel from './components/Navigation';

function App() {
  return (
  <>
    <NavigationPanel/>
    <ContentSection id="about"><h1>Hi, I'm Sarah.</h1></ContentSection>
    <ContentSection id="work" className="two"><h1>I'm a web developer.</h1></ContentSection>
    <ContentSection id="skills" className="three"><h1>Here is some of my work.</h1></ContentSection>
    <ContentSection id="contact" className="four"><h1>Reach out.</h1></ContentSection>
  </>
  );
}

export default App;
