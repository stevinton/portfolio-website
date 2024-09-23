import React, { useState } from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { IconCloudDemo } from './components/IconCloud';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} flex justify-between px-10`}>
        <Profile darkMode={darkMode} />
      </div>
      <IconCloudDemo darkMode={darkMode} />
    </div>
  );
}

export default App;
