import React from 'react'

const BottomBar = () => {
  return (
    <div className="bg-[#f7f7f7] p-4 border-t border-gray-300">
      <ul className="flex flex-wrap justify-center space-x-8 mb-2">
        <li className="text-[#353a47] hover:text-green-600 cursor-pointer">Intellectual Property Policy</li>
        <li className="text-[#353a47] hover:text-green-600 cursor-pointer">Terms of Service</li>
        <li className="text-[#353a47] hover:text-green-600 cursor-pointer">Privacy Policy</li>
        <li className="text-[#353a47] hover:text-green-600 cursor-pointer">Security</li>
      </ul>
      <div className="text-center text-[#353a47]">
        <p>&copy; 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default BottomBar;
