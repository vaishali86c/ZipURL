import React from 'react';

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white px-4">
      
      {/* Main Content Box */}
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-10 text-center backdrop-blur-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">Shorten. Share. Track.</h1>
        {/* URL Input Form */}
        <form className="space-y-6">
          <input 
            type="text" 
            name="longurl" 
            className="w-full px-5 py-3 text-lg border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your long URL..."
          />
            <input 
            type="text" 
            name="shorturl" 
            className="w-full px-5 py-3 text-lg border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Short URL will appear here..." 
            readOnly 
            />
          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Generate Short URL
          </button>
        </form>
      </div>
    </div>
  );
};

export default Body;
