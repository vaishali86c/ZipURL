// import React from 'react'

// const Body = () => {
//   return (
//     <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-lg text-center">
//       <h2 className="sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-blue-800 mb-10">Shorten. Share. Track.</h2>
//       <form className="space-y-10">
//         <input 
//           type="text" 
//           name="longurl" 
//           id="longurl" 
//           className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" 
//           placeholder="Enter your URL..." 
//         />
//         <input 
//           type="text" 
//           name="shorturl" 
//           id="shorturl" 
//           className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" 
//           placeholder="Short URL will appear here..." 
//           readOnly 
//         />
//         <button 
//           type="submit" 
//           className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//         >
//           Generate Short URL
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Body

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
