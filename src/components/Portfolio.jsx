import React, { useEffect, useRef, useState } from 'react';

const portfolio = [
  {
    id: 1,
    image: '/media/bridal makeup.png',
    title: 'Bridal Makeup',
    category: 'Makeup',
    reel: 'https://www.instagram.com/p/DUXpthjE47W/',
  },
  {
    id: 2,
    image: '/media/hairstrating.png',
    title: 'Hair Straightening',
    category: 'Hair Services',
    reel: 'https://www.instagram.com/p/DSPVYEykyFf/',
  },
  {
    id: 3,
    image: '/media/nailextension.png',
    title: 'Nail Extension',
    category: 'Nail Care',
    reel: 'https://www.instagram.com/p/DVYkeU1E4bK/',
  },
];

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className || 'w-5 h-5'}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function Modal(props) {
  var item = props.item;
  var onClose = props.onClose;
  var embedUrl = item.reel.replace(/\/?$/, '/embed');

  useEffect(function () {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return function () {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      onClick={function (e) { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden animate-modal">

        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f5ede8] flex items-center justify-center">
              <InstagramIcon className="w-4 h-4 text-[#7a9e96]" />
            </div>
            <div>
              <p className="text-xs text-[#7a9e96] font-semibold uppercase tracking-widest">
                {item.category}
              </p>
              <p className="text-sm font-serif text-gray-900 leading-tight">
                {item.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="group relative w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#7a9e96] hover:bg-[#7a9e96] transition-all duration-300 flex-shrink-0"
          >
            <span className="absolute w-4 h-0.5 bg-[#7a9e96] group-hover:bg-white rotate-45 transition-colors duration-300" />
            <span className="absolute w-4 h-0.5 bg-[#7a9e96] group-hover:bg-white -rotate-45 transition-colors duration-300" />
            <span className="absolute inset-0 rounded-full border-2 border-[#7a9e96] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
          </button>
        </div>

        <div className="w-full bg-black" style={{ height: '520px' }}>
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title={item.title}
          />
        </div>

        <div className="px-5 py-4 flex items-center justify-between border-t border-gray-100">
          <p className="text-xs text-gray-400">Watch on Instagram</p>
          <a
            href={item.reel}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-black px-5 py-2 text-xs font-semibold text-black transition-colors duration-300 hover:text-white"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-1/2" />
            <span className="absolute right-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-1/2" />
            <InstagramIcon className="relative z-10 w-3.5 h-3.5" />
            <span className="relative z-10">Open Reel</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function PortfolioCard(props) {
  var item = props.item;
  var onClick = props.onClick;
  var visible = props.visible;
  var delay = props.delay;
  var from = props.from || 'bottom';

  var hidden = '';
  if (from === 'left') hidden = 'opacity-0 -translate-x-12';
  if (from === 'bottom') hidden = 'opacity-0 translate-y-12';
  if (from === 'right') hidden = 'opacity-0 translate-x-12';

  return (
    <div
      className={
        'transition-all ease-out ' +
        (visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden)
      }
      style={{ transitionDuration: '800ms', transitionDelay: delay + 'ms' }}
    >
      <button
        onClick={function () { onClick(item); }}
        className="group relative w-full text-left rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7a9e96] block"
        aria-label={'View ' + item.title}
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/35 transition-all duration-300">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-semibold tracking-wide">
              {item.category}
            </span>
          </div>

          <div className="absolute top-4 right-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            <InstagramIcon className="w-5 h-5 text-white drop-shadow" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-serif text-lg sm:text-xl text-white leading-snug">
              {item.title}
            </h3>
            <p className="text-white/70 text-xs mt-1 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Tap to watch reel
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(function () {
    var el = sectionRef.current;
    if (!el) return;

    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      setVisible(true);
      return;
    }

    var obs = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);

  var directions = ['left', 'bottom', 'right'];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFAFA] py-20 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-24"
      aria-label="Salon Master Portfolio"
    >
      {/* ── Header ── */}
      <div className="relative text-center mb-12 sm:mb-16">
        <span
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(3rem,9vw,7rem)] font-serif italic font-bold text-gray-100 select-none pointer-events-none leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          Portfolio
        </span>

        <div className="relative z-10">
          <div
            className={
              'transition-all duration-700 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
          >
            <p className="text-[#7a9e96] text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
              Our Portfolio
            </p>
          </div>

          <div
            className={
              'transition-all duration-700 delay-150 ease-out ' +
              (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
            }
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.15]">
              Transformations &<br className="hidden sm:block" /> Real Results
            </h2>
          </div>

          <div
            className={
              'flex justify-center mt-5 transition-all duration-700 delay-300 ease-out ' +
              (visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0')
            }
          >
            <div className="w-16 h-0.5 bg-[#7a9e96] rounded-full" style={{ transformOrigin: 'center' }} />
          </div>
        </div>
      </div>

      {/* ── 3 cards side by side ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {portfolio.map(function (item, i) {
          return (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={setSelected}
              visible={visible}
              delay={200 + i * 160}
              from={directions[i]}
            />
          );
        })}
      </div>

      {/* ── Instagram CTA ── */}
      <div
        className={
          'flex justify-center mt-12 sm:mt-16 transition-all duration-700 delay-700 ease-out ' +
          (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
        }
      >
        <a
          href="https://www.instagram.com/salonmasterszirakpur"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Salon Masters on Instagram"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-black px-8 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:text-white"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-1/2" />
          <span className="absolute right-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-1/2" />
          <InstagramIcon className="relative z-10 w-5 h-5" />
          <span className="relative z-10">Follow us for More</span>
        </a>
      </div>

      {selected && (
        <Modal
          item={selected}
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