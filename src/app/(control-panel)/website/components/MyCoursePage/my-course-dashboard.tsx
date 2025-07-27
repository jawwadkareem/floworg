"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Settings,
  Calendar,
  Inbox,
  User,
  Filter,
  List,
  Grid3X3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const MyCoursesDashboard: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("My Courses")
  const [categoryFilter, setCategoryFilter] = useState("All Categories")
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const dropdownOptions = [
    { name: "Dashboard", count: null },
    { name: "Personal Area", count: null },
    { name: "Select Company", count: 5 },
    { name: "WorkSpace", count: 25 },
    { name: "My Projects", count: 7 },
  ]

  const navigationTabs = ["Home", "My Courses", "My Knowledge base", "My Tutorial Videos", "My Blogs"]

  const categories = ["All Categories", "Marketing", "Graphic Design and 3D", "Science", "History and Psychology"]

  const courses = [
    {
      id: 1,
      name: "Introduction to modo 701",
      type: "Graphic Design and 3D",
      starts: "01-03-2014",
      status: "Not started yet",
      statusColor: "text-gray-500",
      statusIcon: "⏸️",
    },
    {
      id: 2,
      name: "Become self marketer",
      type: "Marketing",
      starts: "03-03-2014",
      status: "Not started yet",
      statusColor: "text-gray-500",
      statusIcon: "⏸️",
    },
    {
      id: 3,
      name: "How to find long term customers",
      type: "Marketing",
      starts: "06-03-2014",
      status: "In progress",
      statusColor: "text-orange-500",
      statusIcon: "🔄",
    },
    {
      id: 4,
      name: "Neuroscience and the future",
      type: "Science",
      starts: "21-03-2014",
      status: "In progress",
      statusColor: "text-orange-500",
      statusIcon: "🔄",
    },
    {
      id: 5,
      name: "History in complex view",
      type: "History and Psychology",
      starts: "06-04-2014",
      status: "Completed",
      statusColor: "text-green-500",
      statusIcon: "✅",
    },
    {
      id: 6,
      name: "Become self marketer",
      type: "Marketing",
      starts: "03-03-2014",
      status: "Completed",
      statusColor: "text-green-500",
      statusIcon: "✅",
    },
    {
      id: 7,
      name: "How to find long term customers",
      type: "Marketing",
      starts: "06-03-2014",
      status: "Completed",
      statusColor: "text-green-500",
      statusIcon: "✅",
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const filteredCourses = courses.filter((course) => {
    if (categoryFilter === "All Categories") return true
    return course.type === categoryFilter
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (!sortColumn) return 0

    let aValue = a[sortColumn as keyof typeof a]
    let bValue = b[sortColumn as keyof typeof b]

    if (typeof aValue === "string") aValue = aValue.toLowerCase()
    if (typeof bValue === "string") bValue = bValue.toLowerCase()

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
    return 0
  })

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
                  alt="Abbott Keith"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <button className="text-teal-500 hover:text-teal-600 cursor-pointer">Home</button>
                    <span className="text-gray-400">/</span>
                    <button className="text-teal-500 hover:text-teal-600 cursor-pointer">Dashboards</button>
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
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors">
                  <Inbox className="w-4 h-4" />
                  Inbox
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 mt-4">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <Calendar className="w-4 h-4" />
                Calendar
              </button>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors">
                <User className="w-4 h-4" />
                My Account
              </button>
            </div>

            {/* Navigation Dropdowns */}
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

          {/* Secondary Navigation */}
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
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* My Courses Content */}
          <div className="p-6">
            {/* Header with filters */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">My Courses</h2>
              <div className="flex items-center gap-4">
                {/* Category Filter */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("categories")}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                  >
                    <Filter className="w-4 h-4" />
                    {categoryFilter}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === "categories" && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10 min-w-[200px]">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCategoryFilter(category)
                            setActiveDropdown(null)
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Toggle */}
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors ${
                      viewMode === "list" ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors ${
                      viewMode === "grid" ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Courses Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4">
                      <button
                        onClick={() => handleSort("name")}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Course Name
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </th>
                    <th className="text-left py-3 px-4">
                      <button
                        onClick={() => handleSort("type")}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Course Type
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </th>
                    <th className="text-left py-3 px-4">
                      <button
                        onClick={() => handleSort("starts")}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Starts
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </th>
                    <th className="text-left py-3 px-4">
                      <button
                        onClick={() => handleSort("status")}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Status
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCourses.map((course, index) => (
                    <motion.tr
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-4">
                        <button className="text-blue-600 hover:text-blue-800 font-medium text-left">
                          {course.name}
                        </button>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-blue-600 text-sm">{course.type}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-600 text-sm">{course.starts}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{course.statusIcon}</span>
                          <span className={`text-sm ${course.statusColor}`}>{course.status}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
                      currentPage === page ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                disabled={currentPage === 3}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

export default MyCoursesDashboard
