import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '/media/makeup.png',
    title: 'Makeup',
    desc: 'Enhance your natural beauty with expert artistry, creating flawless looks tailored for every occasion.',
  },
  {
    icon: '/media/haircut.png',
    title: 'Hair Services',
    desc: 'From precision cuts to advanced coloring and styling, our services are designed to complement your features and express your personality.',
  },
  {
    icon: '/media/facial-treatment.png',
    title: 'Regenerating Treatments',
    desc: 'Revitalise your skin with advanced treatments that promote a healthy, youthful, and radiant complexion.',
  },
  {
    icon: '/media/facial-treatment.png',
    title: 'Personalised Styling',
    desc: 'Discover your signature look with expert consultation and styling tailored to reflect your individuality.',
  },
];

function AnimatedEl(props) {
  var children  = props.children;
  var delay     = props.delay || 0;
  var from      = props.from || 'bottom'; // 'bottom' | 'left' | 'right'
  var visible   = props.visible;
  var className = props.className || '';

  var base = 'transition-all ease-out ' + className;

  var hidden = '';
  var shown  = 'opacity-100 translate-x-0 translate-y-0';

  if (from === 'bottom') hidden = 'opacity-0 translate-y-10';
  if (from === 'left')   hidden = 'opacity-0 -translate-x-10';
  if (from === 'right')  hidden = 'opacity-0 translate-x-10';

  return (
    <div
      className={base + ' ' + (visible ? shown : hidden)}
      style={{ transitionDuration: '700ms', transitionDelay: delay + 'ms' }}
    >
      {children}
    </div>
  );
}

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(function () {
    var el = sectionRef.current;
    if (!el) return;

    // Already in view on page load / refresh
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setVisible(true);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return function () { observer.disconnect(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden py-20 sm:py-24 lg:py-32"
      aria-label="What We Do — Salon Masters Services"
    >
      {/* Leaf */}
      <img
        src="/media/featureleaf.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-32 sm:w-44 lg:w-56 xl:w-64 pointer-events-none select-none"
      />

      <div className="relative z-20 max-w-3xl lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-10">

        {/* ── Header ── */}
        <div className="relative text-center mb-12 sm:mb-16">
          <span
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(3.5rem,9vw,7rem)] font-serif italic font-bold text-gray-100 select-none pointer-events-none leading-none whitespace-nowrap"
            aria-hidden="true"
          >
            Features
          </span>

          <div className="relative z-10">
            <AnimatedEl visible={visible} delay={0} from="bottom">
              <p className="text-[#7a9e96] text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 font-semibold">
                What We Do
              </p>
            </AnimatedEl>

            <AnimatedEl visible={visible} delay={150} from="bottom">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.15]">
                Your Complete Beauty<br />Journey Starts Here
              </h2>
            </AnimatedEl>
          </div>
        </div>

        {/* ── 2x2 grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {services.map(function (service, i) {
            var isRight = i % 2 === 1;
            var isTop   = i < 2;
            var from    = isRight ? 'right' : 'left';
            var delay   = 300 + i * 120;

            return (
              <div
                key={service.title}
                className={
                  'py-8 px-4 sm:px-8 ' +
                  (isRight ? 'sm:border-l border-gray-200 ' : '') +
                  (isTop   ? 'border-b border-gray-200 '    : '')
                }
              >
                <AnimatedEl visible={visible} delay={delay} from={from}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full bg-[#f5ede8] flex items-center justify-center">
                      <img
                        src={service.icon}
                        alt={service.title + ' icon'}
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                      />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedEl>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
