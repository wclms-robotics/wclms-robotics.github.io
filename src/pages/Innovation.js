import React from 'react';
import './Innovation.css';
import codeImg from '../media/code.png';
import giuliaImg from '../media/giulia.png';
import innovationproject from '../media/innovationproject.png';

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
                className="w-48 h-auto object-contain mx-auto mt-4 mission-image"
              />
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center h-full">
              <h3 className="text-lg font-semibold mb-3">Impact</h3>
              <img src={codeImg} alt="Concept sketch" className="w-40 h-auto object-contain mx-auto mb-3" />
              <p className="text-gray-600">How this idea could improve performance or create new opportunities.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center h-full">
              <h3 className="text-lg font-semibold mb-3">Expert Feedback</h3>
              <img src={giuliaImg} alt="Design mockup" className="w-40 h-auto object-contain mx-auto mb-3" />
              <p className="text-gray-600">Notes about the design approach and choices we considered.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center h-full">
              <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
              <p className="text-gray-600">Planned actions to iterate on the prototype and rollout.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Innovation;
