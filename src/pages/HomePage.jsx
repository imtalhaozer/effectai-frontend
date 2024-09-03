import React, { useEffect, useRef, useState } from 'react';
import { HomeLayer1 } from '../layers/HomeLayer1';
import { HomeLayer2 } from '../layers/HomeLayer2';
import { Navbar } from '../components/Navbar';

const Slide = ({ children, className, onVisible }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(true);
        } else {
          onVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onVisible]);

  return (
    <section ref={ref} className={`flex items-center justify-center min-h-screen ${className}`}>
      {children}
    </section>
  );
};

export const HomePage = () => {
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#FFFFFF");
  const [layer2Visible, setLayer2Visible] = useState(false);

  const handleLayerVisibility = (isVisible) => {
    if (isVisible) {
      setColor1("#000000");
      setColor2("#FFFFFF");
    } else {
      setColor1("#FFFFFF");
      setColor2("#53A3E2");
    }
    setLayer2Visible(isVisible);
  };

  return (
    <>
      <Navbar color1={color1} color2={color2} />
      <div className="overflow-y-scroll snap-y snap-mandatory h-screen">
        <Slide>
          <HomeLayer1 />
        </Slide>
        <Slide onVisible={handleLayerVisibility}>
          <HomeLayer2 layer2={layer2Visible} />
        </Slide>
      </div>
    </>
  );
};
