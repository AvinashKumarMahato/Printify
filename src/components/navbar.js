import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import chevronDown from '../assets/chevron-down.svg';
import chevronUp from '../assets/chevron-up.svg';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full left-0 top-0 z-50 bg-white border-b border-gray-300 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <button className="text-gray-700 hover:text-gray-900">Catalog</button>

            <div className="relative" onMouseEnter={() => handleMouseEnter('howItWorks')} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                How it works
                <img
                  src={openDropdown === 'howItWorks' ? chevronUp : chevronDown}
                  alt="Chevron"
                  className="ml-1 w-4 h-4 transition-transform duration-300"
                />
              </button>
              {openDropdown === 'howItWorks' && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg z-10">
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">How Printify Works</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Print On Demand</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Print Quality Service</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">What to Sell?</button>
                </div>
              )}
            </div>

            <button className="text-gray-700 hover:text-gray-900">Pricing</button>
            <button className="text-gray-700 hover:text-gray-900">Blog</button>

            <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Services
                <img
                  src={openDropdown === 'services' ? chevronUp : chevronDown}
                  alt="Chevron"
                  className="ml-1 w-4 h-4 transition-transform duration-300"
                />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg z-10">
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Printify Studio</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Printify Express Delivery</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Transfer Products</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Order in Bulk</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Experts Program</button>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => handleMouseEnter('useCases')} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Use-cases
                <img
                  src={openDropdown === 'useCases' ? chevronUp : chevronDown}
                  alt="Chevron"
                  className="ml-1 w-4 h-4 transition-transform duration-300"
                />
              </button>
              {openDropdown === 'useCases' && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg z-10">
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Merch for Fans</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Merch for eCommerce</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Merch for Enterprises</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Grow Your Store</button>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => handleMouseEnter('needHelp')} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Need help?
                <img
                  src={openDropdown === 'needHelp' ? chevronUp : chevronDown}
                  alt="Chevron"
                  className="ml-1 w-4 h-4 transition-transform duration-300"
                />
              </button>
              {openDropdown === 'needHelp' && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg z-10">
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Help Center</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Contacts</button>
                  <button className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">My Requests</button>
                </div>
              )}
            </div>
          </div>

          {/* Log In and Sign Up buttons - Desktop */}
          <div className="hidden md:flex space-x-4">
            <button className="inline-block h-9 border border-gray-300 text-gray-800 bg-white shadow-md rounded px-4 min-w-[88px] text-base font-medium">
              Log In
            </button>
            <button className="inline-block h-9 text-white bg-green-600 shadow-md rounded px-4 min-w-[88px] text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu - Collapsible */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-4">
            <button className="text-gray-700 hover:text-gray-900">Catalog</button>
            <button className="text-gray-700 hover:text-gray-900">How it works</button>
            <button className="text-gray-700 hover:text-gray-900">Pricing</button>
            <button className="text-gray-700 hover:text-gray-900">Blog</button>
            <button className="text-gray-700 hover:text-gray-900">Services</button>
            <button className="text-gray-700 hover:text-gray-900">Use-cases</button>
            <button className="text-gray-700 hover:text-gray-900">Need help?</button>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <button className="inline-block h-9 border border-gray-300 text-gray-800 bg-white shadow-md rounded px-4 min-w-[88px] text-base font-medium">
                Log In
              </button>
              <button className="inline-block h-9 text-white bg-green-600 shadow-md rounded px-4 min-w-[88px] text-base font-medium mb-4 md:mb-0">
                Sign Up
              </button>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
