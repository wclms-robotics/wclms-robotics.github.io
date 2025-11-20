import React, { useEffect, useState } from 'react';
import './RobotDesign.css';

function RobotDesign() {
  // Load images from ../2025media using Webpack require.context (CRA) or Vite import.meta.glob fallback
  const loadImages = () => {
    // Try Webpack (CRA) require.context first — returns a module/URL for each file
    try {
      // eslint-disable-next-line no-undef
      const req = require.context('../2025media', false, /\.(png|jpe?g|svg|gif)$/);
      // build array of { src, name } where name is the original filename (e.g. 'aiden.jpeg')
      return req.keys().map((key) => ({ src: req(key), name: key.replace(/^\.\//, '') }));
    } catch (e) {
      // fallthrough to Vite approach
    }

    // Vite: import.meta.glob
    try {
      if (typeof import.meta !== 'undefined' && import.meta.glob) {
        const modules = import.meta.glob('../2025media/*.{png,jpg,jpeg,svg,gif}', { eager: true });
        return Object.keys(modules).map((k) => {
          const m = modules[k];
          const src = (m && m.default) || m;
          const name = k.split('/').pop();
          return { src, name };
        });
      }
    } catch (e) {
      console.warn('Image loader failed:', e);
    }

    return [];
  };

  const imgs = loadImages();

  // Captions mapped specifically to files in src/2025media
  // captionsMap:
  // 'aiden.jpeg' -> 'Robot Build Phase 1'
  // 'alice.jpeg' -> 'Design Iteration 2'
  // 'ethan.jpeg' -> 'Mechanical Testing'
  // 'henry.jpeg' -> 'Software Integration'
  const captionsMap = {
    'aiden.jpeg': {
      title: 'Robot Build Phase 1',
      paragraph: 'Initial construction and component assembly for the robot frame.'
    },
    'alice.jpeg': {
      title: 'Design Iteration 2',
      paragraph: 'Refining the robot mechanisms based on testing feedback and performance metrics.'
    },
    'ethan.jpeg': {
      title: 'Mechanical Testing',
      paragraph: 'Evaluating motor performance and mechanical durability under load.'
    },
    'henry.jpeg': {
      title: 'Software Integration',
      paragraph: 'Implementing autonomous routines and sensor calibration for match readiness.'
    }
  };

  const Carousel = ({ items = [], currentIdx = 0, onIndexChange = () => {} }) => {
    if (!items.length) {
      return (
        <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">No media found</span>
        </div>
      );
    }

    const current = items[currentIdx];
    const len = items.length;

    return (
      <div className="w-full max-w-4xl relative">
        <div className="carousel-image-container">
          <img src={current.src} alt={current.name} className="w-full max-h-96 object-contain rounded-lg shadow" />
        </div>

        <button
          aria-label="previous"
          onClick={() => onIndexChange((currentIdx - 1 + len) % len)}
          className="carousel-button absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow"
        >
          ‹
        </button>

        <button
          aria-label="next"
          onClick={() => onIndexChange((currentIdx + 1) % len)}
          className="carousel-button absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow"
        >
          ›
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => onIndexChange(i)}
              className={`carousel-dot w-2 h-2 rounded-full transition-all ${i === currentIdx ? 'bg-white' : 'bg-white/60'}`}
              aria-label={`go-to-${i}`} />
          ))}
        </div>
      </div>
    );
  };

  // current index (controls which image is visible)
  const [currentIdx, setCurrentIdx] = useState(0);

  // autoplay in parent so captions and image stay in sync
  useEffect(() => {
    if (!imgs.length) return;
    const t = setInterval(() => setCurrentIdx((p) => (p + 1) % imgs.length), 5000);
    return () => clearInterval(t);
  }, [imgs.length]);

  return (
    <div className="RobotDesign bg-gray-50 min-h-screen">
      <header className="robot-design-header">
        <h1 className="robot-design-title">Robot Design & Strategy</h1>
        <p className="robot-design-subtitle">Engineering Excellence in Motion</p>
      </header>

      <main className="robot-design-main container mx-auto px-4 py-8">
        <div className="media-carousel flex items-center justify-center mb-6">
          <Carousel items={imgs} currentIdx={currentIdx} onIndexChange={setCurrentIdx} />
        </div>

        {/* Caption block: dynamically shows caption for the currently visible image */}
        <div className="carousel-caption text-center mb-8">
          {/* The captionsMap comments above map each filename to its caption. */}
          {imgs.length ? (
            (() => {
              const visible = imgs[currentIdx];
              const meta = captionsMap[visible.name];
              return (
                <>
                  <h3 className="text-xl font-semibold mb-3">{meta ? meta.title : visible.name}</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">{meta ? meta.paragraph : 'Photo from WCMS LegoTechs robot design.'}</p>
                </>
              );
            })()
          ) : (
            <h3 className="text-lg text-gray-500">No photos available</h3>
          )}
        </div>

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
