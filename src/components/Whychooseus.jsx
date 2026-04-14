import React, { useEffect, useRef, useState } from 'react';

const paragraphs = [
  {
    heading: 'Expert Certified Stylists',
    body: 'Our team holds industry-recognised certifications and stays ahead of every trend through continuous training.',
  },
  {
    heading: 'Premium Salon‑Quality Products',
    body: 'We use only dermatologist-approved, salon-grade products that nourish and protect your hair and skin.',
  },
  {
    heading: 'Hygienic & Fully Sanitised Tools',
    body: 'Every tool is sterilised before each service. Your safety and hygiene are our highest priority.',
  },
  {
    heading: 'Personalised Consultations',
    body: 'We listen first. Every visit begins with a one-on-one consultation tailored to your unique goals.',
  },
  {
    heading: 'Bridal & Special Occasion Packages',
    body: 'From intimate ceremonies to grand weddings, our bespoke packages make every milestone unforgettable.',
  },
  {
    heading: 'Comfortable, Modern Ambiance',
    body: 'Step into a thoughtfully designed space that feels as luxurious as the services we provide.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) trigger();
      },
      { threshold: 0.08 }
    );

    // Already in view on page load / refresh — give browser one frame
    // to render the hidden state first so it has something to transition FROM
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setTimeout(trigger, 80);
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const fadeBase = 'transition-all duration-700 ease-out';
  const hidden = 'opacity-0 translate-y-6';
  const shown = 'opacity-100 translate-y-0';

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFAFA] py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 xl:px-24"
      aria-label="Why Choose Salon Masters"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        {/* Eyebrow */}
        <p
          className={`text-[#7a9e96] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold ${fadeBase} ${visible ? shown : hidden}`}
          style={{ transitionDelay: visible ? '60ms' : '0ms' }}
        >
          Our Promise
        </p>

        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight ${fadeBase} ${visible ? shown : hidden}`}
          style={{ transitionDelay: visible ? '160ms' : '0ms' }}
        >
          Why Choose Us —
          <br className="hidden sm:block" />
          <span className="text-gray-900/70">Expertise You Can Trust</span>
        </h2>

        {/* Divider */}
        <div
          className={`w-16 h-[3px] bg-[#7a9e96] rounded-full transition-all duration-700 ease-out ${visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          style={{
            transformOrigin: 'left',
            transitionDelay: visible ? '260ms' : '0ms',
          }}
        />

        {/* Intro paragraph */}
        <p
          className={`text-base sm:text-lg text-gray-600 leading-relaxed text-justify ${fadeBase} ${visible ? shown : hidden}`}
          style={{ transitionDelay: visible ? '340ms' : '0ms' }}
        >
          At Salon Masters, every detail is thoughtfully considered to give you an experience
          that goes beyond a simple appointment. Here is what sets us apart from the rest.
        </p>

        {/* Ladder */}
        <div className="relative mt-6">

          {/* Vertical spine — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#7a9e96]/20 -translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {paragraphs.map((p, i) => {
              const isLeft = i % 2 === 0;
              const delay = 440 + i * 120;

              return (
                <div
                  key={p.heading}
                  className={`relative flex items-center ${fadeBase} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
                >

                  {/* ── Mobile / Tablet ── */}
                  <div className="flex lg:hidden items-start gap-4 w-full pb-8">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-[#7a9e96] ring-4 ring-[#7a9e96]/20 mt-1" />
                      {i < paragraphs.length - 1 && (
                        <div className="w-[2px] flex-1 min-h-[2rem] bg-[#7a9e96]/20 mt-1" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1 pb-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{p.heading}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{p.body}</p>
                    </div>
                  </div>

                  {/* ── Desktop: alternating ladder ── */}
                  <div className="hidden lg:flex w-full items-center gap-0 mb-10">

                    {/* Left slot */}
                    <div className={`w-[calc(50%-2rem)] ${isLeft ? 'text-right pr-6' : ''}`}>
                      {isLeft && (
                        <div className="inline-block max-w-sm">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{p.heading}</h3>
                          <p className="text-base text-gray-600 leading-relaxed text-right">{p.body}</p>
                        </div>
                      )}
                    </div>

                    {/* Centre dot */}
                    <div className="flex-shrink-0 w-16 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[#7a9e96] ring-4 ring-[#7a9e96]/20 z-10" />
                    </div>

                    {/* Right slot */}
                    <div className={`w-[calc(50%-2rem)] ${!isLeft ? 'pl-6' : ''}`}>
                      {!isLeft && (
                        <div className="max-w-sm">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{p.heading}</h3>
                          <p className="text-base text-gray-600 leading-relaxed">{p.body}</p>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}