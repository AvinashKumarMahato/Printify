import React from 'react';
import hero from '../assets/drawing-person-with-sign-that-says_1244682-379 (1).jpg';
import play from '../assets/play.svg';

const Hero = () => {
    return (
        <div className="bg-white text-black p-10 pt-24 flex flex-col md:flex-row">
            {/* -----Left Side---- */}
            <div className="flex-1 flex flex-col justify-center">
                <p className="text-[56px] leading-[72px] text-[#17262b] font-bold">
                    Create and <br /> sell custom <br /> products
                </p>
                <div className="mt-6 relative pt-2 pl-10">
                    <p className="text-lg flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        100% Free to use
                    </p>
                    <p className="text-lg flex items-center mt-2">
                        <svg className="w-5 h-5 text-green-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        900+ High Quality Products
                    </p>
                    <p className="text-lg flex items-center mt-2">
                        <svg className="w-5 h-5 text-green-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Largest global print network
                    </p>
                </div>
                <div className="hidden md:flex space-x-4 mt-6">  
                    <button className="inline-block h-10 text-white bg-green-600 shadow-md rounded-lg px-6 min-w-[120px] text-base font-medium">
                        Start for free
                    </button>
                    <button className="inline-flex items-center h-10 border border-gray-300 text-gray-800 bg-white shadow-md rounded-lg px-6 min-w-[120px] text-base font-medium">
                        <img src={play} alt="How it works" className="w-4 h-4 mr-2" />
                        How it works?
                    </button>
                </div>
                <div className="mt-4 text-md" style={{ color: '#39b65e', fontWeight: 500 }}>
                    <p>Trusted by over 8M sellers around the world</p>
                </div>
            </div>

            {/* ----Right Side---- */}
            <div className="flex-1 relative mt-8 md:mt-0 flex items-center justify-center">
                <img className="w-full h-auto rounded-lg" src={hero} alt="header_img" />
            </div>
        </div>
    );
};

export default Hero;
