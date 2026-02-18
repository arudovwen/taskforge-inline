import React from 'react';
import TaskforgeLogoSvg from './assets/svgs/taskforge-logo';
import './index.css'

function App() {
  return (
    <div className="h-screen w-full bg-[#F8F9FA] flex flex-col justify-center auth-bg">
      {/* Container with Padding */}
      <div className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-[650px] w-full mx-auto">

          {/* Card Container */}
          <div className="border border-[#D5D9EB] rounded-lg shadow-lg bg-white overflow-hidden">

            {/* Logo Area */}
            <div className="flex justify-center items-center py-10 bg-[#f4f7fb]">
              <TaskforgeLogoSvg className="h-10 w-auto" />
            </div>

            {/* Content */}
            <div className="px-6 py-8 text-center">
              <h1 className="text-2xl font-semibold text-[#252B37] mb-6">
                Welcome to Taskforge Forms
              </h1>
              <p className="text-base text-[#535862] mb-6 max-w-[450px] mx-auto">
                Collect data efficiently and securely with Taskforge forms. Use this platform to manage your requests.
              </p>

              {/* CTA Button */}
              <a
                rel='noopener'
                href="https://tva.thetaskforge.co"
                target='_blank'
                className="inline-block px-6 py-3 bg-[#42307D] text-white rounded-lg  font-semibold hover:bg-[#5e3f9d] transition"
              >
                Create Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
