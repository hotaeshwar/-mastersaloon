import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 1,
    image: '/media/hairtreatment.jpg',
    title: 'HAIR TREATMENT',
    short: 'Cuts, colours & styles tailored to you',
    description: 'From precision haircuts and balayage to keratin treatments and hair spa, our certified stylists bring world-class techniques to every strand. We consult with you first to understand your hair goals, then deliver results that flatter your face shape and express your personality.',
    tags: ['Haircut', 'Balayage', 'Keratin', 'Hair Spa', 'Colouring'],
  },
  {
    id: 2,
    image: '/media/makeup.jpg',
    title: 'MAKEUP',
    short: 'Flawless looks for every occasion',
    description: "Our expert makeup artists craft personalised looks from everyday glam to full bridal transformations. Using premium, skin-safe products, we enhance your natural beauty with precision, artistry, and care. Whether it's a party, photoshoot, or wedding, we make sure you look your absolute best.",
    tags: ['Bridal Makeup', 'Party Glam', 'Editorial', 'Natural Look'],
  },
  {
    id: 3,
    image: '/media/nailextension.jpg',
    title: 'MANICURE',
    short: 'Beautiful nails, perfectly groomed',
    description: 'From classic manicures and pedicures to gel nails, nail art, and extensions — our nail technicians keep your hands and feet looking immaculate. We use only premium, non-toxic nail products for a finish that lasts.',
    tags: ['Manicure', 'Pedicure', 'Gel Nails', 'Nail Art'],
  },
  {
    id: 4,
    image: '/media/facial.jpg',
    title: 'FACIAL TREATMENT',
    short: 'Revive, refresh & restore your skin',
    description: 'Our advanced skin treatments are designed to rejuvenate from within — tackling dullness, pigmentation, acne, and ageing. Using dermatologist-approved products and cutting-edge technology, our therapists deliver results-driven facials that leave you glowing.',
    tags: ['Deep Cleanse', 'Anti-Ageing', 'Hydrafacial', 'Glow Treatment'],
  },
  {
    id: 5,
    image: '/media/pedicure.jpg',
    title: 'PEDICURE',
    short: 'Relax, refresh & restore your feet',
    description: 'Treat your feet to our luxurious pedicure service. From foot soak and scrub to nail shaping, cuticle care, and a relaxing foot massage — we leave your feet feeling soft, smooth, and beautifully polished.',
    tags: ['Foot Soak', 'Nail Shaping', 'Foot Massage', 'Polish'],
  },
];
/* triple for seamless infinite loop */
var looped = services.concat(services).concat(services);

/* ── Animated close button ── */
function CloseButton(props) {
  return (
    <button
      onClick={props.onClick}
      aria-label="Close"
      className="group relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#7a9e96] hover:bg-[#7a9e96] transition-all duration-300"
    >
      <span className="absolute w-5 h-0.5 bg-[#7a9e96] group-hover:bg-white rotate-45 transition-colors duration-300" />
      <span className="absolute w-5 h-0.5 bg-[#7a9e96] group-hover:bg-white -rotate-45 transition-colors duration-300" />
      <span className="absolute inset-0 rounded-full border-2 border-[#7a9e96] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
    </button>
  );
}

