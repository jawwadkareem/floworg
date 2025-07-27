

// import React from 'react';
// import { motion } from 'framer-motion';

// const Footer: React.FC = () => {
//   const footerColumns = [
//     {
//       title: "Floworg",
//       links: [
//         "Home",
//         "About",
//         "Timeline",
//         "Contact Us",
//         "Careers",
//         "Tenders",
//         "Partners Area",
//         "Employee Area",
//         "Investor Relations",
//         "Show more",
//       ],
//     },
//     {
//       title: "Explore",
//       links: [
//         "Pricing",
//         "Book a Demo",
//         "Floworg ProBuilder",
//         "Floworg Consulting",
//         "Projects",
//         "Academy",
//         "Blog & News",
//         "Newsletter",
//         "Loyalty Programs",
//         "Show more",
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         "Support",
//         "Developers",
//         "Integration",
//         "Documentation & API",
//         "Forum & Community",
//         "Website Terms",
//         "Refund Policy",
//         "Privacy Policy",
//         "Accessibility Statement",
//         "Show more",
//       ],
//     },
//     {
//       title: "Services",
//       links: [
//         "Floworg OmniAI 360",
//         "Floworg SYS 360 - All In One",
//         "Automate your Business (RPA)",
//         "Implementation of Systems & CRM",
//         "Dashboards, Smart Excel & BI",
//         "Device Management & Configurations",
//         "Product Management & Strategy",
//         "Projects Management",
//         "Digital, Branding & Media",
//         "Show more",
//       ],
//     },
//   ];

//   return (
//     <footer className="bg-gray-800 text-white pt-12 pb-8">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//           {/* Left Section - Newsletter Signup */}
//           <div className="md:col-span-1">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-lg font-semibold text-teal-400 mb-6">
//                 Exclusive Updates
//               </h3>

//               <div className="mb-6">
//                 <input
//                   type="text"
//                   placeholder="Enter your Name"
//                   className="w-full mb-4 px-4 py-3 rounded-lg bg-white text-gray-800 text-sm border-none outline-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full mb-4 px-4 py-3 rounded-lg bg-white text-gray-800 text-sm border-none outline-none"
//                 />
//                 <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full text-sm font-semibold transition-colors duration-300">
//                   Agree to updates
//                 </button>
//               </div>

//               {/* Logo Section */}
//               <div className="mb-6">
//                 <h1 className="text-3xl font-bold text-white mb-2">
//                   Flo
//                   <span className="text-teal-400">✓</span>
//                   org
//                 </h1>
//                 <p className="text-gray-300 text-sm">
//                   Automate your Success
//                 </p>
//               </div>

//               {/* Social Media Icons */}
//               <div className="flex gap-2 mb-6 flex-wrap">
//                 {['🎵', '💼', '📘', '📷', '💬', '📺'].map((icon, index) => (
//                   <button
//                     key={index}
//                     className="text-gray-400 hover:text-teal-400 text-lg transition-colors duration-300"
//                   >
//                     {icon}
//                   </button>
//                 ))}
//               </div>

//               {/* App Store Badges */}
//               <div className="flex gap-4 mb-6">
//                 <div className="bg-gray-700 rounded-lg px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-600 transition-colors duration-300">
//                   <span className="text-xs">📱 Google Play</span>
//                 </div>
//                 <div className="bg-gray-700 rounded-lg px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-600 transition-colors duration-300">
//                   <span className="text-xs">🍎 App Store</span>
//                 </div>
//               </div>

//               {/* Copyright */}
//               <p className="text-gray-400 text-xs">
//                 © Floworg LTD 2024
//                 <br />
//                 All rights reserved
//               </p>
//             </motion.div>
//           </div>

//           {/* Footer Columns */}
//           {footerColumns.map((column, index) => (
//             <div key={index} className="md:col-span-1">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-lg font-semibold text-teal-400 mb-4">
//                   {column.title}
//                 </h3>

//                 <div className="flex flex-col gap-2">
//                   {column.links.map((link, linkIndex) => (
//                     <a
//                       key={linkIndex}
//                       href="#"
//                       className={`text-sm leading-relaxed transition-colors duration-300 ${
//                         link === "Show more"
//                           ? "text-teal-400 font-medium"
//                           : "text-gray-300 hover:text-teal-400"
//                       }`}
//                     >
//                       {link}
//                     </a>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client"

