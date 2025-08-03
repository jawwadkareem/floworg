
// "use client"

// import type React from "react"
// import { motion } from "framer-motion"
// import { ArrowRight } from "lucide-react"
// import WaveCircle from "./WaveLogo"

// const ConnectSection: React.FC = () => {
//   const outerIcons = [
//     { icon: "f", color: "bg-blue-600", angle: 0 },
//     { icon: "📷", color: "bg-pink-500", angle: 30 },
//     { icon: "▶️", color: "bg-red-600", angle: 60 },
//     { icon: "🎵", color: "bg-black", angle: 90 },
//     { icon: "👻", color: "bg-yellow-400", angle: 120 },
//     { icon: "P", color: "bg-red-500", angle: 150 },
//     { icon: "🎮", color: "bg-indigo-600", angle: 180 },
//     { icon: "✈️", color: "bg-blue-400", angle: 210 },
//     { icon: "💬", color: "bg-green-600", angle: 240 },
//     { icon: "V", color: "bg-purple-600", angle: 270 },
//     { icon: "🔒", color: "bg-blue-700", angle: 300 },
//     { icon: "Z", color: "bg-blue-500", angle: 330 },
//   ]

//   const innerIcons = [
//     { icon: "✓", color: "bg-green-500", angle: 0 },
//     { icon: "💬", color: "bg-blue-500", angle: 60 },
//     { icon: "🐦", color: "bg-blue-400", angle: 120 },
//     { icon: "in", color: "bg-blue-700", angle: 180 },
//     { icon: "S", color: "bg-cyan-500", angle: 240 },
//     { icon: "📅", color: "bg-cyan-400", angle: 300 },
//   ]

//   const getCirclePosition = (angle: number, radius: number) => {
//     const radian = (angle * Math.PI) / 180
//     const x = Math.cos(radian) * radius
//     const y = Math.sin(radian) * radius
//     return { x, y }
//   }

//   return (
//     <section className="py-16 bg-gray-50 relative overflow-hidden">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <span className="text-pink-500 text-sm font-medium tracking-wide uppercase mb-4 block">Talkie Tools</span>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
//                 Connect Anytime, <span className="block">Anywhere</span>
//               </h2>
//               <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-lg">
//                 It is a long established fact that a reader will be distracted by the readable content of a page when
//                 looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
//               </p>
//               <button className="bg-[#1ad7ad] hover:bg-teal-600 text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
//                 Read More
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </motion.div>
//           </div>

//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative h-[500px] w-full mt-8 flex items-center justify-center">
//                 {/* Decorative Elements */}
//                 <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-blue-300 rounded-full"></div>
//                 <div className="absolute top-3/5 right-1/5 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
//                 <div className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-purple-300 rounded-full"></div>

//                 <div className="relative w-full h-full flex items-center justify-center">
//                   {/* Outer Rotating Icons */}
//                   <motion.div
//                     className="absolute w-full h-full"
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   >
//                     {outerIcons.map((item, index) => {
//                       const pos = getCirclePosition(item.angle, 200)
//                       return (
//                         <div
//                           key={`outer-${index}`}
//                           className="absolute"
//                           style={{
//                             left: `calc(50% + ${pos.x}px)`,
//                             top: `calc(50% + ${pos.y}px)`,
//                             transform: "translate(-50%, -50%)",
//                           }}
//                         >
//                           <div
//                             className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
//                           >
//                             {item.icon}
//                           </div>
//                         </div>
//                       )
//                     })}
//                   </motion.div>

//                   {/* Inner Rotating Icons */}
//                   <motion.div
//                     className="absolute w-full h-full"
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   >
//                     {innerIcons.map((item, index) => {
//                       const pos = getCirclePosition(item.angle, 120)
//                       return (
//                         <div
//                           key={`inner-${index}`}
//                           className="absolute"
//                           style={{
//                             left: `calc(50% + ${pos.x}px)`,
//                             top: `calc(50% + ${pos.y}px)`,
//                             transform: "translate(-50%, -50%)",
//                           }}
//                         >
//                           <div
//                             className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
//                           >
//                             {item.icon}
//                           </div>
//                         </div>
//                       )
//                     })}
//                   </motion.div>

//                   {/* Center Logo */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, delay: 0.8 }}
//                     viewport={{ once: true }}
//                     whileHover={{ scale: 1.05 }}
//                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10"
//                   >
//                     <div className="flex items-center justify-center">
//                       <WaveCircle />
//                     </div>
//                   </motion.div>

//                   {/* Static Circle Guides */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
//                     <div className="w-80 h-80 border border-gray-200 rounded-full opacity-20"></div>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gray-300 rounded-full opacity-30"></div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ConnectSection
"use client"

import type React from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
import WaveCircle from "./WaveLogo"

