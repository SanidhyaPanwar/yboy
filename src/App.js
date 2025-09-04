import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interest';
import Skill from './components/Skill';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OsiFarming from './components/project/OsiFarming';
import Verizon from './components/project/Verizon';
import Indrapal from './components/project/Indrapal';
import SanidhyaInsta from './components/project/SanidhyaInsta';
import Covid from './components/project/Covid';
import BreakingBad from './components/project/BreakingBad';
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Project Routes */}
        <Route path="/project/verizon" element={<Verizon />} />
        <Route path="/project/osi-farming" element={<OsiFarming />} />
        <Route path="/project/sanidhya-insta" element={<SanidhyaInsta />} />
        <Route path="/project/breaking-bad" element={<BreakingBad />} />
        <Route path="/project/indrapal" element={<Indrapal />} />
        <Route path="/project/covid" element={<Covid />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
