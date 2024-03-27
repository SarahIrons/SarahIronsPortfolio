import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.scss';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Project from "./Pages/Project";
import gameImage from "./assets/gameimage.png"




function App() {
  return (
  <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="meditation" element={<Project id="meditation" details="calm" tags={['single page site', 'css/html', 'good vibes']}/>} />
          <Route path="tictactoe" element={<Project id="tictactoe" imageUrl={gameImage} details="This is a project with HTML, CSS and JavaScript. The font for the heading and the game tiles is an SVG font that I manipulated as an image using Photopea." tags={['HTML','JavaScript','CSS','font creation']}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

