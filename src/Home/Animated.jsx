import React, { useRef, useState, useEffect } from 'react';

const AnimatedSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Observe within the viewport
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`pb-96 text-blue-300 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-4xl font-bold">Hello! I animate into view 🎉</h2>
      <p>
        This text will fade in and slide up when it enters the viewport using
        Tailwind and the Intersection Observer API.
      </p>
    </div>
  );
};

export default AnimatedSection;
