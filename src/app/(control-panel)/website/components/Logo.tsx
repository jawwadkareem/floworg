// Logo.tsx or any name you prefer
import React from 'react';
import logo from "../../../../../src/assets/light-logo.svg"

const Logo = () => (
  <img
  src={logo}
  alt="Logo"
  className="w-32 h-auto filter drop-shadow-md"
/>
);

export default Logo;
