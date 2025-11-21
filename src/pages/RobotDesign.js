import React from 'react';
import './RobotDesign.css';
import codeImg from '../media/code.png';
import robotPartsImg from '../media/robotparts.png';
import planningImg from '../media/planning.png'
import spacersImg from '../media/spacers.png';

function RobotDesign() {
  return (
    <div className="RobotDesign bg-gray-50 min-h-screen">
      
      <header className="robot-design-header px-4 py-8 text-center">
        <h1 className="robot-design-title text-4xl font-bold mb-2">Robot Design & Strategy</h1>
        <p className="robot-design-subtitle text-white-600">
          Note: This information is also on the trifold in front of you
        </p>
      </header>

      <main className="robot-design-main px-4 py-8">

        {/* TOP SECTION */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Design</h2>
            <p className="text-gray-700">
              Our team designed a compact robot with multiple attachments. Our robot navigates on two 3.5" diameter motor-driven back wheels and a rollerball acting as a front wheel. We build extra pieces as spacers to help us set up for missions.
            </p>
          </div>
        </section>
        <br></br>

        {/* GRID — 3 EQUAL COLUMNS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* COL 1 — Planning */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Planning</h2>
            <br></br>
            <img
              src={planningImg}
              alt="Robot planning and strategy"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg mb-4 mx-auto"
            />
            <br></br>
            <p className="text-gray-600">
              We used a document with all the missions listed out, how hard they were, and how many points they were worth to strategize which missions were worth doing first, and which ones we could skip or work on later.
            </p>
          </div>
          {/* COL 2 — Programming */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Programming</h2>
            <br></br><br></br>
            <p className="text-gray-600 mb-4">
              Our team used Spike Coding, a web-based system made by LEGO.
            </p>
            <br></br>
            <img
              src={codeImg}
              alt="Spike Coding interface"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg mb-4 mx-auto"
            />
            <br></br>
            <p className="text-gray-600">
              We used this program to create codes that controlled our robot's movements.
            </p>
          </div>

          {/* COL 3 — Additional Pieces */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Additional Pieces</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col items-center text-center">
                <img
                  src={robotPartsImg}
                  alt="Attachments for the Robot"
                  loading="lazy"
                  className="h-auto object-contain rounded-lg mb-2 mx-auto"
                />
                <p className="text-gray-600 text-sm">Attachments for the Robot</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src={spacersImg}
                  alt="Spacers to Assist in Setup"
                  loading="lazy"
                  className="h-auto object-contain rounded-lg mb-2 mx-auto"
                />
                <p className="text-gray-600 text-sm">Spacers to Assist in Setup</p>
              </div>
            </div>
            <br></br>
              <p className="text-gray-600">
              We used these pieces interchangeably for our robot to achieve different tasks. After certain missions are complete with one additional piece attached, we can send the robot back to the handling area, change the attachments, and have it go for a different task.
              </p>
          </div>

        </section>
      </main>
    </div>
  );
}

export default RobotDesign;
