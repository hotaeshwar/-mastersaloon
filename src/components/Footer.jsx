import React from 'react';

const Footer = ({ setPage = () => {} }) => {
  const handleNav = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative text-gray-300"
      style={{ backgroundImage: "url('/media/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Logo and Description */}
          <div className="space-y-6">
            <img 
              src="/media/SALON MASTERS LOGO.png" 
              alt="Salon Masters Logo" 
              className="h-24 sm:h-32 w-auto"
            />
            <p className="text-sm sm:text-base leading-relaxed">
              Step into Salon Masters, Zirakpur's trusted destination for luxury hair, makeup, nails, and more. We combine creativity and care to bring out the best version of you.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg sm:text-xl font-semibold">LINKS</h3>
            <ul className="space-y-3">
              {[
                { page: 'home',      label: 'Home' },
                { page: 'about',     label: 'About Us' },
                { page: 'services',  label: 'Our Services' },
                { page: 'packages',  label: 'Packages' },
                { page: 'portfolio', label: 'Portfolio' },
                { page: 'contact',   label: 'Contact Us' },
              ].map(({ page, label }) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="text-sm sm:text-base hover:text-[#7a9e96] transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white text-lg sm:text-xl font-semibold">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#7a9e96] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm sm:text-base">9988855112 | 9988855113</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#7a9e96] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">Salonmastertricity@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7a9e96] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base">
                  B Block VIP Road Zirakpur
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © Copyright 2026 by salonmasters.com
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 hover:bg-[#7a9e96] flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/salonmasterszirakpur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-[#7a9e96] flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
