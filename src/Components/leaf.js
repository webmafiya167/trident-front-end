import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import the hover sound
import hoverSound from './pick.mp3';

const Leaf = ({ top, left, delay, label, animate, onMouseEnter, onMouseLeave, onClick }) => {
  const leafClasses = classNames('absolute cursor-pointer transition-transform duration-300 ease-in-out', {
    'animate-float': animate === 'float',
    'animate-fall': animate === 'fall',
    'animate-sway': animate === 'sway',
  });

  // Function to handle playing the sound
  const playHoverSound = () => {
    const sound = new Audio(hoverSound);
    sound.play();
  };

  return (
    <div
      className={leafClasses}
      style={{
        top: top,
        left: left,
        animationDelay: delay,
        transform: `translate(-50%, -50%)`,
      }}
      onMouseEnter={(e) => {
        onMouseEnter();
        playHoverSound(); // Play sound on hover
        e.currentTarget.querySelector('img').style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.2))';
      }}
      onMouseLeave={(e) => {
        onMouseLeave();
        e.currentTarget.querySelector('img').style.filter = 'drop-shadow(0 0 0 transparent)';
      }}
      onClick={onClick}
    >
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/green-leaf-icon.png"
        alt="Leaf"
        className="w-6 h-6"
        style={{
          filter: 'drop-shadow(0 0 0 transparent)', // No shadow by default
          transition: 'filter 0.3s ease-in-out', // Smooth transition on hover
        }}
      />
      {label && (
        <div className="absolute w-24 top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-700 text-sm px-2 py-1 rounded shadow-md">
          {label}
        </div>
      )}
    </div>
  );
};

Leaf.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  delay: PropTypes.string,
  label: PropTypes.string,
  animate: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

export default Leaf;
