
import React from 'react';

const Shimmer = () => {
  return (
     <div className="flex flex-wrap justify-center gap-6 py-10">
      {Array(12).fill(0).map((_, index) => (
        <div
          key={index}
          className="w-full max-w-[260px] rounded-lg overflow-hidden shadow bg-white animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="w-full aspect-video bg-gray-300" />

          {/* Category Tag Placeholder */}
          <div className="ml-5 mt-4 h-4 w-24 bg-gray-300 rounded-full" />

          {/* Title & Description Placeholder */}
          <div className="p-5">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
