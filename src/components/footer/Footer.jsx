import React from 'react';

export default function Footer() {
  return (
    <div className="flex flex-col">
      {/* Top Footer Section */}
      <div className="bg-indigo-950 text-white px-4 py-10">
        <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center  lg:flex-row lg:justify-between">
          {/* Location */}
          <div className="text-center">
            <h2 className="font-semibold text-2xl mb-2 uppercase">Location</h2>
            <span className="block">2215 John Daniel Drive</span>
            <span>Clark, MO 65243</span>
          </div>

          {/* Around the Web */}
          <div className="text-center">
            <h2 className="font-semibold text-2xl mb-3 uppercase">Around the Web</h2>
            <ul className="flex justify-center gap-3 flex-wrap">
              {[...Array(4)].map((_, i) => (
                <li
                  key={i}
                  className="border border-white rounded-full p-2 hover:bg-white hover:text-indigo-950 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* About Freelancer */}
          <div className="text-center max-w-md">
            <h2 className="font-semibold text-2xl mb-2 uppercase">About Freelancer</h2>
            <p className="px-2">
              Freelance is a free to use, licensed Bootstrap theme created by Route.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gray-800 text-center py-4">
        <span className="text-white block text-sm">
          Copyright © Your Website 2021
        </span>
      </div>
    </div>
  );
}
