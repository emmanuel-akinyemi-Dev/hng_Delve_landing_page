import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      {/* Header */}
      <div className="w-full flex justify-end p-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700">
          Get the App!
        </button>
      </div>
      
      {/* Main Section */}
      <div className="text-center max-w-2xl">
        <div className="flex justify-center mb-6">
          {/* Placeholder for the image */}
          <div className="w-40 h-40 bg-purple-900 rounded-full flex items-center justify-center">
            {/* Replace with an actual image */}
            <span className="text-white text-lg">📱</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900">
          Fun Word Matching for Faster Language Learning with
          <span className="text-purple-600"> Delve</span>
        </h1>
        
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700">
          Start Matching
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
