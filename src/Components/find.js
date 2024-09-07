import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaTimes } from 'react-icons/fa';
import threadRoll from './image2.png';
import mapImg from './map.svg';
import clickSound from './swith.mp3';

const FindUs = () => {
  const [isContainerOpen, setIsContainerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState('OUR SERVICE');
  const [fadeIn, setFadeIn] = useState({ left: false, right: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn({ left: true, right: true });
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const toggleContainer = (section) => {
    playSound();
    setIsContainerOpen(!isContainerOpen);
    setSelectedSection(section);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const areas = ['LUDHIANA', 'SANGHERA', 'SANGHERA, PUNJAB', 'DHAULA, PUNJAB', 'PANCHKULA', 'BHOPAL'];
  const filteredAreas = areas.filter(area => area.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] w-full relative overflow-hidden animate-moveBg ">
      <img 
        src={mapImg} 
        alt="Map Background" 
        className="absolute top-32 left-0 h-full w-full object-cover opacity-70 transform scale-105 shadow-2xl animate-moveBg "/>
     

      <h1 className="relative text-lg sm:text-xl md:text-2xl lg:text-4xl  text-gray-500 font-bold mb-36 z-10 text-left w-full pl-8 animate-fade-in-left ">
        Trident - a microcosm of our world
      </h1>

      <div className="relative flex flex-wrap justify-between items-center p-14 w-full max-w-5xl z-10 space-y-4 md:space-y-0">
        {/* Service Card */}
        <div
          className={`relative flex flex-col w-full md:w-60 p-4 bg-white rounded-lg custom-shadow transition-all duration-1000 ${
            fadeIn.left ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <img 
            src={threadRoll} 
            alt="Thread Roll" 
            className="absolute top-[-14px] right-[-14px] w-6 h-6 object-cover bg-none transform rotate-45 transition-transform duration-500 hover:rotate-[360deg] animate-bounce"
          />
          <h3 className="text-sm md:text-lg font-semibold mb-2 text-gray-500 absolute top-4 left-4 ">OUR SERVICE</h3>
          <div className="flex-grow flex flex-col items-start mt-10">
            <p className="text-xl md:text-4xl font-bold text-gray-500 mb-2">25+</p>
            <p className="text-gray-500 text-sm md:text-xl">Plants & Stores</p>
            <div className="absolute bottom-4 right-4 cursor-pointer" onClick={() => toggleContainer('OUR SERVICE')}>
              <FaArrowRight className="text-yellow-500 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:w-7 md:hover:w-8" />
            </div>
          </div>
        </div>

        {/* Presence Card */}
        <div
          className={`relative flex flex-col w-full md:w-60 p-4 bg-white rounded-lg custom-shadow transition-all duration-1000 ${
            fadeIn.right ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <img 
            src={threadRoll} 
            alt="Thread Roll" 
            className="absolute top-[-14px] right-[-14px] w-6 h-6 object-cover bg-none transform rotate-45 transition-transform duration-500 hover:rotate-[360deg] animate-bounce"
          />
          <h3 className="text-sm md:text-lg font-semibold mb-2 text-gray-500 absolute top-4 left-4">OUR PRESENCE</h3>
          <div className="flex-grow flex flex-col items-start mt-10">
            <p className="text-xl md:text-4xl font-bold text-gray-500 mb-2">15+</p>
            <p className="text-gray-500 text-sm md:text-xl">Global offices</p>
            <div className="absolute bottom-4 right-4 cursor-pointer" onClick={() => toggleContainer('OUR PRESENCE')}>
              <FaArrowRight className="text-yellow-500 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:w-7 md:hover:w-8" />
            </div>
          </div>
        </div>

        {/* Customer Base Card */}
        <div
          className={`relative flex flex-col w-full md:w-72 p-4 bg-white rounded-lg custom-shadow transition-all duration-1000 ${
            fadeIn.right ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <img 
            src={threadRoll} 
            alt="Thread Roll" 
            className="absolute top-[-14px] right-[-14px] w-6 h-6 object-cover bg-none transform rotate-45 transition-transform duration-500 hover:rotate-[360deg]  animate-bounce"
          />
          <h3 className="text-sm md:text-lg font-semibold mb-2 text-gray-500 absolute top-4 left-4">CUSTOMER BASE</h3>
          <div className="flex-grow flex flex-col items-start mt-10">
            <div className="flex flex-col items-start text-gray-500 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
              <div className="flex flex-col items-start">
                <p className="text-xl md:text-4xl font-bold mb-2">150+</p>
                <p className="text-gray-500 text-sm md:text-xl">Countries</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-xl md:text-4xl font-bold mb-2">6</p>
                <p className="text-gray-500 text-sm md:text-xl">Continents</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute custom-shadow top-4 right-10 bg-yellow-400 text-white p-4 rounded-lg shadow-lg transition duration-300 hover:bg-customGreen z-20 flex items-center cursor-pointer" >
        <a href="https://www.tridentindia.com/ar/contact" className="text-sm md:text-lg font-bold text-gray-100 mr-2">FIND US ON THE GLOBE</a>
        <FaArrowRight className="w-4 h-6 md:w-5 md:h-8 transition-transform duration-300 " />
      </div>

      {isContainerOpen && (
        <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[95%] max-w-[500px] h-[50vh] bg-white shadow-lg z-30 flex flex-col p-4 rounded-lg">
          <div className="flex items-center justify-between w-full mb-4">
            <FaArrowLeft className="text-yellow-500 w-5 h-5 md:w-6 md:h-6 cursor-pointer" onClick={() => toggleContainer(selectedSection)} />
            <h2 className="text-sm md:text-lg font-semibold">{selectedSection}</h2>
            <FaTimes className="text-yellow-500 w-5 h-5 md:w-6 md:h-6 cursor-pointer" onClick={() => toggleContainer(selectedSection)} />
          </div>
          <div className="relative w-full mb-4">
            <input 
              type="text" 
              placeholder="🔍 Search for area" 
              className="w-full p-2 border rounded bg-gray-100 placeholder-customGreen" 
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <ul className="space-y-2 overflow-y-auto h-full bg-gray-100 p-2 rounded-lg custom-scrollbar">
            {filteredAreas.map(area => (
              <li key={area} className="text-gray-700 text-sm">{area}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FindUs;
