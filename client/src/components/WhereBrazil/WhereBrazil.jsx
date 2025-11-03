import React from 'react';
import Bounce from '../Bounce/Bounce';
import Slide from '../Slide/Slide';
import ColorBar from '../Colorbar/Colorbar';
// The useRegion hook is removed as requested.

const WhereBrazil = () => {
  // Static title and description as requested.
  const title = "We Operate in the Kingdom of Saudi Arabia & GCC";
  const description = "WSB Cargo & Logistics is constantly growing in its area of ​​operation, whether through the opening of new branches or important and strategic partnerships with the most renowned companies on each continent. In this way, it offers all its customers a fast, safe and personalized service, whether for imports, exports or obtaining all solutions for customs clearance.";

  return (
    <div>
      <section className="flex flex-col  mx-auto items-center px-4 md:px-8 lg:px-16 bg-white">
        {/* DYNAMIC CONTENT REPLACED WITH STATIC CONTENT - STYLING IS UNCHANGED */}
        <h1 className='text-3xl font-poppins text-centre mt-6 lg:mt-40 mb-6 font-bold'>
          {title}
        </h1>
        {/* The 'text-center' class has been removed to match your original design */}
        <p className='text-gray-500  lg:mb-32 font-poppins'>
          {description}
        </p>
    
        <Bounce />
      </section>
      <Slide />
      <ColorBar />
    </div>
  );
};

export default WhereBrazil;