const ConnectSection: React.FC = () => {
  const outerIcons = [
    { icon: "f", color: "bg-blue-600", angle: 0, link: "/channels/facebook" },
    { icon: "📷", color: "bg-pink-500", angle: 30, link: "/channels/instagram" },
    { icon: "▶️", color: "bg-red-600", angle: 60, link: "/channels/youtube" },
    { icon: "🎵", color: "bg-black", angle: 90, link: "/channels/spotify" },
    { icon: "👻", color: "bg-yellow-400", angle: 120, link: "/channels/snapchat" },
    { icon: "P", color: "bg-red-500", angle: 150, link: "/channels/pinterest" },
    { icon: "🎮", color: "bg-indigo-600", angle: 180, link: "/channels/twitch" },
    { icon: "✈️", color: "bg-blue-400", angle: 210, link: "/channels/telegram" },
    { icon: "💬", color: "bg-green-600", angle: 240, link: "/channels/whatsapp" },
    { icon: "V", color: "bg-purple-600", angle: 270, link: "/channels/vimeo" },
    { icon: "🔒", color: "bg-blue-700", angle: 300, link: "/channels/signal" },
    { icon: "Z", color: "bg-blue-500", angle: 330, link: "/channels/zoom" },
  ]

  const innerIcons = [
    { icon: "✓", color: "bg-green-500", angle: 0, link: "/channels/tick" },
    { icon: "💬", color: "bg-blue-500", angle: 60, link: "/channels/messenger" },
    { icon: "🐦", color: "bg-blue-400", angle: 120, link: "/channels/twitter" },
    { icon: "in", color: "bg-blue-700", angle: 180, link: "/channels/linkedin" },
    { icon: "S", color: "bg-cyan-500", angle: 240, link: "/channels/slack" },
    { icon: "📅", color: "bg-cyan-400", angle: 300, link: "/channels/calendar" },
  ]

  const outerControls = useAnimation()
  const innerControls = useAnimation()

  const getCirclePosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180
    const x = Math.cos(radian) * radius
    const y = Math.sin(radian) * radius
    return { x, y }
  }

  const handleHoverStart = async () => {
    await Promise.all([
      outerControls.start({ rotate: 360, transition: { duration: 30, repeat: Infinity, ease: "linear" } }),
      innerControls.start({ rotate: -360, transition: { duration: 30, repeat: Infinity, ease: "linear" } }),
    ])
  }

  const handleHoverEnd = async () => {
    await Promise.all([
      outerControls.start({ rotate: 360, transition: { duration: 20, repeat: Infinity, ease: "linear" } }),
      innerControls.start({ rotate: -360, transition: { duration: 20, repeat: Infinity, ease: "linear" } }),
    ])
  }

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-pink-500 text-sm font-medium tracking-wide uppercase mb-4 block">Talkie Tools</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Connect Anytime, <span className="block">Anywhere</span>
              </h2>
              <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-lg">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              </p>
              <button className="bg-[#1ad7ad] hover:bg-teal-600 text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[500px] w-full mt-8 flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-blue-300 rounded-full"></div>
                <div className="absolute top-3/5 right-1/5 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-purple-300 rounded-full"></div>

                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Outer Rotating Icons */}
                  <motion.div
                    className="absolute w-full h-full"
                    animate={outerControls}
                    initial={{ rotate: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {outerIcons.map((item, index) => {
                      const pos = getCirclePosition(item.angle, 200)
                      return (
                        <a
                          key={`outer-${index}`}
                          href={item.link}
                          className="absolute"
                          style={{
                            left: `calc(50% + ${pos.x}px)`,
                            top: `calc(50% + ${pos.y}px)`,
                            transform: "translate(-50%, -50%)",
                          }}
                          onMouseEnter={handleHoverStart}
                          onMouseLeave={handleHoverEnd}
                        >
                          <motion.div
                            className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg cursor-pointer`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {item.icon}
                          </motion.div>
                        </a>
                      )
                    })}
                  </motion.div>

                  {/* Inner Rotating Icons */}
                  <motion.div
                    className="absolute w-full h-full"
                    animate={innerControls}
                    initial={{ rotate: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {innerIcons.map((item, index) => {
                      const pos = getCirclePosition(item.angle, 120)
                      return (
                        <a
                          key={`inner-${index}`}
                          href={item.link}
                          className="absolute"
                          style={{
                            left: `calc(50% + ${pos.x}px)`,
                            top: `calc(50% + ${pos.y}px)`,
                            transform: "translate(-50%, -50%)",
                          }}
                          onMouseEnter={handleHoverStart}
                          onMouseLeave={handleHoverEnd}
                        >
                          <motion.div
                            className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg cursor-pointer`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {item.icon}
                          </motion.div>
                        </a>
                      )
                    })}
                  </motion.div>

                  {/* Center Logo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10"
                  >
                    <div className="flex items-center justify-center">
                      <WaveCircle />
                    </div>
                  </motion.div>

                  {/* Static Circle Guides */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-80 h-80 border border-gray-400 rounded-full opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gray-400 rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection