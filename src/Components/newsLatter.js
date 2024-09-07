import React, { useEffect, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import Plane from './plane.png';

const useTypingEffect = (text, speed = 150) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return displayedText;
};

const Newsletter = () => {
  const [fadeInLeft, setFadeInLeft] = useState(false);
  const [fadeInRight, setFadeInRight] = useState(false);
  const typingPlaceholder = useTypingEffect('Enter your email ID', 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInLeft(true);
      setFadeInRight(true);
    }, 100); // Delayed fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-8 lg:py-24 flex flex-col items-center" style={{ height: 'auto' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div
          className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ${
            fadeInLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-700">
            Subscribe
          </h2>
          <p className="text-gray-500 mt-2 sm:mt-4 text-base sm:text-lg">
            for updates & newsletters
          </p>
        </div>

        {/* Right Side */}
        <div
          className={`mt-8 lg:mt-0 lg:w-1/2 flex flex-col items-center justify-center lg:justify-end transform transition-all duration-1000 ${
            fadeInRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          {/* Plane Image */}
          <img src={Plane} alt="Plane" className="mb-4 max-h-24 sm:max-h-36 w-32 sm:w-48" />

          {/* Email Input */}
          <div className="relative w-full max-w-md mb-8">
            <input
              type="email"
              placeholder={typingPlaceholder}
              className="w-full py-3 px-4 sm:py-4 sm:px-6 bg-white rounded-full shadow-lg focus:outline-none text-gray-600 placeholder-customGreen"
              style={{ color: 'green' }}
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-customGreen hover:text-customGreen">
              <FiSend size={20} sm={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
