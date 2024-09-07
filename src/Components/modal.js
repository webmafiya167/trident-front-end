import React from 'react';

const Modal = ({ videoSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-xl mb-4">Video Title</h2>
        <video src={videoSrc} controls className="w-full h-auto" />
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>  
  );
};

export default Modal;
