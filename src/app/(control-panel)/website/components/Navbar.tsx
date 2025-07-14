import React from 'react';
import Logo from './Logo';
import PlaystoreBadge from './PlaystoreBadge';
import AppstoreBadge from './Applestore Badge';

const Navbar: React.FC = () => {
  const navItems = ["Home", "Services", "Pricing", "Projects", "Academy", "Blog", "Support"];
  const socialIcons = [
    { name: 'tiktok', src: '/icons/tiktok.svg' },
    { name: 'linkedin', src: '/icons/linkedin.svg' },
    { name: 'facebook', src: '/icons/facebook.svg' },
    { name: 'instagram', src: '/icons/instagram.svg' },
    { name: 'whatsapp', src: '/icons/whatsapp.svg' },
    { name: 'youtube', src: '/icons/youtube.svg' },
  ];

  return (
    <nav className="bg-gray-800 py-3 px-4 w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between gap-4">

        {/* Left: Social Icons */}
        <div className="flex items-center gap-2">
          {socialIcons.map(({ name, src }) => (
            <div
              key={name}
              className="bg-white p-1 rounded-full hover:opacity-80 cursor-pointer transition"
            >
              <img src={src} alt={name} className="w-4 h-4" />
            </div>
          ))}
        </div>

        {/* Center Nav Floating */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-gray-700 px-6 py-3 rounded-lg flex items-center gap-6 shadow-xl">
            {/* Logo */}
            <div className="text-white font-bold text-lg flex flex-col items-start">
              <Logo />
            </div>

          {/* Nav Items */}
          <div className="hidden md:flex gap-4 ml-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white text-sm font-medium no-underline hover:text-teal-400 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: App Badges */}
        <div className="flex items-center gap-3">
          <PlaystoreBadge />
          <AppstoreBadge />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
