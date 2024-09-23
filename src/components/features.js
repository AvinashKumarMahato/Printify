import React from 'react';
import higherProfitsIcon from '../assets/higher-profits.svg';
import robustScalingIcon from '../assets/robust-scaling.svg';
import bestSelectionIcon from '../assets/best-selection.svg';

const Features = () => {
    return (
        <div className="bg-white p-10 max-w-[1216px] mx-auto flex flex-col md:flex-row justify-around items-start" style={{ padding: '100px 74px' }}>
            {/* 1st Part */}
            <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full p-4 mb-4">
                    <img src={higherProfitsIcon} alt="Higher Profits" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold" style={{ fontSize: '24px', lineHeight: '32px', color: '#17262b', paddingTop: '16px' }}>Higher Profits</h3>
                <p className="mt-2 text-left" style={{ lineHeight: '23px', fontSize: '16px' }}>
                    We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
                </p>
            </div>

            {/* 2nd Part */}
            <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full p-4 mb-4">
                    <img src={robustScalingIcon} alt="Robust Scaling" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold" style={{ fontSize: '24px', lineHeight: '32px', color: '#17262b', paddingTop: '16px' }}>Robust Scaling</h3>
                <p className="mt-2 text-left" style={{ lineHeight: '23px', fontSize: '16px' }}>
                    Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
                </p>
            </div>

            {/* 3rd Part */}
            <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full p-4 mb-4">
                    <img src={bestSelectionIcon} alt="Best Selection" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold" style={{ fontSize: '24px', lineHeight: '32px', color: '#17262b', paddingTop: '16px' }}>Best Selection</h3>
                <p className="mt-2 text-left" style={{ lineHeight: '23px', fontSize: '16px' }}>
                    With 900+ products and top quality brands, you can choose the best products for your business.
                </p>
            </div>
        </div>
    );
};

export default Features;
