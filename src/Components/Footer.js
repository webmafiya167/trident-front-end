import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import Fimg from './trident.png'; // path to your image

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 p-6 md:p-6 lg:p-8">
            <div className="container  grid grid-cols-1 md:grid-cols-5 gap-12 fade-in">
                {/* Our Offerings */}
                <div>
                    <h3 className="font-bold text-customGreen mb-6">OUR OFFERINGS</h3>
                    <ul>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Bed Domestic</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Bath Domestic</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline "><a href="#">Bed Global</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Bath Global</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Paper</a></li>
                        <li className="mb-4  hover:text-customGreen hover:underline"><a href="#">Yarn</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Chemical</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Energy</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Shop Online</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Corporate Solutions</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Trident Foundation</a></li>
                    </ul>
                </div>

                {/* Corporate */}
                <div>
                    <h3 className="font-bold text-customGreen mb-6">CORPORATE</h3>
                    <ul>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">The Company</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">About Us</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Leadership</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Innovation Hub</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Sustainability</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Our Social Responsibility</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Careers</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Media</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">News & Events</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">General Terms</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Authority Matrix</a></li>
                    </ul>
                </div>

                {/* Investor Relations */}
                <div>
                    <h3 className="font-bold text-customGreen mb-6">INVESTOR RELATIONS</h3>
                    <ul>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Investor Grievance</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Financial Information</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Shareholder Information</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Corporate Governance</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Annual Report 2024</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Digital Annual Report 2024</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Disclosure Under Regulation 46 of SEBI LODR</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Press Release</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Link To SMART ODR</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">SEBI Circular On Online Dispute Resolution</a></li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div>
                    <h3 className="font-bold text-customGreen mb-6">GET IN TOUCH</h3>
                    <ul>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Contact Us</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Support</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Write To RG</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline"><a href="#">Become A Channel Partner</a></li>
                        <li className="mb-4 hover:text-customGreen hover:underline" ><a href="#">Become A Distributor / Retailer</a></li>
                    </ul>
                </div>

                {/* Follow Us On */}
                <div>
                    <h3 className="font-bold text-customGreen mb-6">FOLLOW US ON</h3>
                    <div className="flex gap-6 mb-8">
                        <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
                        <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube size={24} /></a>
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin size={24} /></a>
                    </div>
                    <div className="p-6 custom-shadow w-72  rounded-lg shadow-sm  ">
                        <img src={Fimg} 
                        alt="Trident Logo" 
                        className="h-48  w-68 mr-8 object-cover mb-4" />
                        <p className="text-sm  text-gray-600">We at mytrident.com bring to you a range of products that make your home your very own home. The best place on earth. We thoughtfully curate our products, from the bottom of our heart, to be delivered at your very doorstep. That’s myTrident.com for you.</p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto text-center mt-8 border-t pt-4">
                <img src="https://assets.tridentindia.com/Trident_Logo_Registered_489c31b1ff.svg" alt="Trident Logo" className="h-12 mx-auto mb-4" />
                <p className="text-gray-500 text-center  ">© 2023 Trident Limited, India</p>
                <p className="text-gray-500 text-end  font-bold   mt-1"><a href="#" className="hover:underline hover:text-customGreen">PRIVACY POLICY</a></p>
            </div>
        </footer>
    );
};

export default Footer;
