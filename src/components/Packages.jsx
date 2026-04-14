import React, { useEffect, useRef, useState } from 'react';

function Packages() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(function () {
    var el = sectionRef.current;
    if (!el) return;

    // Fire immediately if already in viewport on refresh
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.15 });

    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);

  var base = 'transition-all ease-out ';
  var shown = 'opacity-100 translate-y-0';
  var hidden = 'opacity-0 translate-y-8';

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 md:py-24 bg-[#FAFAF8] flex items-center justify-center"
    >
      <div className="text-center max-w-xl md:max-w-2xl lg:max-w-3xl px-4 sm:px-6">

        <p
          className={base + 'duration-700 delay-[0ms] ' + (visible ? shown : hidden)}
          style={{ color: '#7a9e96', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}
        >
          Exclusive Deals
        </p>

        <h2
          className={base + 'duration-700 delay-[120ms] font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.15] mb-4 ' + (visible ? shown : hidden)}
        >
          Our Packages
        </h2>

        <div
          className={base + 'duration-700 delay-[240ms] flex justify-center mb-6 ' + (visible ? shown : hidden)}
        >
          <div className="w-16 h-0.5 bg-[#7a9e96] rounded-full" />
        </div>

        <p
          className={base + 'duration-700 delay-[360ms] text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-10 leading-relaxed ' + (visible ? shown : hidden)}
        >
          We are preparing amazing salon packages for you. Stay tuned for exciting deals and premium services.
        </p>

        <div
          className={base + 'duration-700 delay-[480ms] ' + (visible ? shown : hidden)}
        >
          <div className="inline-block px-6 py-3 border-2 border-[#7a9e96] text-[#7a9e96] uppercase tracking-[3px] text-xs sm:text-sm font-semibold rounded-full">
            Coming Soon
          </div>
        </div>

      </div>
    </section>
  );
}

export default Packages;