import React, { useState, useEffect } from 'react';

const Navbar = ({ setPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll state when page changes
  useEffect(() => {
    setIsScrolled(false);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navLinks = [
    { name: 'Home',     href: '#home',     id: 'home' },
    { name: 'About',    href: '#about',    id: 'about' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact',  href: '#contact',  id: 'contact' },
  ];

  // Transparent only on home page when not scrolled
  const isTransparent = currentPage === 'home' && !isScrolled;

  const navBg = isTransparent
    ? 'bg-transparent border-none shadow-none'
    : 'bg-white shadow-lg border-b border-gray-200';

  const linkColor = isTransparent
    ? 'text-white hover:text-[#D4957D]'
    : 'text-gray-900 hover:text-[#D4957D]';

  const hamburgerColor = isTransparent ? 'bg-white' : 'bg-gray-900';

  const linkClass = `group relative text-sm xl:text-base font-bold tracking-wide uppercase transition-all duration-300`;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between lg:justify-center h-20 sm:h-24 lg:h-28 gap-2">

            {/* Left Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 pr-3 xl:pr-4">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setPage(link.id); }}
                  className={`${linkClass} ${linkColor}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4957D] transition-all duration-300 group-hover:w-full" />
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4957D] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-top-3" />
                </a>
              ))}
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center justify-center lg:mx-2 xl:mx-3">
              <a href="#home" onClick={(e) => { e.preventDefault(); setPage('home'); }} className="block">
                <img
                  src="/media/SALON MASTERS LOGO.png"
                  alt="Salon Masters Logo"
                  className={`transition-all duration-500 ${
                    isScrolled
                      ? 'h-12 sm:h-14 md:h-16 lg:h-14 xl:h-16'
                      : 'h-16 sm:h-20 md:h-24 lg:h-20 xl:h-24'
                  }`}
                  style={{
                    filter: isTransparent ? 'brightness(1.2)' : 'none',
                    objectFit: 'contain',
                  }}
                />
              </a>
            </div>

            {/* Right Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 pl-3 xl:pl-4">
              {navLinks.slice(2, 5).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setPage(link.id); }}
                  className={`${linkClass} ${linkColor}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4957D] transition-all duration-300 group-hover:w-full" />
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4957D] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-top-3" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-14 h-14 space-y-1.5 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <a href="#home" onClick={(e) => { e.preventDefault(); setPage('home'); setIsMobileMenuOpen(false); }} className="block mb-8">
            <img
              src="/media/SALON MASTERS LOGO.png"
              alt="Salon Masters Logo"
              className="h-20 sm:h-24 md:h-28 object-contain"
              style={{ filter: 'brightness(1.2)' }}
            />
          </a>

          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); setPage(link.id); setIsMobileMenuOpen(false); }}
              className="group relative text-2xl sm:text-3xl font-bold text-gray-200 hover:text-white uppercase tracking-widest transition-all duration-300"
              style={{ animation: isMobileMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none' }}
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D4957D] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <p className="mt-8 text-gray-400 text-sm">© 2026 Salon Masters</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;