import type React from "react"
import { useState } from "react"
import Logo1 from "./Logo-black"
import Logo from "./Logo"
import BACKEND_URL from "../constants"
interface FooterLink {
  text: string
  url: string
  priority: number
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const Footer: React.FC = () => {
  // State to track which columns are expanded
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalError, setModalError] = useState(false);

  const [expandedColumns, setExpandedColumns] = useState<{ [key: string]: boolean }>({
    Floworg: false,
    Explore: false,
    Resources: false,
    Services: false,
  })

  const handleSubmit = async () => {
    try {
      const res = await fetch(BACKEND_URL + '/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.status === 200) {
        setModalMessage('Subscription email sent successfully!');
        setModalError(false);
        setEmail(''); // Clear the input field
      } else {
        setModalMessage('Failed to subscribe. Please try again later.');
        setModalError(true);
      }
    } catch (error) {
      setModalMessage('An error occurred while connecting to the server.');
      setModalError(true);
    }

    setShowModal(true);
  };
  
  // Toggle expanded state for a column
  const toggleColumn = (columnTitle: string) => {
    setExpandedColumns((prev) => ({
      ...prev,
      [columnTitle]: !prev[columnTitle],
    }))
  }

  // Footer data with priority values (lower number = higher priority)
  const footerColumns: FooterColumn[] = [
    {
      title: "Floworg",
      links: [
        { text: "Home", url: "/home", priority: 1 },
        { text: "About", url: "/about", priority: 2 },
        { text: "Timeline", url: "/timeline", priority: 3 },
        { text: "Contact Us", url: "/contact", priority: 4 },
        { text: "Careers", url: "/career", priority: 5 },
        { text: "Tenders", url: "/tender-articles", priority: 6 },
        { text: "Partners Area", url: "#", priority: 7 },
        { text: "Employee Area", url: "#", priority: 8 },
        { text: "Investor Relations", url: "#", priority: 9 },
      ],
    },
    {
      title: "Explore",
      links: [
        { text: "Pricing", url: "/pricing", priority: 1 },
        { text: "Book a Demo", url: "/bookademo", priority: 2 },
        { text: "Floworg ProBuilder", url: "/probuilder", priority: 3 },
        { text: "Floworg Consulting", url: "/consulting", priority: 4 },
        { text: "Projects", url: "/projects", priority: 5 },
        { text: "Academy", url: "/academy", priority: 6 },
        { text: "Blog & News", url: "/blog", priority: 7 },
        { text: "Newsletter", url: "/newsletter", priority: 8 },
        { text: "Loyalty Programs", url: "#", priority: 9 },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Support", url: "/support", priority: 1 },
        { text: "Developers", url: "/developer", priority: 2 },
        { text: "Integration", url: "/integration", priority: 3 },
        { text: "Documentation & API", url: "#", priority: 4 },
        { text: "Forum & Community", url: "/forum", priority: 5 },
        { text: "Website Terms", url: "/terms", priority: 6 },
        { text: "Refund Policy", url: "/refund-policy", priority: 7 },
        { text: "Privacy Policy", url: "#", priority: 8 },
        { text: "Accessibility Statement", url: "accessibility-statement", priority: 9 },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Floworg OmniAI 360", url: "/service1", priority: 1 },
        { text: "Floworg SYS 360 - All In One", url: "#", priority: 2 },
        { text: "Automate your Business (RPA)", url: "#", priority: 3 },
        { text: "Implementation of Systems & CRM", url: "#", priority: 4 },
        { text: "Dashboards, Smart Excel & BI", url: "#", priority: 5 },
        { text: "Device Management & Configurations", url: "#", priority: 6 },
        { text: "Product Management & Strategy", url: "#", priority: 7 },
        { text: "Projects Management", url: "#", priority: 8 },
        { text: "Digital, Branding & Media", url: "#", priority: 9 },
      ],
    },
  ]

