import React, { useEffect, useRef } from 'react';

export default function Header() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scaleValue = Math.max(1 - scrollPosition / 1000, 0.9); // Adjust scaling as per your preference
            if (videoRef.current) {
                videoRef.current.style.transform = `scale(${scaleValue})`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden mt-16">
            <video
                ref={videoRef}
                src="../../public/bg1.mp4" // Ensure the path is correct relative to your public directory
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 border border-transparent rounded-2xl" // Added transition for smooth scaling
            />

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-screen w-auto text-white">
                <div className="text-center"> {/* Takes 50% width on large screens */}
                    <h2 className="text-white text-lg lg:text-xl font-thin leading-loose mb-6">
                    Seamless Parking Solutions.
                    </h2>
                    <h1 className="text-3xl lg:text-6xl font-bold mb-4 text-white">
                    Capture, Store, and Monitor Your
                    </h1>
                    <h1 className="text-3xl lg:text-6xl font-bold mb-6">
                    Parking Experience Effortlessly.
                    </h1>                
                </div>
            </div>

            {/* Optional overlays */}
            <div className="absolute inset-0 bg-black opacity-25" /> {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black pointer-events-none" /> {/* Gradient overlay */}
            <div className="absolute inset-0 blur-2xl" /> {/* Blurry edges */}
        </div>
    );
}
