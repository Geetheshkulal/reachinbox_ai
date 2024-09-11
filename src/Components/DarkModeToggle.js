// DarkModeToggle.js
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleToggle} className="p-2  rounded-md border">
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
