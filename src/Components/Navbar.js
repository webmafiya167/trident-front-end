import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="flex items-center sticky top-0 justify-between px-4 py-2 bg-gray-100 shadow-md z-50">
      {/* Logo and Hamburger Menu */}
      <div className="flex items-center">
        <button onClick={toggleMenu} className="text-gray-600 lg:hidden mr-4">
          <FiMenu className="w-6 h-6" />
        </button>
        <img 
          src="https://assets.tridentindia.com/Trident_Logo_Registered_489c31b1ff.svg" 
          alt="Trident Group Logo" 
          className="h-10 mr-5" 
        />
      </div>

      {/* Navigation Links (Hidden on Mobile) */}
      <div className={`hidden lg:flex ml-48 space-x-6`}>
        <a href="#" className="text-gray-500 font-semibold text-sm hover:text-customGreen">ABOUT US</a>
        <a href="#" className="text-gray-500 font-semibold text-sm hover:text-customGreen">PRODUCTS</a>
        <a href="#" className="text-gray-500 font-semibold text-sm hover:text-customGreen">INVESTOR RELATIONS</a>
        <a href="#" className="text-gray-500 font-semibold text-sm hover:text-customGreen">CAREERS</a>
        <a href="#" className="text-gray-500 font-semibold text-sm hover:text-customGreen">CONTACT</a>
      </div>

      {/* Search, Country, and Language Selector */}
      <div className="flex items-center space-x-2">
        <button onClick={toggleSearch} className="text-gray-600 mr-2 hover:text-customGreen">
          <FiSearch className="w-6 h-6" />
        </button>
        <div className="flex items-center bg-white-800 space-x-2 ">
          <button className="flex items-center border bg-white px-4 py-1 text-gray-600 rounded-md hover:bg-gray-100">
            <span className="mr-1">INDIA</span>
            <img 
              src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png" 
              alt="India Flag" 
              className="h-4 w-6" 
            />
          </button>
          <div className="relative">
            <select className=" border bg-white px-6 py-1 mr-1 text-gray-600 rounded-md appearance-none hover:bg-gray-100">
              <option value="arabic">Arabic</option>
              <option value="english">English</option>
              {/* Add more languages as needed */}
            </select>
            <FaChevronDown className="absolute ml-10 top-3  text-gray-300 left-9 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}
      >
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50">
          <div className="flex items-center justify-between px-4 py-4">
            <img 
              src="https://assets.tridentindia.com/Trident_Logo_Registered_489c31b1ff.svg" 
              alt="Trident Group Logo" 
              className="h-8 mr-2" 
            />
            <button onClick={toggleMenu} className="text-gray-600">
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 px-4">
            <a href="#" className="text-gray-600 font-normal hover:text-customGreen">ABOUT US</a>
            <a href="#" className="text-gray-600 font-normal hover:text-customGreen">PRODUCTS</a>
            <a href="#" className="text-gray-600 font-normal hover:text-customGreen">INVESTOR RELATIONS</a>
            <a href="#" className="text-gray-600 font-normal hover:text-customGreen">CAREERS</a>
            <a href="#" className="text-gray-600 font-normal hover:text-customGreen">CONTACT</a>
          </nav>
          {isSearchOpen && (
            <div className="px-4 py-4">
              <input 
                type="text" 
                className="border-b-2 border-gray-400 focus:outline-none focus:border-green-600 placeholder-green-600 text-green-600 w-full"
                placeholder="Search..."
              />
            </div>
          )}
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 mt-16 w-1/2 z-40 flex flex-col items-center justify-center transition-transform duration-300 shadow-lg rounded-lg p-4 md:p-8 mx-4 md:mx-auto md:max-w-3xl max-h-[80vh] overflow-y-auto">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-3 text-gray-600" />
            <input 
              type="text" 
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-customGreen placeholder-customGreen text-customGreen text-xl mb-4 pl-10 py-2 rounded-lg"
              placeholder="Search Trident"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between w-full md:w-3/4 mt-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Popular Searches</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-customGreen  ">Bed & Bath</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-customGreen  ">Paper</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-customGreen  ">Innovation</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-customGreen  ">Madhuban Hospital</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-customGreen  ">CSR Activities</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-customGreen  ">Press Releases</a></li>
              </ul>
            </div>
          </div>
          <button onClick={toggleSearch} className="mt-4 text-gray-600 hover:text-gray-800">
            <FiX className="w-6 h-6" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
