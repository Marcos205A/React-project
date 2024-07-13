import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import EditVideo from './components/EditVideo';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewVideo onSave={(newVideo) => {
            const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
            localStorage.setItem('videos', JSON.stringify([...storedVideos, newVideo]));
          }} />} />
          <Route path="/edit" element={<EditVideo />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
