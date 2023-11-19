'use client';

import React, { useEffect, useState } from 'react';

function TheamChanger() {
  const [theme, setTheme] = useState(window?.localStorage?.getItem('theme'));

  const changeTheme = mode => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    changeTheme(theme);
  }, []);

  const toggleTheme = () => {
    const mode = window?.localStorage?.getItem('theme');
    const newMode = mode === 'light' ? 'dark' : 'light';
    window?.localStorage?.setItem('theme', newMode);
    changeTheme(newMode);
    setTheme(newMode);
  };

  return (
    <button className="flex items-center gap-[10px]" onClick={toggleTheme}>
      <span class="material-symbols-outlined m-fill">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
      <span className="text-[14px] md:text-[17px]">{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
}

export default TheamChanger;
