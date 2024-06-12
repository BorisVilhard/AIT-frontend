// Import React
import React from 'react';

// Define the component
const Loading = () => {
  return (
    <div className="relative flex justify-center items-center w-12 h-12">
      <span className="inline-block w-12 h-12 rounded-full border-t-4 border-t-custom-white border-r-4 border-r-transparent animate-spin-slow"></span>
      <span className="absolute top-0 left-0 w-12 h-12 rounded-full border-l-4 border-l-custom-orange border-b-4 border-b-transparent animate-spin-slow-reverse"></span>
    </div>
  );
};

// Export the component
export default Loading;