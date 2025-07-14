// Logo.tsx or any name you prefer
import React from 'react';
import logo from "../../../../../src/assets/applestore.png"

const AppstoreBadge = () => (
  <img
  src={logo}
  alt="AppStore Badge"
  className="w-32 h-auto filter drop-shadow-md"
/>
);

export default AppstoreBadge;
