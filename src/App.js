import './App.scss';
import ContentSection from './components/ContentSection';

function App() {
  return (
  <>
    
    <div className="navbar--container sticky">
      <div className="navbar--title"><h4>navigation</h4></div>
      <div className="navbar--icon"><i className="fas fa-bars"></i></div>
    </div>
    <div className="nav--open close sticky">
      <div className="nav--open-icon"><i className="fas fa-times"></i></div>
      <div className="nav--open-title">explore</div>
      <div className="nav--open-menu">
        <a href="#about">about</a>
        <a href="#work">work</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
      </div>
    </div>
  
   <ContentSection id="about"><h1>Hi, I'm Sarah.</h1></ContentSection>
   <ContentSection id="work" className="two"><h1>Hi, I'm Sarah.</h1></ContentSection>
   <ContentSection id="skills" className="three"><h1>Hi, I'm Sarah.</h1></ContentSection>
   <ContentSection id="contact" className="four"><h1>Hi, I'm Sarah.</h1></ContentSection>


  </>
  );
}

export default App;
