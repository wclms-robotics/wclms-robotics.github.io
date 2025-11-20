import React from 'react';
import './RobotDesign.css';
import codeImg from '../media/code.png';
import robotPartsImg from '../media/robotparts.png';
import spacersImg from '../media/spacers.png';

function RobotDesign() {

  return (
    <div className="RobotDesign bg-gray-50 min-h-screen">
      <header className="robot-design-header">
        <h1 className="robot-design-title">Robot Design & Strategy</h1>
        <p className="robot-design-subtitle">Note: This information is also on the trifold in front of you</p>
      </header>

      <main className="robot-design-main container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Design</h2>
          <p className="text-gray-700 max-w-3xl">
            Our team designed a compact robot with multiple attachments. Our robot navigates on two 3.5" diameter motor-driven back wheels and a rollerball acting as a front wheel. We build extra pieces as spacers to help us set up for missions.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Planning</h2>
              <img
                src={robotPartsImg}
                alt="Robot planning and strategy"
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
            <p className="text-gray-600">
              Strategic motor placement and gear ratios enable precise control and maximum torque output. We test multiple motor configurations to optimize speed and power balance. Our drive train supports both autonomous and manual operation modes for competitive flexibility.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Programming</h2>
            <p className="text-gray-600 mb-4">
              Our team used Spike Coding, a web based system made by lego.
            </p>

            <div className="flex flex-col md:flex-row items-start gap-4">
              <img
                src={codeImg}
                alt="A picture of the tool we used"
                className="w-full md:w-40 h-32 md:h-32 object-cover rounded-lg"
              />
              <br></br><br></br>

              <p className="text-gray-600">
                We used this program to create codes that controlled our robots' movements.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Additional Pieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <img
                src={robotPartsImg}
                alt="Attachments for the Robot"
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
              <p className="text-gray-600 text-center text-sm">Attachments for the Robot</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={spacersImg}
                alt="Spacers to Assist in Setup"
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
              <p className="text-gray-600 text-center text-sm">Spacers to Assist in Setup</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RobotDesign;
