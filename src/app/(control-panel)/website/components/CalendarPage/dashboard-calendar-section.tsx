"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Mail, Settings, CalendarIcon, User, Edit3 } from "lucide-react"

interface CalendarEvent {
  id: string
  title: string
  date: number
  month: number
  year: number
  color: string
  type: "single" | "multi-day" | "all-day"
  startDate?: number
  endDate?: number
}

const DashboardCalendarSection: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(3) // April = 3 (0-indexed)
  const [currentYear, setCurrentYear] = useState(2022)
  const [viewMode, setViewMode] = useState("Month")

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const [events] = useState<CalendarEvent[]>([
    {
      id: "1",
      title: "All Day Event w...",
      date: 2,
      month: 3,
      year: 2022,
      color: "bg-blue-500",
      type: "all-day",
    },
    {
      id: "2",
      title: "12a Long Event",
      date: 7,
      month: 3,
      year: 2022,
      color: "bg-red-500",
      type: "single",
    },
    {
      id: "3",
      title: "12p Some Event",
      date: 8,
      month: 3,
      year: 2022,
      color: "bg-teal-500",
      type: "single",
    },
    {
      id: "4",
      title: "12p Conference",
      date: 11,
      month: 3,
      year: 2022,
      color: "bg-red-500",
      type: "single",
    },
    {
      id: "5",
      title: "7p Birthday Party",
      date: 13,
      month: 3,
      year: 2022,
      color: "bg-blue-600",
      type: "single",
    },
    {
      id: "6",
      title: "10:30a Meeting",
      date: 13,
      month: 3,
      year: 2022,
      color: "bg-blue-400",
      type: "single",
    },
    {
      id: "7",
      title: "7:30p Late Night Event",
      date: 17,
      month: 3,
      year: 2022,
      color: "bg-red-500",
      type: "multi-day",
      startDate: 17,
      endDate: 18,
    },
    {
      id: "8",
      title: "7:30p Multi-day Event",
      date: 20,
      month: 3,
      year: 2022,
      color: "bg-red-500",
      type: "multi-day",
      startDate: 20,
      endDate: 22,
    },
  ])

  const [labels, setLabels] = useState([
    { id: "personal", name: "Personal", color: "bg-blue-500", checked: true },
    { id: "company", name: "My Company", color: "bg-orange-500", checked: true },
    { id: "floworg", name: "Floworg", color: "bg-teal-500", checked: true },
  ])

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    }
  }

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const getEventsForDay = (day: number) => {
    return events.filter((event) => {
      if (event.month !== currentMonth || event.year !== currentYear) return false

      if (event.type === "multi-day") {
        return day >= (event.startDate || event.date) && day <= (event.endDate || event.date)
      }
      return event.date === day
    })
  }

  const toggleLabel = (labelId: string) => {
    setLabels(labels.map((label) => (label.id === labelId ? { ...label, checked: !label.checked } : label)))
  }

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
    const days = []

    // Previous month's trailing days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear)

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${daysInPrevMonth - i}`} className="h-24 p-2 border-r border-b border-gray-200 bg-gray-50">
          <span className="text-sm text-gray-400">{daysInPrevMonth - i}</span>
        </div>,
      )
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDay(day)
      const visibleEvents = dayEvents.slice(0, 2)
      const moreCount = dayEvents.length - 2

      days.push(
        <div
          key={day}
          className="h-24 p-2 border-r border-b border-gray-200 last:border-r-0 relative bg-white hover:bg-gray-50 cursor-pointer"
        >
          <span className="text-sm font-medium text-gray-900">{day}</span>
          <div className="mt-1 space-y-1">
            {visibleEvents.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className={`${event.color} text-white text-xs px-1 py-0.5 rounded truncate`}
              >
                {event.title}
              </div>
            ))}
            {moreCount > 0 && <div className="text-xs text-gray-500">+{moreCount} more</div>}
          </div>
        </div>,
      )
    }

    // Next month's leading days
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7
    const remainingCells = totalCells - (firstDay + daysInMonth)

    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div key={`next-${day}`} className="h-24 p-2 border-r border-b border-gray-200 bg-gray-50">
          <span className="text-sm text-gray-400">{day}</span>
        </div>,
      )
    }

    return days
  }

  return (
    <section className="py-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm text-teal-600 mb-1">
                    <span>Home</span>
                    <span>/</span>
                    <span>Dashboards</span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome back, Abbott Keith!</h1>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <span>📧</span>
                    You have 2 new messages and 15 new tasks
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" />
                  Inbox
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 transition-colors">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Calendar
              </button>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
                <User className="w-4 h-4" />
                My Account
              </button>
            </div>

            {/* Navigation Dropdowns */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <select className="border-2 border-teal-500 bg-teal-50 rounded-md px-3 py-2 text-sm text-gray-900 appearance-none pr-8">
                  <option>Dashboard</option>
                  <option>Analytics</option>
                  <option>Reports</option>
                </select>
              </div>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-700">
                <option>Personal Area</option>
                <option>Work Area</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-700">
                <option>Select Company 5</option>
                <option>Company A</option>
                <option>Company B</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-700">
                <option>WorkSpaces 25</option>
                <option>Workspace 1</option>
                <option>Workspace 2</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-700">
                <option>My Projects 7</option>
                <option>Project A</option>
                <option>Project B</option>
              </select>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>Home</span>
              <span>/</span>
              <span>Apps</span>
              <span>/</span>
              <span className="font-medium">Calendar</span>
            </div>

            <h2 className="text-xl font-bold text-gray-900">Calendar</h2>
          </div>

          {/* Calendar Content */}
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-64 border-r border-gray-200 p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-700">LABELS</h4>
                  <button className="text-teal-500 hover:text-teal-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {labels.map((label) => (
                    <label key={label.id} className="flex items-center gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-teal-500 focus:ring-teal-500"
                        checked={label.checked}
                        onChange={() => toggleLabel(label.id)}
                      />
                      <span className={`w-3 h-3 ${label.color} rounded-full`}></span>
                      <span className="text-gray-700">{label.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Calendar */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {months[currentMonth]} {currentYear}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigateMonth("prev")}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => navigateMonth("next")}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white"
                  >
                    <option>Month</option>
                    <option>Week</option>
                    <option>Day</option>
                  </select>
                  <CalendarIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-7 bg-gray-50">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="p-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 last:border-r-0"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">{renderCalendarDays()}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardCalendarSection
