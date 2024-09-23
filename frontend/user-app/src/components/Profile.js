import React from 'react';
import Button from './Button';

const Profile = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} container mx-auto p-8 md:p-16 lg:p-28`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                <div className={`relative p-6 ${darkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                    <div className={`relative mx-auto flex justify-center`}>
                        <div className={`${darkMode ? 'bg-neutral-700' : 'bg-neutral-400'} w-24 h-24 md:w-40 md:h-40 rounded-full shadow-lg animate-spin-slow`}>
                        </div>
                        <img src="/asserts/logo1.png" alt="Profile" className='w-20 h-20 md:w-30 md:h-30 rounded-full shadow-md p-2 md:p-4 absolute top-0 left-0 right-0 bottom-0 m-auto drop-shadow-4xl' />
                    </div>
                </div>
                <div className={`relative p-6 ${darkMode ? 'bg-neutral-800' : 'bg-white'} m-2 md:m-10`}>
                    <h1 className={`${darkMode? 'text-white' : 'text-black'} font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl underline animate-bounce`}>
                        Full Stack Developer
                    </h1>
                    <p className={`mt-4 ${darkMode? 'text-white' : 'text-black'} text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed`}>
                        I am a Computer Science graduate skilled in programming languages such as Java, JavaScript, and Python, with a focus on full-stack development using the MERN stack.
                    </p>
                    <Button txt={'Learn More'} darkMode={darkMode}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
