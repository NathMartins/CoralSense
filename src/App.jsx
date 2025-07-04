import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesquisa" element={<Research />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;