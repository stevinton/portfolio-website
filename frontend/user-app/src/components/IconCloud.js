import React from 'react';
import IconCloud from '../magicui/magicui/icon-cloud';
import WordFadeIn from '../magicui/magicui/word-fade-in';
import { DockContent } from './DockContent';

const slugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "postgresql",
  "git",
  "github",
  "figma",
  "python",
  "mongodb",
  "c",
  "bootstrap",
  "tailwindcss",
  "networking"
];

export function IconCloudDemo({ darkMode }) {
  return (
    <div className={`relative p-6 ${darkMode ? 'bg-neutral-800' : 'bg-white'} m-0 h-screen flex items-center justify-center`}>
      <DockContent/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-screen-lg">
        <div className='flex flex-col items-center justify-center rounded-lg p-4'>
          <h1 className={`mb-4 ml-5 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
            <WordFadeIn 
              words="Technical Skills" 
              isPrimary={true} 
            />
          </h1>
          <p className={`mt-4 ${darkMode ? 'text-white' : 'text-black'} text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed`}>
            <WordFadeIn 
              words=" Expertise in Front-end and Full-stack development, with additional skills in Networking." 
              isPrimary={false} 
            />
          </p>
        </div>
        <div className="flex items-center justify-center rounded-lg p-4">
          <IconCloud iconSlugs={slugs} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
