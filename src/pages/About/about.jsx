import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="main bg-emerald-400 flex flex-col items-center px-4 py-12">
    
        <h1 className="text-3xl sm:text-4xl text-white font-bold mt-30 mb-7 uppercase text-center">
          About Component
        </h1>

   
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white w-16 h-1 mx-2"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L3.041 10.387a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <div className="bg-white w-16 h-1 mx-2"></div>
        </div>

        {/* Paragraphs */}
        <div className="flex flex-col lg:flex-row gap-10 text-white text-center lg:text-left max-w-5xl mb-35">
          <div className="flex-1">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
          <div className="flex-1">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
