import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';





function App() {
  return (
  <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

