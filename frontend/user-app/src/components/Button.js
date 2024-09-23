import React from 'react';

const Button = ({ txt, darkMode }) => {
    return (
        <button
            className={`inline-block px-7 py-2 my-5 rounded-full transition-all duration-500
                ${darkMode 
                    ? 'bg-neutral-700 text-white shadow-[0_0_1rem_#a3a3a3] hover:shadow-none'
                    : 'bg-neutral-400 text-black shadow-[0_0_1rem_#525252] hover:shadow-none'
                }
                hover:scale-105`}
        >
            <span>{txt}</span>
        </button>
    );
};

export default Button;
