import React from 'react';
import './RobotDesign.css';

function RobotDesign() {

  return (
    <div className="RobotDesign bg-gray-50 min-h-screen">
      <header className="robot-design-header">
        <h1 className="robot-design-title">Robot Design & Strategy</h1>
        <p className="robot-design-subtitle">Engineering Excellence in Motion</p>
      </header>

      <main className="robot-design-main container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Chassis Design</h2>
            <p className="text-gray-600">
              Our robot chassis is engineered for durability and optimal weight distribution. We utilize lightweight aluminum frames combined with high-strength fasteners to ensure structural integrity during competition. The design prioritizes modularity for easy maintenance and component upgrades.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Actuators & Motors</h2>
            <p className="text-gray-600">
              Strategic motor placement and gear ratios enable precise control and maximum torque output. We test multiple motor configurations to optimize speed and power balance. Our drive train supports both autonomous and manual operation modes for competitive flexibility.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Software & Automation</h2>
            <p className="text-gray-600">
              Custom autonomous routines are developed using sensor feedback and PID control algorithms. Our software integrates vision processing for game piece recognition and trajectory planning. Continuous iteration and testing ensure reliable performance in match conditions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RobotDesign;
