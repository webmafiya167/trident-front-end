import React, { useState, useEffect } from 'react';
import { FaBed, FaPenFancy, FaYarn, FaFlask, FaBolt, FaArrowRight } from 'react-icons/fa';

const products = [
    {
        id: 1,
        title: 'Home Textiles',
        description: 'Discover the best bed and bath experience',
        icon: <FaBed className="text-3xl text-yellow-500" />,
        image: 'https://cdn.pixabay.com/photo/2018/01/24/15/08/live-3104077_1280.jpg',
    },
    {
        id: 2,
        title: 'Paper & Stationery',
        description: 'Ease your printing and eco-friendly paper',
        icon: <FaPenFancy className="text-3xl text-yellow-500" />,
        image: 'https://cdn.pixabay.com/photo/2016/07/31/11/52/notepad-1558811_1280.jpg',
    },
    {
        id: 3,
        title: 'Yarn',
        description: 'Find the right yarn for any fabric',
        icon: <FaYarn className="text-3xl text-yellow-500" />,
        image: '/path_to_yarn_image.jpg', // Replace with actual path
    },
    {
        id: 4,
        title: 'Chemicals',
        description: 'Choose the right chemical grade to suit your industry needs',
        icon: <FaFlask className="text-3xl text-yellow-500" />,
        image: '/path_to_chemicals_image.jpg', // Replace with actual path
    },
    {
        id: 5,
        title: 'Energy',
        description: 'Empowering your dreams with clean, green and cutting-edge energy',
        icon: <FaBolt className="text-3xl text-yellow-500" />,
        image: '/path_to_energy_image.jpg', // Replace with actual path
    },
];

const ProductCard = ({ product, onClick, isSelected }) => (
    <div
        onClick={() => onClick(product)}
        className={`cursor-pointer border custom-shadow rounded-lg p-4 sm:p-6 flex flex-col items-start justify-start w-full sm:w-60 md:w-72 lg:w-80 h-auto transition-all duration-300
        ${isSelected ? 'border-yellow-500' : 'border-none hover:border-yellow-500'}
        mx-2 mb-4 sm:mb-0 animate-fade-in-left`} // Apply fade-in-left animation
    >
        <div className="flex items-center">
            {product.icon}
            <h2 className={`text-sm md:text-base lg:text-lg font-bold ml-2 ${isSelected ? 'text-customGreen' : 'text-black'}`}>
                {product.title}
            </h2>
        </div>
        <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-2">{product.description}</p>
    </div>
);

const ProductDetails = ({ product }) => (
    <div className="relative flex flex-col items-center text-center mt-8">
        <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-md animate-fade-in-right" // Apply fade-in-right animation
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 bg-black bg-opacity-50 rounded-lg">
            <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin italic text-white mb-4" 
                style={{ fontFamily: 'cursive', paddingLeft: '20px' }}
            >
                {product.title}
            </h1>
            <div className="flex flex-col items-start text-white" style={{ paddingLeft: '20px', paddingBottom: '20px' }}>
                <p className="text-sm md:text-base lg:text-lg mb-2">{product.description}</p>
                <button
                    className="border-dotted border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center"
                >
                    Explore <span className="ml-2">&rarr;</span>
                </button>
            </div>
        </div>
    </div>
);

const Product = () => {
    const [selectedProduct, setSelectedProduct] = useState(products[1]); // Set the initial selected product
    const [loaded, setLoaded] = useState(false); // State to control fade-in effect

    useEffect(() => {
        setLoaded(true); // Set loaded to true after component mounts
    }, []);

    return (
        <div className={`p-4 md:p-6 lg:p-8 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'} animate-fade-in-left`}>
            <div className="relative">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500 mb-2 text-start">Trident Group's Presence in Your Daily Life</h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-thin mb-4 text-gray-400 text-start">Find out how</p>
                <div className="absolute sm:top-0 md:top-10 lg:top-2 right-0 bg-yellow-400 text-white p-4 sm:p-4   md:p-2 lg:p-4 rounded-lg shadow-lg transition animate-fade-in-right duration-300 hover:bg-customGreen z-20 flex items-center cursor-pointer">
                    <a href="https://www.tridentindia.com/ar/textiles" className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-100 mr-2">Explore Our Range</a>
                    <FaArrowRight className="w-4 h-6 sm:w-4 sm:h-7 md:w-5 md:h-8 lg:w-6 lg:h-9 transition-transform duration-300" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={setSelectedProduct}
                        isSelected={selectedProduct.id === product.id}
                    />
                ))}
            </div>
            <ProductDetails product={selectedProduct} />
        </div>
    );
};

export default Product;
