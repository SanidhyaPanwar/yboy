import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interest';
import Skill from './components/Skill';
import Skills from './components/Skills';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DreamCatchers from './components/categories/DreamCatchers';
import AnimalKeychains from './components/categories/AnimalKeychains';
import Indrapal from './components/categories/Indrapal';
import CrochetBags from './components/categories/CrochetBags';
import Covid from './components/categories/Covid';
import CrochetTops from './components/categories/CrochetTops';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarScripts from './components/NavbarScripts'; // New React version of scripts

function App() {
  return (
    <Router>
      <NavbarScripts />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />

        {/* Range Routes */}
        <Route path="/categories/animal-keychains" element={<AnimalKeychains />} />
        <Route path="/categories/dream-catchers" element={<DreamCatchers />} />
        <Route path="/categories/crochet-bags" element={<CrochetBags />} />
        <Route path="/categories/crochet-tops" element={<CrochetTops />} />
        <Route path="/categories/indrapal" element={<Indrapal />} />
        <Route path="/categories/covid" element={<Covid />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
