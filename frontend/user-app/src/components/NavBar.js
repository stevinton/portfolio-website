import React, { useState } from 'react';
import ToggleBtn from './ToggleBtn';

const NavBar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-4`}>
            <nav className="flex justify-between items-center">
                <div className="flex justify-between w-full md:w-auto">
                    <div className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-3xl m-4 animate-pulse`}>
                        STEVINTON S
                    </div>
                    <button onClick={handleToggle} className={`${darkMode ? 'text-white' : 'text-black'} md:hidden focus:outline-none`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:space-x-4 md:items-center`}>
                    <a href="/dashboard" className={`${darkMode ? 'text-white hover:bg-neutral-700' : 'text-black hover:bg-gray-200'} block px-3 py-2 rounded-lg hover:text-gray-900 font-bold`}>
                        Home
                    </a>
                    <a href="/team" className={`${darkMode ? 'text-white hover:bg-neutral-700' : 'text-black hover:bg-gray-200'} block px-3 py-2 rounded-lg hover:text-gray-900 font-bold`}>
                        Team
                    </a>
                    <a href="/projects" className={`${darkMode ? 'text-white hover:bg-neutral-700' : 'text-black hover:bg-gray-200'} block px-3 py-2 rounded-lg hover:text-gray-900 font-bold`}>
                        Projects
                    </a>
                    <a href="/reports" className={`${darkMode ? 'text-white hover:bg-neutral-700' : 'text-black hover:bg-gray-200'} block px-3 py-2 rounded-lg hover:text-gray-900 font-bold`}>
                        Reports
                    </a>
                </div>
                <div className="hidden md:block">
                    <ToggleBtn darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
