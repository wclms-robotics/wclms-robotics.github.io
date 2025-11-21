import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
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
  // 'aiden.jpeg' -> 'Aiden — Senior driver at Bergen Brickfest'
  // 'alice.jpeg' -> 'Alice — Innovation project lead'
  // 'ethan.jpeg' -> 'Ethan — Robot build specialist'
  // 'henry.jpeg' -> 'Henry — Programming and strategy'
  const captionsMap = {
    'aiden.jpeg': {
      title: 'Aiden — Junior',
      paragraph: 'Aiden is very helpful, a great researcher, and has a great work ethic!'
    },
    'alice.jpeg': {
      title: 'Alice — Junior',
      paragraph: 'Alice attends all meetings, is always present, always engaged, and is incredibly focused during distracted moments. Fun fact: Alice is the only girl attending the competition!'
    },
    'eli.jpeg': {
      title: 'Eli — Senior',
      paragraph: 'Eli is a dedicated member of the Senior team, contributing with his readiness to work and his extensive talent with code.'
    },
    'ethan.jpeg': {
      title: 'Ethan — Junior',
      paragraph: 'Ethan is a core member of the Junior section, and is always ready to lend a hand.'
    },
    'henry.jpeg': {
      title: 'Henry — Junior',
      paragraph: 'Henry has taken the time and effort to take the innovation project out of the classroom, and into his home to continue working.'
    },
    'levi.jpeg': {
      title: 'Levi — Special',
      paragraph: 'Levi is everything organized: he created the team group chat, the team linktree, the team\'s website qr code, and the team log.'
    },
    'omar.jpeg': {
      title: 'Omar — Senior',
      paragraph: 'Omar is a important member of our robotics community, that has helped us achieve many of our successes, such as managing the ship mission and debugging code.'
    },
    'ryand.jpeg': {
      title: 'Ryan D — Junior',
      paragraph: 'Ryan is a big team player, and has triple lineage at WCMS, making him experienced, even at the first year.'
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
          <img src={current.src} alt={current.name} loading="lazy" className="w-full max-h-96 object-contain rounded-lg shadow" />
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
    <div className="About bg-gray-50 min-h-screen">
      <header className="about-header">
        <h1 className="about-title">Bergen Brickfest — WCMS LegoTechs</h1>
        <p className="about-subtitle">Building, Learning, and Innovating Since 2008</p>
      </header>

      <main className="about-main container mx-auto px-4 py-8">
        <div className="media-carousel flex items-center justify-center mb-6">
          <Carousel items={imgs} currentIdx={currentIdx} onIndexChange={setCurrentIdx} />
        </div>

        {/* Caption block: dynamically shows caption for the currently visible image */}
        <div className="carousel-caption text-center mb-8">
          {/* We will show the caption for the currently visible item using its filename to look up captionsMap. */}
          {/* The captionsMap comments above map each filename to its caption. */}
          {imgs.length ? (
            (() => {
              const visible = imgs[currentIdx];
              const meta = captionsMap[visible.name];
              return (
                <>
                  <h3 className="text-xl font-semibold mb-3">{meta ? meta.title : visible.name}</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">{meta ? meta.paragraph : 'Photo from WCMS LegoTechs.'}</p>
                </>
              );
            })()
          ) : (
            <h3 className="text-lg text-gray-500">No photos available</h3>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Our History</h2>
            <p className="text-gray-600">
              Our team has been proudly participating in <strong>Bergen Brickfest</strong> since 2008. Over the years,
              we’ve grown from a small group of curious students into a team that thrives on creativity, problem-solving,
              and teamwork. Each year brings new challenges, new members, and new opportunities to learn together.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Team Structure</h2>
            <p className="text-gray-600">
              This year, our team is divided into two main groups — the <strong>Seniors</strong> and the
              <strong> Juniors</strong>. The seniors are returning members with prior experience, while the juniors
              include new students and 6th graders joining robotics for the first time. Together, they collaborate
              to bring fresh ideas and strong leadership to every part of our project.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Innovation & Robot Game</h2>
            <p className="text-gray-600">
              The <strong>Seniors</strong> primarily pilot the <em>robot game</em>, showcasing engineering skill and
              precision, while the <strong>Juniors</strong> take the lead on the <em>innovation project</em>, focusing
              on creativity and real-world problem-solving. This collaboration builds a bridge between experience and
              imagination — the core of what makes our team special.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
