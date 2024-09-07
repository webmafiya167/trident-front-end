import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Activity.css'; // Import custom CSS for additional styling if needed

const images = [
    {
        id: 1,
        title: 'healthcare',
        subtitle: 'Free Mega Medical Camp for 50,000 people',
        description: 'BRINGING A WORLD-CLASS HOSPITAL TO BUDHNI',
        image: 'https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_1280.jpg',
    },
    {
        id: 2,
        title: 'nature',
        subtitle: 'Experience the beauty of nature.',
        image: 'https://cdn.pixabay.com/photo/2024/03/27/17/14/ai-generated-8659507_1280.jpg',
    },
    {
        id: 3,
        title: 'education',
        subtitle: 'Empowering knowledge.',
        image: 'https://cdn.pixabay.com/photo/2024/05/17/08/07/pupil-8767681_1280.jpg',
    },
];

const Activity = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const { title, subtitle, description, image } = images[currentIndex];

    return (
        <div className="p-8 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'} animate-fade-in-right">
            {/* New Content Above Image */}
            <div className="relative">
                <h1 className="text-2xl  md:text-2xl lg:text-3xl font-bold text-gray-500 mb-0 text-start">
                Work Life Balance
                </h1>
                <p className="text-lg sm:text-xlmd:text-2xl lg:text-4xl font-thin mb-8 text-gray-400 text-start">Find out how</p>
                <div className="absolute sm:top-2 md:top-10 lg:top-2 right-0 bg-yellow-400 text-white p-2  sm:p-4   md:p-2 lg:p-4 rounded-lg shadow-lg transition animate-fade-in-right duration-300 hover:bg-customGreen z-20 flex items-center cursor-pointer">
                    <a href="https://www.tridentindia.com/ar/textiles" className="text-lg font-bold text-gray-100 mr-2">Explore Our Range</a>
                    <FaArrowRight className="w-5 h-8 transition-transform duration-300" />
                </div>
            </div>

            {/* Image and Overlay Content */}
            <div className="relative flex w-full mb-8  p-0 flex-col items-center text-center top-0 ">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full  h-96 object-cover  rounded-lg shadow-md animate-fade-in-left"
                />
                        <div className="absolute top-0 left-0 w-full h-96 flex flex-col justify-between p-4 bg-black bg-opacity-30 rounded-lg">

                    <div className="absolute top-[25%] left-8 text-left">
                        <h1 className="text-7xl font-bold text-white italic">{title}</h1>
                        <p className="text-2xl font-semibold text-white mt-2">{subtitle}</p>
                        {description && <p className="text-lg font-medium text-white mt-1">{description}</p>}
                    </div>
                    <div className="absolute top-96  left-1/2 transform -translate-x-1/2 flex gap-8">
                        <button 
                            onClick={prevSlide}
                            className="text-gray-500 bg-gray-50 p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                        >
                            <FaArrowLeft size={30} />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="text-gray-500 bg-gray-50  p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                        >
                            <FaArrowRight size={30} />
                        </button>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Activity;
