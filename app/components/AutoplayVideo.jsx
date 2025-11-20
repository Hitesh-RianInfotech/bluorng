'use client';

import { useRef, useEffect } from 'react';

export default function AutoplayVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Overlay (Optional) */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="font-serif text-6xl md:text-8xl mb-8 italic">Bluorng</h1>
          
          {/* Circular Badge */}
          <div className="inline-flex items-center justify-center">
            <div className="relative w-32 h-32">
              {/* Rotating Text */}
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8px] fill-white uppercase tracking-widest">
                  <textPath href="#circlePath" startOffset="0%">
                    EXTENSION OF YOU • EXPRESSION • SUBNORAC •
                  </textPath>
                </text>
              </svg>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xl font-bold">B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}