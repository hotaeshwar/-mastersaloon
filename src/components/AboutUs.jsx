import React, { useEffect, useRef, useState } from 'react';

function useCounter(target, duration, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatChip(props) {
  const { target, suffix, label, started, delay } = props;
  const [go, setGo] = useState(false);
  const count = useCounter(target, 1600, go);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(function () { setGo(true); }, delay);
    return function () { clearTimeout(t); };
  }, [started, delay]);

  return (
    <div className="flex-1 bg-[#7a9e96] text-white rounded-xl py-4 px-3 text-center shadow-md">
      <p className="text-xl sm:text-2xl font-bold leading-none">
        {count}{suffix}
      </p>
      <p className="text-xs sm:text-sm mt-1 text-white/80">{label}</p>
    </div>
  );
}

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(function () {
    var el = sectionRef.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return function () { observer.disconnect(); };
  }, []);

  function handleBooking(e) {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFAFA] py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 xl:px-24"
      aria-label="About Salon Masters"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT — Image */}
        <div
          className={
            'w-full lg:w-1/2 transition-all duration-1000 ease-out ' +
            (visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16')
          }
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <img
              src="/media/aboutus.jpg"
              alt="Salon Masters premium salon interior — expert styling and beauty services"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7a9e96]" />
          </div>

          {/* Stat chips */}
          <div
            className={
              'flex gap-4 mt-6 justify-center lg:justify-start ' +
              'transition-all duration-1000 delay-300 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
          >
            <StatChip target={10}   suffix="+" label="Years Experience" started={visible} delay={400} />
            <StatChip target={5000} suffix="+" label="Happy Clients"    started={visible} delay={600} />
            <StatChip target={15}   suffix="+" label="Expert Stylists"  started={visible} delay={800} />
          </div>
        </div>

        {/* RIGHT — Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

          {/* eyebrow */}
          <p
            className={
              'text-[#7a9e96] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold ' +
              'transition-all duration-700 delay-100 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
          >
            Who We Are
          </p>

          <h2
            className={
              'text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight ' +
              'transition-all duration-700 delay-200 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
          >
            Salon Masters —
            <br className="hidden sm:block" />
            <span className="text-gray-900/70">Where Style Meets Mastery</span>
          </h2>

          {/* divider */}
          <div
            className={
              'w-16 h-[3px] bg-[#7a9e96] rounded-full ' +
              'transition-all duration-700 delay-300 ease-out ' +
              (visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0')
            }
            style={{ transformOrigin: 'left' }}
          />

          <p
            className={
              'text-base sm:text-lg text-gray-600 leading-relaxed text-justify ' +
              'transition-all duration-700 delay-400 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
          >
            Salon Masters is a premier hair and beauty destination committed to delivering
            world-class grooming, styling, and wellness services. Backed by over a decade
            of experience, our team of certified stylists blends advanced techniques with
            personalised care to enhance your unique style and confidence.
          </p>

          <p
            className={
              'text-base sm:text-lg text-gray-600 leading-relaxed text-justify ' +
              'transition-all duration-700 delay-500 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
          >
            From precision haircuts and luxurious hair treatments to flawless bridal makeup
            and rejuvenating skincare rituals, every service at Salon Masters is crafted
            with meticulous attention to detail. We use only premium, dermatologist-approved
            products to ensure your hair and skin remain healthy, radiant, and well-nourished.
          </p>

          <ul
            className={
              'grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 ' +
              'transition-all duration-700 delay-600 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
            aria-label="Our key strengths"
          >
            {[
              'Expert certified stylists',
              'Premium salon-quality products',
              'Hygienic and fully sanitised tools',
              'Personalised consultations',
              'Bridal and special occasion packages',
              'Comfortable, modern ambiance',
            ].map(function (item) {
              return (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                  <span className="w-5 h-5 flex-shrink-0 rounded-full bg-[#7a9e96] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>

          {/* CTA — side-fade hover */}
          <div
            className={
              'mt-4 transition-all duration-700 delay-700 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
          >
            <a
              href="#contact"
              onClick={handleBooking}
              aria-label="Book an appointment at Salon Masters"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#7a9e96] px-8 py-4 text-sm sm:text-base font-semibold text-[#7a9e96] transition-colors duration-300 hover:text-white"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-[#7a9e96] transition-all duration-500 ease-out group-hover:w-1/2" />
              <span className="absolute right-0 top-0 h-full w-0 bg-[#7a9e96] transition-all duration-500 ease-out group-hover:w-1/2" />
              <span className="relative z-10">Book an Appointment</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
