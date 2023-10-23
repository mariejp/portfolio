import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Home from './components/pages/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Experience from './components/pages/Experience';
import Project from './components/pages/Project';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='aboutme' element={<AboutMe />} />
        <Route path='experience' element={<Experience />} />
        <Route path='projects' element={<Project />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
