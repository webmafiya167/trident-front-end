// src/components/Flipbook.js
import React from 'react';
import FlipPage from 'react-flip-page';
import img1 from './1.jpg';
import img2 from './2.jpg';

const Book = () => {
    const bgImg = "https://img.freepik.com/free-photo/top-view-thread-with-buttons-needles_23-2148739437.jpg?t=st=1724054019~exp=1724057619~hmac=bf2be8f6c36a51b2b9a7e4baff6173e36d01d5b61fadf6bf528a1652c2450119&w=900"; // Newspaper background image URL

    return (
        <div
            className="relative flex flex-col items-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})`, backgroundColor: '#f7f3e9' }} // Set the background image and match the color
        >
            <h2 className="absolute top-0 left-0 p-2  font-bold text-4xl text-center text-gray-500 rounded-br-lg mb-4">
                News Headlines
            </h2>
            <div className="flex flex-wrap justify-center gap-4 p-4 w-full mt-10">
                {/* First Flipbook */}
                <div className="flex-1 min-w-[300px] max-w-[500px]">
                    <FlipPage
                        className="border-none custom-shadow rounded-lg"
                        width="100%" // Full width of the container
                        height="500" // Adjust the height
                        showSwipeHint
                        orientation="horizontal"
                        uncutPages
                        flipOnTouch // Allow flipping on touch/click
                    >
                        <article>
                            <div className="w-full h-full bg-white rounded-lg p-5">
                                <div className="text-left">
                                    <img
                                        src={img1}
                                        alt="Slider Gallery"
                                        className="w-full h-56 rounded-lg mb-4 object-cover"
                                    />
                                    <h2 className="text-2xl font-bold text-customGreen mb-3">SLIDER GALLERY</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        This tutorial is about creating a creative gallery with a slider for the thumbnails. The idea is to have an expanding thumbnails area which opens once an album is chosen. The thumbnails will scroll to the end and move back to the first image. The user can scroll through the thumbnails by using the slider controls. When a thumbnail is clicked, it moves to the center and the full image preview opens.
                                    </p>
                                    <div className="flex justify-around mt-4">
                                        <a href="#" className="text-gray-800 font-bold hover:text-customGreen">ARTICLE</a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="w-full h-full bg-white rounded-lg p-5">
                                <div className="text-left">
                                    <img
                                        src={img2}
                                        alt="Animated Portfolio Gallery"
                                        className="w-full h-56 rounded-lg mb-4 object-cover"
                                    />
                                    <h2 className="text-2xl font-bold text-customGreen mb-3">ANIMATED PORTFOLIO GALLERY</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Today we will create an animated portfolio gallery with jQuery. The gallery will contain a scroller for thumbnails and a content area where we will display details about the portfolio item. The image can be enlarged by clicking on it, making it appear as an overlay.
                                    </p>
                                    <div className="flex justify-around mt-4">
                                        <a href="#" className="text-gray-800 font-bold hover:text-customGreen">ARTICLE</a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Page 3 */}
                        <article>
                            <div className="w-full h-full bg-white rounded-lg p-5">
                                <div className="text-left">
                                    <img
                                        src="https://textilevaluechain.in/wp-content/uploads/2021/03/trident-group-vector-logo.png" // Placeholder image for the third page
                                        alt="Third Page Image"
                                        className="w-full h-56 rounded-lg mb-4 object-cover"
                                    />
                                    <h2 className="text-2xl font-bold text-customGreen mb-3">THIRD PAGE</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        This is the third page content. You can customize this with your desired content.
                                    </p>
                                    <div className="flex justify-around mt-4">
                                        <a href="#" className="text-gray-800 font-bold hover:text-customGreen">ARTICLE</a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Page 4 */}
                        <article>
                            <div className="w-full h-full bg-white rounded-lg p-5">
                                <div className="text-left">
                                    <img
                                        src="https://via.placeholder.com/150" // Placeholder image for the fourth page
                                        alt="Fourth Page Image"
                                        className="w-full h-56 rounded-lg mb-4 object-cover"
                                    />
                                    <h2 className="text-2xl font-bold text-customGreen mb-3">FOURTH PAGE</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        This is the fourth page content. You can customize this with your desired content.
                                    </p>
                                    <div className="flex justify-around mt-4">
                                        <a href="#" className="text-gray-800 font-bold hover:text-customGreen">ARTICLE</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </FlipPage>
                </div>

                {/* Second Flipbook */}
                <div className="flex-1 min-w-[300px] max-w-[500px] hidden sm:block">
                    <FlipPage
                        className="border-none custom-shadow rounded-lg"
                        width="100%" // Full width of the container
                        height="500" // Adjust the height
                        showSwipeHint
                        orientation="horizontal"
                        uncutPages
                        flipOnTouch // Allow flipping on touch/click
                    >
                        <article>
                            <div className="w-full h-full bg-white rounded-lg p-5">
                                <div className="text-left">
                                    <img
                                        src={img1}
                                        alt="Slider Gallery"
                                        className="w-full h-56 rounded-lg mb-4 object-cover"
                                    />
                                    <h2 className="text-2xl font-bold text-customGreen mb-3">SLIDER GALLERY</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        This tutorial is about creating a creative gallery with a slider for the thumbnails. The idea is to have an expanding thumbnails area which opens once an album is chosen. The thumbnails will scroll to the end and move back to the first image. The user can scroll through the thumbnails by using the slider controls. When a thumbnail is clicked, it moves to the center and the full image preview opens.
                                    </p>
                                    <div className="flex justify-around mt-4">
                                        <a href="#" className="text-gray-800 font-bold hover:text-customGreen">ARTICLE</a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="w-full h-full bg-white rounded-lg p-5">
                                <div className="text-left">
                                    <img
                                        src={img2}
                                        alt="Animated Portfolio Gallery"
                                        className="w-full h-56 rounded-lg mb-4 object-cover"
                                    />
                                    <h2 className="text-2xl font-bold text-customGreen mb-3">ANIMATED PORTFOLIO GALLERY</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Today we will create an animated portfolio gallery with jQuery. The gallery will contain a scroller for thumbnails and a content area where we will display details about the portfolio item. The image can be enlarged by clicking on it, making it appear as an overlay.
                                    </p>
                                    <div className="flex justify-around mt-4">
                                        <a href="#" className="text-gray-800 font-bold hover:text-customGreen">ARTICLE</a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Page 3 */}
                        <article>
                            <div className="w-full h-full bg-white rounded-lg p-5">
                                <div className="text-left">
                                    <img
                                        src="https://textilevaluechain.in/wp-content/uploads/2021/03/trident-group-vector-logo.png" // Placeholder image for the third page
                                        alt="Third Page Image"
                                        className="w-full h-56 rounded-lg mb-4 object-cover"
                                    />
                                    <h2 className="text-2xl font-bold text-customGreen mb-3">THIRD PAGE</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        This is the third page content. You can customize this with your desired content.
                                    </p>
                                    <div className="flex justify-around mt-4">
                                        <a href="#" className="text-gray-800 font-bold hover:text-customGreen">ARTICLE</a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Page 4 */}
                        <article>
                            <div className="w-full h-full bg-white rounded-lg p-5">
                                <div className="text-left">
                                    <img
                                        src="https://via.placeholder.com/150" // Placeholder image for the fourth page
                                        alt="Fourth Page Image"
                                        className="w-full h-56 rounded-lg mb-4 object-cover"
                                    />
                                    <h2 className="text-2xl font-bold text-customGreen mb-3">FOURTH PAGE</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        This is the fourth page content. You can customize this with your desired content.
                                    </p>
                                    <div className="flex justify-around mt-4">
                                        <a href="#" className="text-gray-800 font-bold hover:text-customGreen">ARTICLE</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </FlipPage>
                </div>
            </div>
        </div>
    );
};

export default Book;
