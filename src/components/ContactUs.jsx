import React, { useEffect, useRef, useState } from 'react';

function ContactUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(function () {
    var el = sectionRef.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) { setVisible(true); return; }
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);

  var anim = function (delay) {
    return (
      'transition-all duration-700 ease-out ' +
      delay + ' ' +
      (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')
    );
  };

  var inputClass =
    'w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 ' +
    'px-4 py-3 outline-none rounded-lg ' +
    'focus:border-[#7a9e96] focus:ring-2 focus:ring-[#7a9e96]/20 transition-all duration-300';

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-[#FFFAFA] py-20 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-24"
      aria-label="Contact Salon Masters"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="relative text-center mb-14 sm:mb-18">
          <span
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(3rem,9vw,7rem)] font-serif italic font-bold text-gray-100 select-none pointer-events-none leading-none whitespace-nowrap"
            aria-hidden="true"
          >
            Contact
          </span>
          <div className="relative z-10">
            <div className={anim('delay-0')}>
              <p className="text-[#7a9e96] text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
                Get In Touch
              </p>
            </div>
            <div className={anim('delay-150')}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.15]">
                Contact Us
              </h2>
            </div>
            <div className={'flex justify-center mt-5 transition-all duration-700 delay-300 ease-out ' + (visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0')}>
              <div className="w-16 h-0.5 bg-[#7a9e96] rounded-full" style={{ transformOrigin: 'center' }} />
            </div>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Contact info ── */}
          <div className="space-y-8">

            <div className={anim('delay-100')}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Have questions or want to book an appointment? Reach out to us and
                our team will get back to you shortly.
              </p>
            </div>

            {/* divider */}
            <div className={'w-12 h-0.5 bg-[#7a9e96] rounded-full transition-all duration-700 delay-200 ease-out ' + (visible ? 'opacity-100' : 'opacity-0')} />

            {[
              {
                label: 'Phone',
                value: '9988855112 | 9988855113',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                delay: 'delay-[250ms]',
              },
              {
                label: 'Email',
                value: 'Salonmastertricity@gmail.com',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                delay: 'delay-[350ms]',
              },
              {
                label: 'Location',
                value: 'B Block VIP Road Zirakpur',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                delay: 'delay-[450ms]',
              },
            ].map(function (item) {
              return (
                <div
                  key={item.label}
                  className={
                    'flex items-start gap-4 transition-all duration-700 ease-out ' +
                    item.delay + ' ' +
                    (visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8')
                  }
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#f5ede8] flex items-center justify-center text-[#7a9e96]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#7a9e96] uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-800 text-sm sm:text-base font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            className={
              'bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10 ' +
              'transition-all duration-700 delay-300 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')
            }
          >
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className={inputClass}
              />

              <input
                type="email"
                placeholder="Your Email"
                className={inputClass}
              />

              {/* Package selector */}
              <div className="relative">
                <select
                  defaultValue=""
                  className={inputClass + ' appearance-none cursor-pointer'}
                >
                  <option value="" disabled className="text-gray-400">Select a Package</option>
                  <option value="basic">Basic Package</option>
                  <option value="standard">Standard Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="luxury">Luxury Package</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7a9e96]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-xs mb-1.5 font-medium">Preferred Date</label>
                  <input type="date" className={inputClass} />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1.5 font-medium">Preferred Time</label>
                  <input type="time" className={inputClass} />
                </div>
              </div>

              <textarea
                rows="4"
                placeholder="Your Message"
                className={inputClass + ' resize-none'}
              />

              {/* Side-fade CTA button */}
              <button
                type="submit"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black px-10 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:text-white mt-2"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-1/2" />
                <span className="absolute right-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-1/2" />
                <span className="relative z-10 tracking-widest uppercase">Send Message</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;
