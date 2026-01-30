import React from 'react';
import { BACKGROUND_LAYERS, FOREGROUND_LAYER } from '../constants.ts';
import { useScrollPosition } from '../hooks/useScrollPosition';

const ParallaxBackground: React.FC = () => {
  const scrollY = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
      {/* Static Background Color (Deep Night Blue) */}
      <div className="absolute inset-0 bg-[#110d26] -z-10" />

      {/* Render Layers 1 through 4 */}
      {BACKGROUND_LAYERS.map((layer) => {
        // We move layers UP (negative Y) as user scrolls DOWN
        const translateY = -(scrollY * layer.speed);

        return (
          <div
            key={layer.id}
            className="absolute top-0 left-0 w-full h-full will-change-transform"
            style={{
              zIndex: layer.zIndex,
              transform: `translate3d(0, ${translateY}px, 0)`,
            }}
          >
            <img
              src={layer.src}
              alt={layer.alt}
              className="w-full h-full object-cover object-bottom pixelated min-w-[1000px]"
              style={{
                 backgroundPosition: 'bottom center'
              }}
            />
          </div>
        );
      })}

      {/* Foreground (Layer 5) — add a solid background behind it so transparent areas show the night color and mask lower layers */}
      {
        // Move the foreground slightly faster so it visually anchors to content; background behind it will cover lower layers
      }
      <div
        className="absolute top-0 left-0 w-full h-full will-change-transform"
        style={{
          zIndex: 35,
          background: '#110d26',
          transform: `translate3d(0, ${-(scrollY * 0.8)}px, 0)`,
        }}
        aria-hidden
      >
        <img
          src={FOREGROUND_LAYER.src}
          alt={FOREGROUND_LAYER.alt}
          className="w-full h-full object-cover object-bottom pixelated min-w-[1000px]"
          style={{
            position: 'relative',
            zIndex: 40,
            backgroundPosition: 'bottom center'
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;