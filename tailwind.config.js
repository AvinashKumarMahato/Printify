// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
      './public/index.html', // Include any other relevant paths
    ],
    theme: {
        extend: {
            animation: {
                orbit: 'orbit 4s linear infinite',
            },
            keyframes: {
                orbit: {
                    '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
                },
            },
        },
    },
    plugins: [],
  };
  