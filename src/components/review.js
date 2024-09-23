import React from 'react';
import Slider from 'react-slick';
import userImage from '../assets/circle-user-round.svg';

const Review = () => {
  const sliderSettings = {
    dots: true, 
    infinite: true,  
    speed: 500,  
    slidesToShow: 3, 
    slidesToScroll: 1,  
    swipe: true,  
    touchMove: true,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: 'John Doe',
      store: 'Store link',
      review: 'The service provided has been exceptional! Tremendous growth in our store.',
    },
    {
      name: 'Jane Smith',
      store: 'Store link',
      review: 'Printify has made it easy for me to scale my business. Very smooth integration.',
    },
    {
      name: 'Alex Johnson',
      store: 'Store link',
      review: 'We love Printify! Their customer service is outstanding, and the platform is great.',
    },
    {
      name: 'Emma Davis',
      store: 'Store link',
      review: 'I’ve seen significant improvement in my sales since using Printify. Highly recommend!',
    },
    {
      name: 'Chris Williams',
      store: 'Store link',
      review: 'Printify makes my life easier by managing all the printing needs efficiently.',
    },
    {
      name: 'Sophia Brown',
      store: 'Store link',
      review: 'Great platform for entrepreneurs like me! Very user-friendly and supportive.',
    },
  ];

  return (
    <div className="bg-[#f7f7f7] p-8">
      <div className="flex flex-row items-center justify-center">
        {/* Keeping the h1 and p tags unchanged */}
        <h1 className="mr-16 text-[40px] leading-[56px] font-bold text-[#353a47] tracking-[-1px] font-CerebriSans">
          Trusted by over 8M <br /> sellers around the <br /> world
        </h1>
        <p className="text-base text-[#485256] max-w-xs">
          Whether you are getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
        </p>
      </div>

      {/* ---Slider Section for Reviews---- */}
      <div className="mt-10">
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
                <div className="flex items-center mb-4">
                  {/* User Image */}
                  <img
                    src={userImage}
                    alt="User"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    {/* User Name */}
                    <h2 className="text-xl font-semibold text-[#17262b]">
                      {review.name}
                    </h2>
                    {/* Store Link */}
                    <a
                      href={review.store}
                      className="text-sm text-[#1bcf75]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {review.store}
                    </a>
                  </div>
                </div>

                {/* Five Stars for Review */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Review Description */}
                <p className="text-base text-[#485256]">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
