'use client';

import { useRef, useEffect } from 'react';

export default function HomeBackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay blocked:', err);
      });
    }
  }, []);

  return (
    <section className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* SAMPLE VIDEO – replace with your own */}
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}