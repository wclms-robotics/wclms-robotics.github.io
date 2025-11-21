import React from 'react';
import './Innovation.css';
import giuliaImg from '../media/giulia.png';
import innovationproject from '../media/innovationproject.png';
import tarp from '../media/tarp.png';

function Innovation() {
  return (
    <div className="Innovation bg-gray-50 min-h-screen">
      <header className="innovation-header">
        <h1 className="innovation-title">Redesigning Semi-Permanent Archaeology Structures</h1>
        <p className="innovation-subtitle">Our Innovation Project</p>
      </header>

      <main className="innovation-main container mx-auto px-4 py-8">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 items-stretch">
            <div className="bg-white rounded-lg shadow p-6 text-center h-full">
              <h3 className="text-lg font-semibold mb-3">Our Brainstorming</h3>
              <p className="text-gray-600">
                These are some problems that archaeologists have:
                <br></br>
                    1. Poisonous plants and animals
                    <br></br>
                    2. Manual digging
                    <br></br>
                    3. Piecing together artifacts 
                    <br></br>
                    4. Dangerous terrain
                    <br></br>
                    5. Thieves and security issues
                    <br></br>
                    6. Conserving artifacts
                    <br></br>
                    7. Extreme weather conditions
                    <br></br>
                    
                We decided to create a yurt-style temporary structure that protects archaeological sites from extreme weather. 

              </p>
            </div>

            <div className="mission-span bg-white rounded-lg shadow p-6 text-center h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
              <br></br>
              <div>
                <p className="text-gray-600 mb-4">Our goal is to make a semi-permanent yurt-style structure with interchangeable panels and a water collection/filtration system.</p>
                <br></br>
                <p className="text-gray-600">The interchangeable panels would help archaeologists take clear pictures and the water system will aid in their sifting process.</p>
              </div>
              <br></br>
              <img
                src={innovationproject}
                alt="Mission mockup"
                loading="lazy"
                className="w-48 h-auto object-contain mx-auto mt-4 mission-image"
              />
            </div>

                        <div className="bg-white rounded-lg shadow p-6 text-center h-full">
              <h3 className="text-lg font-semibold mb-3">What We Learned</h3>
              <img src={tarp} alt="Tarp currently used" loading="lazy" className="w-40 h-auto object-contain mx-auto mb-3" />
              <p className="text-gray-600">
                1. Current structures consist of poles and tarps.
                <br></br>
                2. Many archaeologists aim to be eco-friendly.
                <br></br>
                3. Sun exposure/shadows pose photo documentation problems.
                <br></br>
                4. Cleaning artifacts with water is difficult.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center h-full">
              <h3 className="text-lg font-semibold mb-3">About Our Expert</h3>
              <img src={giuliaImg} alt="Design mockup" loading="lazy" className="w-40 h-auto object-contain mx-auto mb-3" />
              <p className="text-gray-600">
                Giulia is a zooarchaeologist and paleoanthropologist. She conducts post-doctoral research and currently studying the fire of ancient hominins (primarily Neanderthals). 1/4 of her year is spent doing fieldwork, and the rest in a lab analyzing artifacts and conducting experiments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center h-full">
              <h3 className="text-lg font-semibold mb-3">Further Development</h3>
              <div className="parabold">
                <p className="text-gray-600 font-bold">
                  What we have changed:
                </p>
              </div>
              <p className="text-gray-600">
                1. Helped archaeologists be eco-friendly, by adding gutters and a water purifier so rainwater can be used for sifting.
                <br></br>
                2. Created interchangeable panels to allow archaeologists to adjust the amount of light exposure
                <br></br>
                3. Panels may be translucent, clear, or reflective.
              </p>
              <br></br>
              <div className="parabold">
                <p className="text-gray-600 font-bold">
                  Next steps:
                </p>
              </div>
              <p className="text-gray-600">
                1. Test using different materials to make the structure sturdier or easier to transport
                <br></br>
                2. Develop different designs and modular systems based on the geographical location of the archaeological site.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Innovation;
