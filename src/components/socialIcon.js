import React from 'react';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';

const SocialIcon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 md:p-8">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <img src={logo} alt="logo" className="w-32 h-auto" />
      </div>

      {/* Social Icons with Circular Background */}
      <div className="flex space-x-4">
        {/* Circular Icon Wrapper */}
        {[
          { src: facebook, alt: 'facebook' },
          { src: instagram, alt: 'instagram' },
          { src: linkedin, alt: 'linkedin' },
          { src: twitter, alt: 'twitter' },
          { src: youtube, alt: 'youtube' },
        ].map((icon) => (
          <div key={icon.alt} className="bg-green-600 p-3 rounded-full cursor-pointer">
            <img src={icon.src} alt={icon.alt} className="w-6 h-6 filter brightness-0 invert" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialIcon;
