import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interest';
import Skill from './components/Skill';
import Skills from './components/Skills';
import Categories from './components/Range';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DreamCatchers from './components/range/DreamCatchers';
import AnimalKeychains from './components/range/AnimalKeychains';
import Indrapal from './components/range/Indrapal';
import CrochetBags from './components/range/CrochetBags';
import Covid from './components/range/Covid';
import BreakingBad from './components/range/BreakingBad';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
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
        <Route path="/range/animal-keychains" element={<AnimalKeychains />} />
        <Route path="/range/dream-catchers" element={<DreamCatchers />} />
        <Route path="/range/crochet-bags" element={<CrochetBags />} />
        <Route path="/range/breaking-bad" element={<BreakingBad />} />
        <Route path="/range/indrapal" element={<Indrapal />} />
        <Route path="/range/covid" element={<Covid />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
