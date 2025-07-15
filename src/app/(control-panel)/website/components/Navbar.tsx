import React from 'react';
import Logo from './Logo';
import PlaystoreBadge from './PlaystoreBadge';
import AppstoreBadge from './Applestore Badge';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  // const navItems = ["Home", "Services", "Pricing", "Projects", "Academy", "Blog", "Support"];
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      dropdown: [
        { name: "OmniChat 360", href: "/services/omnichat" },
        { name: "Automation", href: "/services/automation" },
        { name: "CRM & ERP", href: "/services/crm-erp" },
        { name: "Smart Dashboards", href: "/services/dashboards" },
        { name: "Project Management", href: "/services/project-management" },
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Projects", href: "/projects" },
    { name: "Academy", href: "/academy" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" }
  ];

  const socialIcons = [
    { "name": "tiktok", "src": "https://cdn.simpleicons.org/tiktok" },
    { "name": "facebook", "src": "https://cdn.simpleicons.org/facebook" },
    { "name": "instagram", "src": "https://cdn.simpleicons.org/instagram" },
    { "name": "whatsapp", "src": "https://cdn.simpleicons.org/whatsapp" },
    { "name": "youtube", "src": "https://cdn.simpleicons.org/youtube" }
  ]

  return (
    <nav className="bg-[#414655] py-3 px-4 w-full shadow-md">
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
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 w-2/4">
          <div className="bg-[#292f3d] h-20 pr-6 rounded-lg flex justify-between items-center gap-6 shadow-xl">
            {/* Logo */}
            <div
              className="bg-[#1f242f] text-white font-bold text-lg flex items-center h-full px-6"
              style={{
                clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
                borderTopLeftRadius: '0.5rem',
                borderBottomLeftRadius: '0.5rem',
              }}
            >
              <Logo />
            </div>



            {/* Nav Items */}
            <div className="hidden md:flex gap-5 mx-auto">
              {/* {navItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white text-lg font-medium no-underline hover:text-teal-400 transition"
                >
                  {item}
                </a>
              ))} */}
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <button className="text-white text-lg font-medium hover:text-teal-400 transition flex gap-2">
                      {item.name}
                      {item.dropdown && <ChevronDown className='w-5'/>}
                    </button>
                    <div className="absolute left-0 mt-2 w-60 bg-[#292f3d] rounded-lg shadow-lg hidden group-hover:block z-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 mt-3 text-white text-sm hover:bg-teal-500 hover:text-black transition h-10"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white text-lg font-medium no-underline hover:text-teal-400 transition"
                  >
                    {item.name}
                  </a>
                )
              )}

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
