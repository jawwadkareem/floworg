"use client"

import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Grid3X3, List, ChevronLeft, ChevronRight, Settings, Calendar, Inbox, User } from "lucide-react"

// Define interfaces for type safety
interface BasicCourse {
  id: number
  title: string
  subtitle: string
  subTitle2?: string
  description: string
  progress: string
  progressColor: string
  image: string
  type: "basic"
}

interface AdvancedCourse {
  id: number
  title: string
  subtitle: string
  description: string
  progress: string
  progressColor: string
  image: string
  type: "advanced"
  bgColor: string
  badge?: string
  price?: string
}

type Course = BasicCourse | AdvancedCourse

const CourseDashboardSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const coursesPerPage = 3

  const courses: BasicCourse[] = [
    {
      id: 1,
      title: "Start Here",
      subtitle: "BUILDING AI AGENTS",
      description: "This course will teach you why you need AI and Automation. And why you will be out of...",
      progress: "100%",
      progressColor: "bg-teal-500",
      image: "/placeholder.svg?height=200&width=300&text=START+HERE",
      type: "basic",
    },
    {
      id: 2,
      title: "Building AI Agents",
      subtitle: "BUILDING AI AGENTS",
      subTitle2: "STEP ONE",
      description: "In this course, I'll teach you about the configurations and software you need to...",
      progress: "100%",
      progressColor: "bg-teal-500",
      image: "/placeholder.svg?height=200&width=300&text=STEP+ONE",
      type: "basic",
    },
    {
      id: 3,
      title: "Building AI Agents (Step 2)",
      subtitle: "BUILDING AI AGENTS",
      subTitle2: "STEP TWO",
      description: "In this Course I'll teach you how to train AI Agents step by step And give you practical...",
      progress: "8%",
      progressColor: "bg-blue-500",
      image: "/placeholder.svg?height=200&width=300&text=STEP+TWO",
      type: "basic",
    },
    {
      id: 4,
      title: "AI Agent Deployment",
      subtitle: "BUILDING AI AGENTS",
      subTitle2: "STEP THREE",
      description: "Learn how to deploy your AI agents effectively in production environments...",
      progress: "50%",
      progressColor: "bg-green-500",
      image: "/placeholder.svg?height=200&width=300&text=STEP+THREE",
      type: "basic",
    },
    {
      id: 5,
      title: "AI Optimization Techniques",
      subtitle: "BUILDING AI AGENTS",
      subTitle2: "STEP FOUR",
      description: "Master optimization techniques to make your AI agents more efficient...",
      progress: "25%",
      progressColor: "bg-yellow-500",
      image: "/placeholder.svg?height=200&width=300&text=STEP+FOUR",
      type: "basic",
    },
    {
      id: 6,
      title: "AI Agent Testing",
      subtitle: "BUILDING AI AGENTS",
      subTitle2: "STEP FIVE",
      description: "Learn testing methodologies for ensuring AI agent reliability...",
      progress: "75%",
      progressColor: "bg-purple-500",
      image: "/placeholder.svg?height=200&width=300&text=STEP+FIVE",
      type: "basic",
    },
  ]

  const advancedCourses: AdvancedCourse[] = [
    {
      id: 7,
      title: "Level III: Building Automations",
      subtitle: "building automations",
      description: "Follow step-by-step walkthroughs and tutorials on how to build both simple and...",
      progress: "0%",
      progressColor: "bg-gray-400",
      image: "/placeholder.svg?height=200&width=300&text=building+automations",
      type: "advanced",
      bgColor: "bg-gray-800",
    },
    {
      id: 8,
      title: "Sales and Marketing",
      subtitle: "learn & sell automations",
      description: "Once you feel comfortable with building automations, use this course to start selling!",
      progress: "0%",
      progressColor: "bg-gray-400",
      image: "/placeholder.svg?height=200&width=300&text=learn+%26+sell+automations",
      type: "advanced",
      bgColor: "bg-gray-800",
      badge: "Private Course",
    },
    {
      id: 9,
      title: "Resource Vault (Licensees Only)",
      subtitle: "resource vault",
      description: "Premium resources that give you a competitive edge (Affiliates & Licensees...",
      progress: "0%",
      progressColor: "bg-gray-400",
      image: "/placeholder.svg?height=200&width=300&text=resource+vault",
      type: "advanced",
      bgColor: "bg-gray-800",
      price: "$297",
      badge: "Unlock for $297",
    },
    {
      id: 10,
      title: "Advanced Automation Strategies",
      subtitle: "advanced automations",
      description: "Dive deep into complex automation workflows and optimization techniques...",
      progress: "0%",
      progressColor: "bg-gray-400",
      image: "/placeholder.svg?height=200&width=300&text=advanced+automations",
      type: "advanced",
      bgColor: "bg-gray-800",
    },
    {
      id: 11,
      title: "Automation Analytics",
      subtitle: "analyze automations",
      description: "Learn to measure and analyze automation performance for better results...",
      progress: "0%",
      progressColor: "bg-gray-400",
      image: "/placeholder.svg?height=200&width=300&text=analyze+automations",
      type: "advanced",
      bgColor: "bg-gray-800",
    },
    {
      id: 12,
      title: "Enterprise Automation",
      subtitle: "enterprise solutions",
      description: "Scale your automation skills for large enterprise environments...",
      progress: "0%",
      progressColor: "bg-gray-400",
      image: "/placeholder.svg?height=200&width=300&text=enterprise+solutions",
      type: "advanced",
      bgColor: "bg-gray-800",
      badge: "Enterprise Only",
    },
  ]

  const navigationTabs = [
    { name: "Home", active: true },
    { name: "My Courses", active: false },
    { name: "My Knowledge base", active: false },
    { name: "My Tutorial Videos", active: false },
    { name: "My Blogs", active: false },
  ]

  const filterButtons = [
    { name: "Classroom", active: true, color: "bg-teal-500" },
    { name: "Calendar", active: false, color: "bg-gray-200" },
    { name: "Community", active: false, color: "bg-gray-200" },
  ]

  // Calculate pagination
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentBasicCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)
  const currentAdvancedCourses = advancedCourses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(Math.max(courses.length, advancedCourses.length) / coursesPerPage)

  // Handlers
  const handleCourseClick = (courseId: number) => {
    console.log(`Course ${courseId} clicked`)
    // Add your course navigation logic here
  }

  const handleTabClick = (tabName: string) => {
    console.log(`Tab ${tabName} clicked`)
    // Add your tab navigation logic here
  }

  const handleFilterClick = (filterName: string) => {
    console.log(`Filter ${filterName} clicked`)
    // Add your filter logic here
  }

  const handleViewToggle = (mode: "grid" | "list") => {
    setViewMode(mode)
    console.log(`View toggled to ${mode}`)
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleNavButtonClick = (action: string) => {
    console.log(`${action} button clicked`)
    // Add your navigation button logic here
  }

  const renderCourseCard = (course: Course, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
        viewMode === "list" ? "flex flex-col md:flex-row" : ""
      }`}
      onClick={() => handleCourseClick(course.id)}
    >
      <div className={`relative ${viewMode === "list" ? "md:w-1/3" : "w-full"}`}>
        <img
          src={course.image}
          alt={`${course.title} course image`}
          className="w-full h-40 object-cover"
        />
        <div className={`absolute inset-0 flex items-center justify-center ${course.type === "advanced" ? course.bgColor : "bg-gray-200"} bg-opacity-75`}>
          <div className="text-center">
            <div className={`text-2xl font-bold ${course.type === "advanced" ? "text-white" : "text-gray-700"} mb-2`}>
              {"subTitle2" in course && course.subTitle2 ? course.subTitle2 : course.title.toUpperCase()}
            </div>
            {course.type === "advanced" && (
              <div className="text-lg text-orange-400">
                {course.subtitle}
              </div>
            )}
          </div>
          {"badge" in course && course.badge && (
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
              {course.badge}
            </div>
          )}
          {"price" in course && course.price && (
            <div className="absolute bottom-3 right-3 text-orange-400 font-bold">{course.price}</div>
          )}
        </div>
      </div>
      <div className={`p-4 ${viewMode === "list" ? "md:w-2/3" : "w-full"}`}>
        <h3 className="font-semibold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className={`px-3 py-1 ${course.progressColor} text-white rounded-full text-sm font-medium`}>
            {course.progress}
          </div>
        </div>
      </div>
    </motion.div>
  )

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
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="User avatar for Abbott Keith"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm">
                    <button
                      onClick={() => handleNavButtonClick('Home')}
                      className="text-teal-500 hover:underline"
                      aria-label="Navigate to Home"
                    >
                      Home
                    </button>
                    <span className="text-gray-400">/</span>
                    <button
                      onClick={() => handleNavButtonClick('Dashboards')}
                      className="text-teal-500 hover:underline"
                      aria-label="Navigate to Dashboards"
                    >
                      Dashboards
                    </button>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800">Welcome back, Abbott Keith!</h1>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <span className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">
                      📧
                    </span>
                    You have 2 new messages and 15 new tasks
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleNavButtonClick('Inbox')}
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors"
                  aria-label="Open Inbox"
                >
                  <Inbox className="w-4 h-4" />
                  Inbox
                </button>
                <button
                  onClick={() => handleNavButtonClick('Settings')}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  aria-label="Open Settings"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => handleNavButtonClick('Calendar')}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors"
                aria-label="Open Calendar"
              >
                <Calendar className="w-4 h-4" />
                Calendar
              </button>
              <button
                onClick={() => handleNavButtonClick('My Account')}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors"
                aria-label="Open My Account"
              >
                <User className="w-4 h-4" />
                My Account
              </button>
            </div>

            {/* Navigation Dropdowns */}
            <div className="flex items-center gap-6 mt-6 text-sm">
              <button
                onClick={() => handleNavButtonClick('Dashboard')}
                className="flex items-center gap-2 text-teal-600 border-b-2 border-teal-600 pb-1 hover:text-teal-700"
                aria-label="Select Dashboard"
              >
                <span className="font-medium">Dashboard</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNavButtonClick('Personal Area')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                aria-label="Select Personal Area"
              >
                <span>Personal Area</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNavButtonClick('Select Company')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                aria-label="Select Company"
              >
                <span>Select Company</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">5</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNavButtonClick('WorkSpace')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                aria-label="Select WorkSpace"
              >
                <span>WorkSpace</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">25</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNavButtonClick('My Projects')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                aria-label="Select My Projects"
              >
                <span>My Projects</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">7</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
            <div className="flex items-center gap-8 text-sm">
              {navigationTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(tab.name)}
                  className={`font-medium transition-colors cursor-pointer ${
                    tab.active ? "text-gray-800 border-b-2 border-gray-800 pb-1" : "text-gray-600 hover:text-gray-800"
                  }`}
                  aria-label={`Navigate to ${tab.name}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Course Content */}
          <div className="p-6">
            {/* Course Automation Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  <h2 className="text-lg font-semibold text-gray-800">Course Automation</h2>
                  <button
                    onClick={() => handleNavButtonClick('Course Automation')}
                    className="text-gray-600 hover:text-gray-800"
                    aria-label="Expand Course Automation"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {filterButtons.map((button, index) => (
                    <button
                      key={index}
                      onClick={() => handleFilterClick(button.name)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        button.active ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                      aria-label={`Filter by ${button.name}`}
                    >
                      {button.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleViewToggle("list")}
                  className={`p-2 border border-gray-300 rounded transition-colors ${
                    viewMode === "list" ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                  aria-label="Switch to list view"
                >
                  <List className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => handleViewToggle("grid")}
                  className={`p-2 border border-gray-300 rounded transition-colors ${
                    viewMode === "grid" ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                  aria-label="Switch to grid view"
                >
                  <Grid3X3 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Basic Courses */}
            <div className={`mb-8 ${viewMode === "grid" ? "grid md:grid-cols-3 gap-6" : "space-y-4"}`}>
              {currentBasicCourses.map((course, index) => renderCourseCard(course, index))}
            </div>

            {/* Advanced Courses */}
            <div className={`mb-8 ${viewMode === "grid" ? "grid md:grid-cols-3 gap-6" : "space-y-4"}`}>
              {currentAdvancedCourses.map((course, index) => renderCourseCard(course, index))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                aria-label="Go to previous page"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm ${
                      currentPage === page
                        ? "bg-teal-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                aria-label="Go to next page"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CourseDashboardSection