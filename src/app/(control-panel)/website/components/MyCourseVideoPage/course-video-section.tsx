"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  ChevronRight,
  Settings,
  Calendar,
  Inbox,
  User,
  Play,
  Pause,
  CheckCircle,
  ExternalLink,
} from "lucide-react"

interface DropdownOption {
  name: string
  count: number | null
}

interface CourseItem {
  title: string
  type: "lesson" | "section"
  progress?: string
  completed?: boolean
  active?: boolean
  expanded?: boolean
  lessons?: Array<{ title: string }>
  results?: Array<{ name: string; amount: string; timeframe: string }>
}

const CourseLearningInterface: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("Home")
  const [activeLesson, setActiveLesson] = useState("Intro to Automations & How to Start")
  const [expandedSections, setExpandedSections] = useState<string[]>(["Hamza's Members Results"])
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const dropdownOptions: DropdownOption[] = [
    { name: "Dashboard", count: null },
    { name: "Personal Area", count: null },
    { name: "Select Company", count: 5 },
    { name: "WorkSpace", count: 25 },
    { name: "My Projects", count: 7 },
  ]

  const navigationTabs: string[] = ["Home", "My Courses", "My Knowledge base", "My Tutorial Videos", "My Blogs"]

  const courseStructure: CourseItem[] = [
    {
      title: "Course Introduction (Start Here)",
      progress: "0%",
      type: "lesson",
      completed: false,
    },
    {
      title: "How to Use Skool",
      type: "section",
      expanded: false,
      lessons: [],
    },
    {
      title: "Welcome to the Incubator & My Story",
      type: "lesson",
      completed: false,
    },
    {
      title: "Intro to Automations & How to Start",
      type: "lesson",
      completed: false,
      active: true,
    },
    {
      title: "Proceed to Level I...",
      type: "lesson",
      completed: false,
    },
    {
      title: "Hamza's Members Results",
      type: "section",
      expanded: true,
      results: [
        { name: "Dauda Kondeh", amount: "$18k", timeframe: "45 days" },
        { name: "Darius Gaynor", amount: "$20k", timeframe: "60 days" },
        { name: "Kristian Edwards", amount: "57%", timeframe: "30 days" },
        { name: "Andrew Fox", amount: "$5k", timeframe: "12 days" },
        { name: "Steven Szomazed", amount: "$4.5k", timeframe: "21 days" },
        { name: "Jordan Williams", amount: "$4.5k", timeframe: "30 days" },
        { name: "Marcie Panos", amount: "$3k", timeframe: "21 days" },
      ],
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]))
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="User avatar for Abbott Keith"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <button
                      onClick={() => toggleDropdown("Home")}
                      className="text-teal-500 hover:text-teal-600 cursor-pointer"
                      aria-label="Navigate to Home"
                    >
                      Home
                    </button>
                    <span className="text-gray-400">/</span>
                    <button
                      onClick={() => toggleDropdown("Dashboards")}
                      className="text-teal-500 hover:text-teal-600 cursor-pointer"
                      aria-label="Navigate to Dashboards"
                    >
                      Dashboards
                    </button>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800">Welcome back, Abbott Keith!</h1>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">
                      📧
                    </span>
                    You have 2 new messages and 15 new tasks
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors"
                  aria-label="Open Inbox"
                >
                  <Inbox className="w-4 h-4" />
                  Inbox
                </button>
                <button
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  aria-label="Open Settings"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors"
                aria-label="Open Calendar"
              >
                <Calendar className="w-4 h-4" />
                Calendar
              </button>
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors"
                aria-label="Open My Account"
              >
                <User className="w-4 h-4" />
                My Account
              </button>
            </div>
            <div className="flex items-center gap-6 mt-6 text-sm">
              {dropdownOptions.map((option, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(option.name)}
                    className={`flex items-center gap-2 transition-colors ${
                      option.name === "Dashboard"
                        ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    aria-label={`Select ${option.name}`}
                  >
                    <span className="font-medium">{option.name}</span>
                    {option.count && <span className="bg-gray-200 px-2 py-1 rounded text-xs">{option.count}</span>}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === option.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10 min-w-[150px]">
                      <div className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Option 1</div>
                      <div className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Option 2</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
            <div className="flex items-center gap-8 text-sm">
              {navigationTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(tab)}
                  className={`font-medium transition-colors ${
                    activeTab === tab
                      ? "text-gray-800 border-b-2 border-gray-800 pb-1"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  aria-label={`Navigate to ${tab}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="w-80 bg-gray-50 border-r border-gray-200 p-4">
              <div className="space-y-2">
                {courseStructure.map((item, index) => (
                  <div key={index}>
                    {item.type === "lesson" ? (
                      <button
                        onClick={() => setActiveLesson(item.title)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          item.active || activeLesson === item.title
                            ? "bg-teal-500 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        aria-label={`Select lesson: ${item.title}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.title}</span>
                          {item.progress && (
                            <span className="text-xs bg-white/20 px-2 py-1 rounded">{item.progress}</span>
                          )}
                        </div>
                      </button>
                    ) : (
                      <div>
                        <button
                          onClick={() => toggleSection(item.title)}
                          className="w-full text-left p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-between"
                          aria-label={`Toggle section: ${item.title}`}
                        >
                          <span className="text-sm font-medium">{item.title}</span>
                          {expandedSections.includes(item.title) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        {expandedSections.includes(item.title) && item.results && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.results.map((result, resultIndex) => (
                              <div
                                key={resultIndex}
                                className="text-xs text-gray-600 py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                              >
                                {result.name} (+{result.amount} cash in {result.timeframe})
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{activeLesson}</h2>
                <button
                  className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-teal-500 transition-colors"
                  aria-label="Mark lesson as completed"
                >
                  <CheckCircle className="w-5 h-5 text-gray-400 hover:text-teal-500" />
                </button>
              </div>
              <div className="relative mb-6">
                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative">
                  <video
                    ref={videoRef}
                    src="https://videos.pexels.com/video-files/855189/855189-hd_1920_1080_30fps.mp4"
                    className="w-full h-full object-cover"
                    controls={false}
                    poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-937ytjA8Jao7DvVOWFxF8C9YT1HnRI.png"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors shadow-2xl"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">1.2x</div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    15 min • 12 min
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Here is an introduction on exactly how to start building and selling automations!
                </p>
                <p className="text-gray-700 font-medium">Watch the video and decide which path you want to take:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-gray-800">Option 1:</span>
                    <div>
                      <span className="text-gray-700">Get Your Automation License: </span>
                      <a
                        href="https://licensing.hexonasystems.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                      >
                        https://licensing.hexonasystems.com/
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-gray-800">Option 2:</span>
                    <div>
                      <span className="text-gray-700">Whitelabel GoHighLevel Yourself: </span>
                      <a
                        href="https://gohighlevel.com/hamza-baig"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                      >
                        https://gohighlevel.com/hamza-baig
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
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

export default CourseLearningInterface
