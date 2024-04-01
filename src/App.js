import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.scss';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Project from "./Pages/Project";
import gameImage from "./assets/tictactoescreenshot.png"
import medImage from "./assets/meditationscreenshot.png"

function App() {
  return (
  <>
 <BrowserRouter basename="/SarahIronsPortfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="meditation" element={
            <Project id="meditation" 
              imageUrl={medImage}  
              details="This is a single-page prototype design for a simple meditation website. It is made with HTML and CSS." 
              tags={['single- page site', 'CSS/HTML', 'good vibes']}
              projectLink="https://sarahirons.github.io/Meditative-Journey/"
              gitLink="https://github.com/SarahIrons/Meditative-Journey"
            />
            } 
            />
          <Route path="tictactoe" element={
            <Project 
              id="tic tac toe" 
              imageUrl={gameImage} 
              details="This is a project with HTML, CSS and JavaScript. The font for the heading and the game tiles is an SVG font that I manipulated as an image using Photopea." 
              projectLink="https://sarahirons.github.io/TicTacToe/"
              gitLink="https://github.com/SarahIrons/JavaScript_Projects/tree/main/TicTacToe" 
              tags={['HTML','JavaScript','CSS','font creation']}
            />} 
          />
          <Route path="dotti" element={<Project id="D.O.T.T.I." details=" PROJECT IN PROGRESS - This is an original app that will allow users to create a dossier of preferred tastes, treats, and interests of their family and friends :) " tags={['unique app', 'react','scss', 'sql']}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