/* ── Modal ── */
function Modal(props) {
  var service = props.service;
  var onClose = props.onClose;

  useEffect(function () {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return function () {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  function handleBook(e) {
    e.preventDefault();
    onClose();
    setTimeout(function () {
      var target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={function (e) { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden animate-modal">

        {/* hero image */}
        <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-[#f5ede8]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* close button */}
          <div className="absolute top-4 right-4">
            <CloseButton onClick={onClose} />
          </div>

          {/* title overlay */}
          <div className="absolute bottom-5 left-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
              {service.title}
            </h3>
          </div>
        </div>

        {/* content */}
        <div className="p-8 sm:p-10">
          <p className="text-[#7a9e96] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
            Our Services
          </p>

          <div className="w-12 h-0.5 bg-[#7a9e96] rounded-full mb-5" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {service.tags.map(function (tag) {
              return (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-[#7a9e96] text-[#7a9e96] text-xs font-medium"
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* side-fade CTA */}
          <a
            href="#contact"
            onClick={handleBook}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black px-8 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:text-white"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-1/2" />
            <span className="absolute right-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-1/2" />
            <span className="relative z-10">Book This Service</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Service card ── */
function ServiceCard(props) {
  var service = props.service;
  var onClick = props.onClick;

  return (
    <button
      onClick={function () { onClick(service); }}
      className="group w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7a9e96]"
    >
      {/* image */}
      <div className="w-full h-48 sm:h-52 overflow-hidden bg-[#f5ede8]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* body */}
      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-2 leading-snug">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {service.short}
        </p>
        <span className="inline-flex items-center gap-2 text-[#7a9e96] text-xs font-semibold uppercase tracking-widest">
          Learn More
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        <div className="mt-4 w-0 h-0.5 bg-[#7a9e96] group-hover:w-full transition-all duration-500 rounded-full" />
      </div>
    </button>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const autoRef    = useRef(null);
  const pausedRef  = useRef(false);
  const offsetRef  = useRef(0);

  const [visible,  setVisible]  = useState(false);
  const [selected, setSelected] = useState(null);

  /* ── visibility on scroll & refresh ── */
  useEffect(function () {
    var el = sectionRef.current;
    if (!el) return;

    function show() {
      setTimeout(function () { setVisible(true); }, 60);
    }

    if (el.getBoundingClientRect().top < window.innerHeight) {
      show();
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        show();
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);

  /* ── auto-running ticker ── */
  useEffect(function () {
    var SPEED = 0.6; /* px per frame */

    function getCardWidth() {
      if (!trackRef.current) return 300 + 24;
      var firstCard = trackRef.current.children[0];
      if (!firstCard) return 300 + 24;
      return firstCard.offsetWidth + 24;
    }

    function tick() {
      if (!pausedRef.current && trackRef.current) {
        offsetRef.current -= SPEED;
        var singleSetW = getCardWidth() * services.length;
        if (Math.abs(offsetRef.current) >= singleSetW) {
          offsetRef.current = 0;
        }
        trackRef.current.style.transform = 'translateX(' + offsetRef.current + 'px)';
      }
      autoRef.current = requestAnimationFrame(tick);
    }

    autoRef.current = requestAnimationFrame(tick);
    return function () { cancelAnimationFrame(autoRef.current); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAFAF8] py-20 sm:py-24 lg:py-32 overflow-hidden"
      aria-label="Salon Masters Services"
    >
      {/* ── Header ── */}
      <div className="relative text-center mb-12 sm:mb-16 px-6">
        <span
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(3rem,9vw,7rem)] font-serif italic font-bold text-gray-100 select-none pointer-events-none leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          Services
        </span>

        <div className="relative z-10">
          <div
            className="transition-all ease-out"
            style={{ transitionDuration: '700ms', transitionDelay: '0ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
          >
            <p className="text-[#7a9e96] text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
              What We Offer
            </p>
          </div>
          <div
            className="transition-all ease-out"
            style={{ transitionDuration: '750ms', transitionDelay: '150ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(28px)' }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.15]">
              Our Premium Services
            </h2>
          </div>
          <div
            className="flex justify-center mt-5 transition-all ease-out"
            style={{ transitionDuration: '700ms', transitionDelay: '320ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'center' }}
          >
            <div className="w-16 h-0.5 bg-[#7a9e96] rounded-full" />
          </div>
        </div>
      </div>

      {/* ── Running carousel ── */}
      <div
        className="overflow-hidden transition-all ease-out"
        style={{ transitionDuration: '800ms', transitionDelay: '400ms',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
        onMouseEnter={function () { pausedRef.current = true; }}
        onMouseLeave={function () { pausedRef.current = false; }}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: '24px', willChange: 'transform' }}
        >
          {looped.map(function (service, i) {
            return (
              <div
                key={service.id + '-' + i}
                className="flex-shrink-0"
                style={{ width: '300px' }}
              >
                <ServiceCard
                  service={service}
                  onClick={function (s) { setSelected(s); }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Modal ── */}
      {selected && (
        <Modal
          service={selected}
          onClose={function () { setSelected(null); }}
        />
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal {
          animation: modalIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
      `}</style>
    </section>
  );
}
