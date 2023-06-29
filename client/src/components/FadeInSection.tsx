import React, { useEffect, useState, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  delay?: string;
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ delay = "0s", children }) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    const domRefCurrent = domRef.current;
    if (domRefCurrent) {
      observer.observe(domRefCurrent);
    }

    return () => {
      if (domRefCurrent) {
        observer.unobserve(domRefCurrent);
      }
    }
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: delay }}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