  return (
    <footer className="bg-gray-100">
      {/* Newsletter subscription */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-medium text-gray-800 leading-relaxed">
              Subscribe to <span className="text-teal-500 font-medium">Floworg</span> Newsletters
              <br />
              and get Exclusive Updates!
            </h3>
          </div>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-72 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
            <button onClick={handleSubmit}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-r-lg transition-colors duration-300 flex items-center text-sm font-medium">
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className={`text-lg font-semibold mb-4 ${modalError ? 'text-red-600' : 'text-green-600'}`}>
                {modalMessage}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Floworg Logo Section */}
        <div className="flex justify-center mb-12">
          <Logo1 />
        </div>


        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {footerColumns.map((column) => {
            // Sort links by priority
            const sortedLinks = [...column.links].sort((a, b) => a.priority - b.priority)

            // Get top 4 priority links
            const priorityLinks = sortedLinks.slice(0, 4)

            // Get remaining links
            const remainingLinks = sortedLinks.slice(4)

            return (
              <div key={column.title}>
                <h3 className="text-lg font-semibold mb-6 text-gray-800">{column.title}</h3>
                <ul className="space-y-4">
                  {/* Always show priority links */}
                  {priorityLinks.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.url}
                        className="text-gray-600 hover:text-emerald-500 transition-colors duration-300 text-sm no underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}

                  {/* Show remaining links if expanded */}
                  {expandedColumns[column.title] &&
                    remainingLinks.map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.url}
                          className="text-gray-600 hover:text-emerald-500 transition-colors duration-300 text-sm no underline"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}

                  {/* Show more button if there are remaining links */}
                  {remainingLinks.length > 0 && (
                    <li>
                      <button
                        onClick={() => toggleColumn(column.title)}
                        className="text-gray-600 hover:text-emerald-500 transition-colors duration-300 font-medium text-sm no underline"
                      >
                        {expandedColumns[column.title] ? "Show less" : "Show more"}
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-700 text-white py-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left - Logo and tagline */}
            <div className="lg:mb-0">
              <Logo />

            </div>

            {/* Center - Service badges */}
            <div className="flex gap-4 mb-6 lg:mb-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏆</span>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">🌍</span>
              </div>
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">⭐</span>
              </div>
            </div>

            {/* Right - Social icons and app badges */}
            <div className="flex flex-col items-center lg:items-end">
              {/* Social icons */}
              <div className="flex gap-3 mb-4">
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

              {/* App store badges */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center bg-gray-600 hover:bg-gray-500 rounded px-3 py-2 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.9 5c-.7.4-1.9.8-3 .8-3.8 0-5.9-3.2-9.7-3.2-1.7 0-3.4.5-4.7 1.4-.4.3-.5.9-.2 1.3.3.4.9.5 1.3.2 1-.7 2.4-1.1 3.6-1.1 3.8 0 5.9 3.2 9.7 3.2 1.4 0 2.8-.4 3.9-1.1.4-.3.5-.9.2-1.3-.2-.3-.7-.5-1.1-.2zm-1.9 4c-1.3 0-2.4.3-3.5.9-1.5.8-2.4 1.1-3.7 1.1-1.2 0-2.4-.4-3.7-1.1-1-.5-2.2-.9-3.5-.9-2.8 0-5.2 1.8-5.6 4.5-.4 2.5.4 5.8 2.4 9.3 1.1 2 2.6 3.9 4.4 3.9.8 0 1.3-.3 1.9-.7.6-.4 1.5-.8 2.8-.8 1.3 0 2.1.4 2.8.8.5.4 1.1.7 1.9.7 1.8 0 3.3-1.9 4.4-3.9 1.3-2.2 1.9-4.3 2-6.1-2.4-1-4-3.4-3.6-6.7z" />
                  </svg>
                  <span className="text-xs text-white">App Store</span>
                </a>
                <a
                  href="#"
                  className="flex items-center bg-gray-600 hover:bg-gray-500 rounded px-3 py-2 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.71-.292.996.996 0 0 1-.292-.71V2.816c0-.274.097-.509.292-.71a.993.993 0 0 1 .71-.292zm10.89 4.726l2.446 1.375-2.446 1.375V6.54zm0 5.85l2.446 1.38-2.446 1.375V12.39z" />
                    <path d="M5.304 1.814l8.5 4.7v2.8l-5.696-3.175-2.804 1.574v6.825l2.804 1.57 5.696-3.17v2.8l-8.5 4.7a.996.996 0 0 1-1.002 0 .997.997 0 0 1-.498-.867V2.683c0-.358.166-.677.498-.867a.996.996 0 0 1 1.002 0z" />
                  </svg>
                  <span className="text-xs text-white">Google Play</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">© Floworg LTD 2024 - All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
