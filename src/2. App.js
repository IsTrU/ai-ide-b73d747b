import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CompletedTasks from './pages/CompletedTasks';
import Categories from './pages/Categories';
import Settings from './pages/Settings';
import styles from './styles/App.module.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`${styles.app} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/settings" element={<Settings toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;