"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Play, Volume2, Maximize2, MoreHorizontal, Pause } from "lucide-react"
import { useState, useRef } from "react"

const CreativeShowcaseSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(27)
  const [duration, setDuration] = useState(141) // 2:21 in seconds
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <section className="py-0 bg-white relative overflow-hidden">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Full Width Video Player Container */}
          <div className="relative bg-black overflow-hidden shadow-2xl w-full h-[500px]">
            {/* Actual Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              onTimeUpdate={(e) => setCurrentTime(Math.floor(e.currentTarget.currentTime))}
              onLoadedMetadata={(e) => setDuration(Math.floor(e.currentTarget.duration))}
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Creative Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300/30 via-transparent to-gray-500/30 pointer-events-none">
              {/* Left Side Text */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/90 pointer-events-none">
                <div className="writing-mode-vertical text-sm font-light tracking-wider">
                  <div className="transform rotate-180" style={{ writingMode: "vertical-rl" }}>
                    UNIQUE
                  </div>
                  <div className="transform rotate-180 mt-2" style={{ writingMode: "vertical-rl" }}>
                    APPROACH
                  </div>
                </div>
              </div>

              {/* 3D Stacked Websites - Center Left */}
              <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 perspective-1000 transform-gpu pointer-events-none">
                {/* Website 1 - Creative (Top) */}
                <motion.div
                  initial={{ opacity: 0, rotateX: -20, z: -100 }}
                  whileInView={{ opacity: 0.95, rotateX: -15, z: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute w-80 h-48 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-600 rounded-lg shadow-xl transform-gpu"
                  style={{
                    transform: "rotateX(-15deg) rotateY(5deg) translateZ(40px)",
                    zIndex: 4,
                  }}
                >
                  <div className="relative h-full overflow-hidden rounded-lg">
                    {/* Space background with stars */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900">
                      {/* Stars */}
                      <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full opacity-80"></div>
                      <div className="absolute top-8 right-12 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
                      <div className="absolute bottom-12 left-16 w-1 h-1 bg-pink-300 rounded-full opacity-70"></div>
                      <div className="absolute top-16 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-90"></div>
                    </div>
                    {/* CREATIVE Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-4xl font-bold text-teal-400 tracking-wider">CREATIVE</h2>
                    </div>
                  </div>
                </motion.div>

                {/* Website 2 - White with teal dots (Second) */}
                <motion.div
                  initial={{ opacity: 0, rotateX: -10, z: -80 }}
                  whileInView={{ opacity: 0.9, rotateX: -10, z: -20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute w-80 h-48 bg-white rounded-lg shadow-xl transform-gpu"
                  style={{
                    transform: "rotateX(-10deg) rotateY(3deg) translateZ(20px) translateY(20px)",
                    zIndex: 3,
                  }}
                >
                  <div className="p-6 h-full">
                    {/* Navigation dots */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                    </div>
                    {/* Content lines */}
                    <div className="space-y-3">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                    </div>
                    {/* Teal elements */}
                    <div className="absolute right-4 top-6">
                      <div className="w-4 h-4 bg-teal-400 rounded"></div>
                    </div>
                    <div className="absolute right-8 bottom-8">
                      <div className="w-6 h-6 bg-teal-400 rounded"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Website 3 - Dark (Third) */}
                <motion.div
                  initial={{ opacity: 0, rotateX: -5, z: -60 }}
                  whileInView={{ opacity: 0.85, rotateX: -5, z: -40 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute w-80 h-48 bg-gray-900 rounded-lg shadow-xl transform-gpu"
                  style={{
                    transform: "rotateX(-5deg) rotateY(2deg) translateZ(0px) translateY(40px)",
                    zIndex: 2,
                  }}
                >
                  <div className="p-6 h-full">
                    {/* Dark theme content */}
                    <div className="space-y-2">
                      <div className="h-1.5 bg-gray-700 rounded w-1/4"></div>
                      <div className="h-1.5 bg-gray-600 rounded w-1/3"></div>
                    </div>
                    {/* Colored elements */}
                    <div className="absolute top-4 right-6 w-2 h-2 bg-teal-400 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Website 4 - Portfolio Grid (Bottom) */}
                <motion.div
                  initial={{ opacity: 0, rotateX: 0, z: -40 }}
                  whileInView={{ opacity: 0.8, rotateX: 0, z: -60 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute w-80 h-48 bg-white rounded-lg shadow-xl transform-gpu"
                  style={{
                    transform: "rotateX(0deg) rotateY(1deg) translateZ(-20px) translateY(60px)",
                    zIndex: 1,
                  }}
                >
                  <div className="p-4 h-full">
                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-3 gap-2 h-full">
                      {/* Row 1 */}
                      <div className="bg-orange-400 rounded"></div>
                      <div className="bg-gray-200 rounded flex items-center justify-center">
                        <div className="w-6 h-3 bg-gray-400 rounded"></div>
                      </div>
                      <div className="bg-teal-200 rounded"></div>

                      {/* Row 2 */}
                      <div className="bg-gray-300 rounded flex items-center justify-center">
                        {/* Shark silhouette */}
                        <div className="w-8 h-4 bg-gray-600 rounded-full transform skew-x-12"></div>
                      </div>
                      <div className="bg-gray-800 rounded"></div>
                      <div className="bg-teal-400 rounded"></div>

                      {/* Row 3 */}
                      <div className="bg-gray-700 rounded"></div>
                      <div className="bg-gray-400 rounded"></div>
                      <div className="bg-white border border-gray-200 rounded"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Lorem Ipsum Text Overlay */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 max-w-md pointer-events-none">
                <div className="text-white/90 text-sm leading-relaxed">
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                    quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                    imperdiet a, venenatis vitae, justo.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none">
              {/* Top right controls */}
              <div className="absolute top-4 right-4 flex gap-2 pointer-events-auto">
                <button className="bg-black/50 hover:bg-black/70 text-white p-1.5 rounded text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </button>
                <button className="bg-black/50 hover:bg-black/70 text-white p-1.5 rounded text-xs">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center gap-3">
                    <button onClick={handlePlayPause} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <span className="font-mono text-xs">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={handleMute} className="hover:bg-white/20 p-1.5 rounded transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button className="hover:bg-white/20 p-1.5 rounded transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button className="hover:bg-white/20 p-1.5 rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CreativeShowcaseSection
