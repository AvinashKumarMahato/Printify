import React from 'react';
import money from '../assets/2009.i518.001_crowdfunding_set-07.jpg';

const MakeMoney = () => {
    return (
        <div className="bg-white p-8">
            {/* Container with border-radius */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#203741] text-white rounded-[20px] overflow-hidden">
                {/* --- Left Side --- */}
                <div className="p-6 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">
                        Make Money, Risk-Free
                    </h1>
                    <p className="text-lg">
                        You pay for fulfillment only when you make a sale.
                    </p>

                    {/* --- Inside Div for Vertical Alignment --- */}
                    <div className="bg-[#17262b] rounded-[10px] mt-4 p-4">
                        {/* Flex container for vertical alignment */}
                        <div className="flex justify-between items-center">
                            <p className="text-white">You sell a t-shirt</p>
                            <span className="text-white">$30</span>
                        </div>

                        <div className="flex justify-between items-center mt-2">
                            <p className="text-white">You pay for its production</p>
                            <span className="text-white">$12</span>
                        </div>

                        {/* --- Horizontal Line Below $12 --- */}
                        <hr className="border-t border-[#485256] my-2" />

                        <div className="flex justify-between items-center">
                            <p className="text-[#1bcf75] font-bold">Your profit</p>
                            <span className="text-[#1bcf75] font-bold">$18</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-[#17b164] transition duration-200">
                            Start Selling
                        </button>
                        <p className="text-lg flex items-center mt-2">
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
                </div>

                {/* --- Right Side --- (Hidden on small devices) */}
                <div className="hidden md:block md:w-1/2">
                    <img src={money} alt="money" className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    );
};

export default MakeMoney;
