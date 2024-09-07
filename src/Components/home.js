import React, { useState, useEffect } from 'react';
import Leaf from './leaf';
import Modal from './modal';
import tree from './tree.png'; // path to your tree image
import treem from './treem.png'; // path to your mobile tree image

import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Import icons
import fallingSound from './nature.mp3'; // Import sound file

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [hoveredLeaf, setHoveredLeaf] = useState(null);
  const [soundOn, setSoundOn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const sound = new Audio(fallingSound);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLeafClick = (video) => {
    setVideoSrc(video);
    setModalOpen(true);
  };

  const handleSoundToggle = () => {
    if (soundOn) {
      sound.pause();
      sound.currentTime = 0;
    } else {
      sound.play();
      sound.loop = true;
    }
    setSoundOn(!soundOn);
  };

  const leaves = [
    { id: 1, top: '15%', left: '65%', delay: '0s', video: 'video1.mp4', label: 'Story 1', animate: 'fall' },
    { id: 2, top: '20%', left: '75%', delay: '1s', video: 'video2.mp4', label: 'Story 2', animate: 'sway' },
    { id: 3, top: '50%', left: '60%', delay: '1s', video: 'video2.mp4', label: 'Story 3', animate: 'sway' },
    { id: 4, top: '10%', left: '40%', delay: '2s', video: 'video3.mp4', label: 'Story 4', animate: 'fall' },
    { id: 5, top: '30%', left: '80%', delay: '1s', video: 'video2.mp4', label: 'Story 2', animate: 'sway' },
    { id: 6, top: '58%', left: '20%', delay: '1s', video: 'video2.mp4', label: 'Story 3', animate: 'sway' },
    { id: 7, top: '30%', left: '70%', delay: '2s', video: 'video3.mp4', label: 'Story 4', animate: 'fall' },
    { id: 8, top: '25%', left: '10%', delay: '2s', video: 'video3.mp4', label: 'Story 4', animate: 'fall' },
    { id: 9, top: '10%', left: '85%', delay: '2s', video: 'video3.mp4', label: 'Story 4', animate: 'fall' },
    { id: 10, top: '30%', left: '80%', delay: '2s', video: 'video3.mp4', label: 'Story 4', animate: 'fall' },

    // Add more leaves as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center p-0 min-h-screen">
      <div className={`bg-white overflow-hidden flex flex-col md:flex-row w-full ${isMobile ? 'h-auto' : 'h-[80vh]'}`}>
        {isMobile && (
          <div className="relative w-full h-auto">
            <img
              src={treem}
              alt="Tree"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            {leaves.map((leaf) => (
              <Leaf
                key={leaf.id}
                top={leaf.top}
                left={leaf.left}
                delay={leaf.delay}
                label={hoveredLeaf === leaf.id ? leaf.label : null}
                animate={leaf.animate}
                onMouseEnter={() => setHoveredLeaf(leaf.id)}
                onMouseLeave={() => setHoveredLeaf(null)}
                onClick={() => handleLeafClick(leaf.video)}
              />
            ))}
          </div>
        )}
        <div className={`w-full ${isMobile ? 'p-4' : 'md:w-1/2 p-6'} flex flex-col justify-center text-gray-800`}>
          <h1 className={`text-3xl ${isMobile ? 'text-2xl' : 'md:text-4xl'} font-bold mb-8`}>
            Trident Group’s Story unfolds…
          </h1>
          <p className={`mb-8 ${isMobile ? 'text-sm' : ''}`}>
            Like a deep-rooted 36-year old tree at our Barnala plant and its countless leaves, Trident, with a formidable global presence, has innumerable stories to tell. Hear each leaf tell you its story.
          </p>
          <p className="italic text-sm flex items-center cursor-pointer" onClick={handleSoundToggle}>
            {soundOn ? <FaVolumeUp className="mr-2 text-yellow-600" /> : <FaVolumeMute className="mr-2" />}
            SOUND {soundOn ? 'ON' : 'OFF'}
          </p>
        </div>
        {!isMobile && (
          <div className="relative w-full md:w-1/2 h-full">
            <img
              src={tree}
              alt="Tree"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {leaves.map((leaf) => (
              <Leaf
                key={leaf.id}
                top={leaf.top}
                left={leaf.left}
                delay={leaf.delay}
                label={hoveredLeaf === leaf.id ? leaf.label : null}
                animate={leaf.animate}
                onMouseEnter={() => setHoveredLeaf(leaf.id)}
                onMouseLeave={() => setHoveredLeaf(null)}
                onClick={() => handleLeafClick(leaf.video)}
              />
            ))}
          </div>
        )}
      </div>
      {modalOpen && (
        <Modal videoSrc={videoSrc} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;
