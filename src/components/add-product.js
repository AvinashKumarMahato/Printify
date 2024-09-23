import React from 'react';
import cardImage from '../assets/add.svg';
import arrowRight from '../assets/link-arrow.svg';
import create from '../assets/custom-products.webp';
import sell from '../assets/your-products.webp';
import fullfillment from '../assets/fullfillment.webp';

const AddProduct = () => {
    return (
        <div className="bg-[#f7f7f7] relative p-10">
            {/* First Div */}
            <div className="max-w-[1216px] mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start">
                {/* Left Side - Image */}
                <div className="flex-1">
                    <img src={cardImage} alt="Description" className="w-full h-auto rounded-lg" />
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 p-4">
                    <h3 
                        className="text-2xl font-semibold mb-4" 
                        style={{
                            color: '#17262b',
                            fontSize: '32px',
                            fontFamily: 'CerebriSans, sans-serif',
                            fontWeight: 700,
                            lineHeight: '39px',
                            letterSpacing: '-1px',
                        }}
                    >
                        Easily add your design to a <br /> wide range of products
                    </h3>
                    <p 
                        className="text-left"
                        style={{
                            color: '#485256',
                            paddingTop: '32px',
                            paddingBottom: '48px',
                            opacity: 0.7,
                            lineHeight: '23px',
                            fontSize: '16px',
                        }}
                    >
                        With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
                    </p>

                    <p className="relative inline-block font-medium text-[#39b75d] cursor-pointer transition-colors duration-150">
                        All Products
                        <img src={arrowRight} alt="arrow-right" className="absolute w-4 h-4 right-[-25px] top-[2px]" />
                    </p>
                </div>
            </div>

            {/* Second Div */}
            <div className="max-w-[1216px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* 1st Part */}
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
                        <img src={create} alt="Custom-product" className="w-full h-full object-cover" />
                    </div>
                    <p className="pt-10 uppercase text-[18px] leading-[24px] text-[#29ab51] font-semibold font-CerebriSans">Create</p>
                    <h3 className="text-[24px] leading-[32px] text-[#17262b] font-bold font-CerebriSans">custom products</h3>
                    <p className="pt-4 text-[14px] leading-[20px] text-[#485256]">Easily add your designs to a wide range of products using free tools</p>
                </div>

                {/* 2nd Part */}
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
                        <img src={sell} alt="Sell" className="w-full h-full object-cover" />
                    </div>
                    <p className="pt-10 uppercase text-[18px] leading-[24px] text-[#29ab51] font-semibold font-CerebriSans">Sell</p>
                    <h3 className="text-[24px] leading-[32px] text-[#17262b] font-bold font-CerebriSans">on your terms</h3>
                    <p className="pt-4 text-[14px] leading-[20px] text-[#485256]">You choose the products, sale price, and where to sell</p>
                </div>

                {/* 3rd Part */}
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
                        <img src={fullfillment} alt="Fulfillment" className="w-full h-full object-cover" />
                    </div>
                    <p className="pt-10 uppercase text-[18px] leading-[24px] text-[#29ab51] font-semibold font-CerebriSans">We handle</p>
                    <h3 className="text-[24px] leading-[32px] text-[#17262b] font-bold font-CerebriSans">fulfillment</h3>
                    <p className="pt-4 text-[14px] leading-[20px] text-[#485256]">Once an order is placed, we automatically handle all the printing and delivery logistics</p>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
