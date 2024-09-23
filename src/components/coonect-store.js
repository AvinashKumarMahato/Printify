import React from 'react';
import presta from '../assets/presta.svg';
import bigCommerce from '../assets/big-commerce.svg';
import shopify from '../assets/shopify.svg';
import squareSpace from '../assets/squarespace.svg';
import woo from '../assets/woo.svg';
import wix from '../assets/wix.svg';
import etsy from '../assets/etsy.svg';

const ConnectStore = () => {
  return (
    <div className="bg-white p-8 text-center">
      {/* Heading Section */}
      <h2 className="text-2xl font-bold text-[#17262b] mb-4">
        Connect your store
      </h2>
      <p className="text-base text-[#485256] mb-8">
        Printify easily integrates with major e-commerce platforms and marketplaces.
      </p>

      {/* Wrapper for consistent padding */}
      <div className="mx-auto max-w-7xl px-4">
        {/* Grid Layout for Images */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Each image block */}
          <div className="p-4">
            <img src={presta} alt="Presta" className="w-20 h-20 mx-auto" />
          </div>
          <div className="p-4">
            <img src={bigCommerce} alt="BigCommerce" className="w-20 h-20 mx-auto" />
          </div>
          <div className="p-4">
            <img src={shopify} alt="Shopify" className="w-20 h-20 mx-auto" />
          </div>
          <div className="p-4">
            <img src={squareSpace} alt="Squarespace" className="w-20 h-20 mx-auto" />
          </div>
          <div className="p-4">
            <img src={woo} alt="Woo" className="w-20 h-20 mx-auto" />
          </div>
          <div className="p-4">
            <img src={wix} alt="Wix" className="w-20 h-20 mx-auto" />
          </div>
          <div className="p-4">
            <img src={etsy} alt="Etsy" className="w-20 h-20 mx-auto" />
          </div>
          <div className="p-4 flex justify-center items-center">
            <p className="text-[#17262b] font-bold">Many More</p>
          </div>
        </div>

        {/* Sales Section */}
        <div className="bg-[#1bcf75] px-4 py-6 mt-10 rounded-lg flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[#096939] mb-4 sm:mb-0">
            Are you a large business looking <br />for a custom solution?
          </h2>
          <button className="bg-white text-[#353a47] font-semibold py-2 px-4 rounded cursor-pointer">
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectStore;
