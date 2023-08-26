import './App.css'
import './styles/fonts.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Maincontainer from './components/maincontainer/Maincontainer';
import Nopage from './components/nopage/Nopage';
import Kitchen from './components/projects-section/projects-gallery/Kitchen';
import Wardrobe from './components/projects-section/projects-gallery/Wardrobe';
import Furniture from './components/projects-section/projects-gallery/Furniture';
import Woodenceiling from './components/projects-section/projects-gallery/Woodenceiling';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Maincontainer />} />
          <Route path="/kitchen-interior" element={<Kitchen />} />
          <Route path="/wardrobe-interior" element={<Wardrobe />} />
          <Route path="/furniture-interior" element={<Furniture />} />
          <Route path="/wooden-ceiling" element={<Woodenceiling />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;