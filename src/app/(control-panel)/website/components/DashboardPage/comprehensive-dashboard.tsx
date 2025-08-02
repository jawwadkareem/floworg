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
      MoreHorizontal,
      Clock,
      ChevronRight,
      MapPin,
      Download,
    } from "lucide-react"

    const ComprehensiveDashboard = () => {
      const [activeDropdown, setActiveDropdown] = useState(null)
      const [activeTab, setActiveTab] = useState("Home")
      const [activeProjectTab, setActiveProjectTab] = useState("In progress")

      const dropdownOptions = [
        { name: "Dashboard", count: null, active: true },
        { name: "Personal Area", count: null, active: false },
        { name: "Select Company", count: 5, active: false },
        { name: "WorkSpace", count: 25, active: false },
        { name: "My Projects", count: 7, active: false },
      ]

      const navigationTabs = [
        "Home",
        "Company Profile",
        "Plans & Features",
        "Team & Permissions",
        "Invoices",
        "Affiliates",
        "WhiteLabel",
        "Tickets",
        "Timeline",
        "Automations",
      ]

      const projects = [
        {
          name: "Group Meeting",
          time: "in 32 minutes",
          location: "Conference room 1B",
          icon: "🏢",
        },
        {
          name: "Coffee Break",
          time: "10:30 AM",
          location: "",
          icon: "☕",
        },
        {
          name: "Public Beta Release",
          time: "11:00 AM",
          location: "",
          icon: "🚀",
        },
        {
          name: "Lunch",
          time: "12:10 PM",
          location: "",
          icon: "🍽️",
        },
        {
          name: "Dinner with David",
          time: "05:30 PM",
          location: "Magnolia",
          icon: "🍽️",
        },
        {
          name: "Jane's Birthday Party",
          time: "07:30 PM",
          location: "Home",
          icon: "🎉",
        },
        {
          name: "Overseer's Retirement Party",
          time: "09:30 PM",
          location: "Overseer's room",
          icon: "🎊",
        },
      ]

      const invoices = [
        {
          id: "526615STNT",
          date: "Oct 08, 2019",
          amount: "$1,358.75",
          status: "COMPLETED",
          statusColor: "text-green-600 bg-green-100",
        },
        {
          id: "4214369GVYT",
          date: "Dec 18, 2019",
          amount: "-$1,042.82",
          status: "COMPLETED",
          statusColor: "text-green-600 bg-green-100",
        },
        {
          id: "685377GZHT",
          date: "Dec 25, 2019",
          amount: "$1,828.16",
          status: "PENDING",
          statusColor: "text-orange-600 bg-orange-100",
        },
        {
          id: "8846600THT",
          date: "Nov 29, 2019",
          amount: "$1,647.55",
          status: "COMPLETED",
          statusColor: "text-green-600 bg-green-100",
        },
        {
          id: "3414022LNYT",
          date: "Nov 24, 2019",
          amount: "-$927.43",
          status: "COMPLETED",
          statusColor: "text-green-600 bg-green-100",
        },
      ]

      const financialCharts = [
        {
          title: "This month",
          value: "$17,663.00",
          subtitle: "5% more than Last month",
          trend: "up",
          color: "text-blue-600",
          chartColor: "stroke-blue-500",
        },
        {
          title: "Last month",
          value: "$54,663.00",
          subtitle: "3% more than monthly Avg",
          trend: "up",
          color: "text-green-600",
          chartColor: "stroke-green-500",
        },
        {
          title: "Last year",
          value: "$648,813.00",
          subtitle: "2% more than Year before",
          trend: "down",
          color: "text-red-600",
          chartColor: "stroke-red-500",
        },
      ]

      const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name)
      }

      const handleInvoiceClick = (invoiceId) => {
        console.log(`Clicked invoice: ${invoiceId}`)
      }

      const handleProjectClick = (projectName) => {
        console.log(`Clicked project: ${projectName}`)
      }

      const handleDownloadInvoice = (invoiceId) => {
        console.log(`Downloading invoice: ${invoiceId}`)
      }

      const handleChartClick = (chartTitle) => {
        console.log(`Clicked chart: ${chartTitle}`)
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
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Abbott Keith"
                      className="w-12 h-12 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-teal-500 transition-all"
                    />
                    <div>
                      <div className="flex items-center gap-2 text-sm mb-1">
                        <button className="text-teal-500 hover:text-teal-600 cursor-pointer transition-colors">Home</button>
                        <span className="text-gray-400">&gt;</span>
                        <button className="text-teal-500 hover:text-teal-600 cursor-pointer transition-colors">
                          Dashboards
                        </button>
                      </div>
                      <h1 className="text-2xl font-bold text-gray-800">Welcome back, Abbott Keith!</h1>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-teal-600 transition-colors">
                          📧
                        </span>
                        You have 2 new messages and 15 new tasks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => console.log("Inbox clicked")}
                      className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors"
                    >
                      <Inbox className="w-4 h-4" />
                      Inbox
                    </button>
                    <button
                      onClick={() => console.log("Settings clicked")}
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => console.log("Calendar clicked")}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Calendar
                  </button>
                  <button
                    onClick={() => console.log("My Account clicked")}
                    className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors"
                  >
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
                          option.active
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
                          <div
                            onClick={() => console.log(`${option.name} Option 1 clicked`)}
                            className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                          >
                            Option 1
                          </div>
                          <div
                            onClick={() => console.log(`${option.name} Option 2 clicked`)}
                            className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                          >
                            Option 2
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Navigation */}
              <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 overflow-x-auto">
                <div className="flex items-center gap-8 text-sm min-w-max">
                  {navigationTabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(tab)}
                      className={`font-medium transition-colors whitespace-nowrap ${
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

              {/* Main Dashboard Content */}
              <div className="p-6">
                {/* WorkSpace and Stats Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium cursor-pointer hover:text-gray-800 transition-colors">WorkSpace</span>
                  </div>
                  <div className="flex items-center gap-8 text-sm text-gray-600">
                    <button className="hover:text-gray-800 transition-colors">Stats</button>
                    <button className="hover:text-gray-800 transition-colors">Users</button>
                    <button className="hover:text-gray-800 transition-colors">User Stats</button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0 * 0.1 }}
                    onClick={() => console.log("Social Media card clicked")}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-500 mb-2">25</div>
                      <div className="text-gray-600 text-sm mb-1">Social Media</div>
                      <div className="text-xs text-gray-400">Campaigns: 7</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 * 0.1 }}
                    onClick={() => console.log("Tickets card clicked")}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-500 mb-2">4</div>
                      <div className="text-gray-600 text-sm mb-1">Tickets</div>
                      <div className="text-xs text-gray-400">{"Yesterday's Visitors: 2"}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2 * 0.1 }}
                    onClick={() => console.log("Users card clicked")}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-500 mb-2">32</div>
                      <div className="text-gray-600 text-sm mb-1">Users</div>
                      <div className="text-xs text-gray-400">Closed today: 8</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3 * 0.1 }}
                    onClick={() => console.log("Integrations card clicked")}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-500 mb-2">42</div>
                      <div className="text-gray-600 text-sm mb-1">Integrations</div>
                      <div className="text-xs text-gray-400">Integrations: 8</div>
                    </div>
                  </motion.div>
                </div>

                {/* Main Content - Single Column Layout */}
                <div className="space-y-6">
                  {/* Tickets Section - Full Width */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-800">Tickets</h3>
                      <div className="flex items-center gap-2">
                        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
                          This Month
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Last Year
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      {/* Left Side - New vs. Closed Chart */}
                      <div>
                        <h4 className="text-sm text-gray-600 mb-4">New vs. Closed</h4>

                        {/* Line Chart */}
                        <div className="h-48 mb-4 relative">
                          <svg className="w-full h-full" viewBox="0 0 400 160">
                            {/* Grid lines */}
                            <defs>
                              <pattern id="grid" width="40" height="32" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 32" fill="none" stroke="#f3f4f6" strokeWidth="1" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />

                            {/* Y-axis labels */}
                            <text x="15" y="20" className="text-xs fill-gray-500">
                              50
                            </text>
                            <text x="15" y="52" className="text-xs fill-gray-500">
                              40
                            </text>
                            <text x="15" y="84" className="text-xs fill-gray-500">
                              30
                            </text>
                            <text x="15" y="116" className="text-xs fill-gray-500">
                              20
                            </text>
                            <text x="15" y="148" className="text-xs fill-gray-500">
                              10
                            </text>

                            {/* Line chart path */}
                            <path
                              d="M 60 88 L 100 84 L 140 108 L 180 96 L 220 120 L 260 112 L 300 104"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              fill="none"
                            />

                            {/* Data points with labels */}
                            {[
                              { x: 60, y: 88, value: "42" },
                              { x: 100, y: 84, value: "43" },
                              { x: 140, y: 108, value: "28" },
                              { x: 180, y: 96, value: "34" },
                              { x: 220, y: 120, value: "20" },
                              { x: 260, y: 112, value: "25" },
                              { x: 300, y: 104, value: "22" },
                            ].map((point, index) => (
                              <g key={index}>
                                <circle
                                  cx={point.x}
                                  cy={point.y}
                                  r="4"
                                  fill="#3b82f6"
                                  className="cursor-pointer hover:r-6 transition-all"
                                  onClick={() => console.log(`Chart point ${point.value} clicked`)}
                                />
                                <rect
                                  x={point.x - 12}
                                  y={point.y - 25}
                                  width="24"
                                  height="16"
                                  rx="3"
                                  fill="#3b82f6"
                                  className="cursor-pointer"
                                />
                                <text
                                  x={point.x}
                                  y={point.y - 13}
                                  textAnchor="middle"
                                  className="text-xs fill-white font-medium"
                                >
                                  {point.value}
                                </text>
                              </g>
                            ))}
                          </svg>
                        </div>

                        {/* Bar Chart */}
                        <div className="flex items-end justify-between h-16 gap-2">
                          {[
                            { day: "Mon", height: 40 },
                            { day: "Tue", height: 35 },
                            { day: "Wed", height: 28 },
                            { day: "Thu", height: 42 },
                            { day: "Fri", height: 25 },
                            { day: "Sat", height: 38 },
                            { day: "Sun", height: 55 },
                          ].map((bar, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center">
                              <div
                                className="w-full bg-blue-400 rounded-t cursor-pointer hover:bg-blue-500 transition-colors"
                                style={{ height: `${bar.height}px` }}
                                onClick={() => console.log(`${bar.day} bar clicked`)}
                              ></div>
                              <div className="text-xs text-gray-500 mt-2">{bar.day}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Overview */}
                      <div>
                        <h4 className="text-sm text-gray-600 mb-20">Overview</h4>

                        <div className="space-y-4">
                          {/* Large Numbers */}
                          <div className="flex items-center justify-center gap-x-18">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-blue-600 mb-1">214</div>
                                <div className="text-sm text-blue-600 font-medium">New Tickets</div>
                            </div>
                            <div className="text-center">
                                <div className="text-6xl font-bold text-green-600 mb-1">75</div>
                                <div className="text-sm text-green-600 font-medium">Closed</div>
                            </div>
                            </div>


                          {/* Bottom Stats */}
                          <div className="flex justify-between pt-19 border-t border-gray-200">
                            <div className="text-center cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
                              <div className="text-2xl font-bold text-gray-800 mb-1">3</div>
                              <div className="text-xs text-gray-500">Fixed</div>
                            </div>
                            <div className="text-center cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
                              <div className="text-2xl font-bold text-gray-800 mb-1">4</div>
                              <div className="text-xs text-gray-500">Won't Fix</div>
                            </div>
                            <div className="text-center cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
                              <div className="text-2xl font-bold text-gray-800 mb-1">8</div>
                              <div className="text-xs text-gray-500">Re-opened</div>
                            </div>
                            <div className="text-center cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
                              <div className="text-2xl font-bold text-gray-800 mb-1">6</div>
                              <div className="text-xs text-gray-500">Needs Triage</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Projects Section - Full Width */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveProjectTab("In progress")}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            activeProjectTab === "In progress"
                              ? "bg-gray-200 text-gray-800"
                              : "text-gray-600 hover:text-gray-800"
                          }`}
                        >
                          In progress
                        </button>
                        <button
                          onClick={() => setActiveProjectTab("Completed")}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            activeProjectTab === "Completed"
                              ? "bg-gray-200 text-gray-800"
                              : "text-gray-600 hover:text-gray-800"
                          }`}
                        >
                          Completed
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {projects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          onClick={() => handleProjectClick(project.name)}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors cursor-pointer rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs hover:bg-gray-200 transition-colors">
                              {project.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800 text-sm hover:text-gray-600 transition-colors">
                                {project.name}
                              </h4>
                              <div className="flex items-center gap-3 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {project.time}
                                </div>
                                {project.location && (
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {project.location}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section - Invoices and Financial Charts with Equal Heights */}
                  <div className="grid grid-cols-12 gap-6">
                    {/* Invoices Table - Takes 8 columns */}
                    <div className="col-span-8">
                      <div className="bg-white rounded-xl p-6 shadow-md h-[400px] flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">Invoices</h3>
                            <p className="text-sm text-gray-500">1 pending, 4 completed</p>
                          </div>
                        </div>

                        <div className="overflow-x-auto flex-1">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600">Invoice ID</th>
                                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600">Date</th>
                                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600">Amount</th>
                                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600">Status</th>
                                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {invoices.map((invoice, index) => (
                                <motion.tr
                                  key={invoice.id}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                  onClick={() => handleInvoiceClick(invoice.id)}
                                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                  <td className="py-3 px-3 text-xs text-gray-800 font-mono hover:text-gray-600 transition-colors">
                                    {invoice.id}
                                  </td>
                                  <td className="py-3 px-3 text-xs text-gray-600">{invoice.date}</td>
                                  <td className="py-3 px-3 text-xs font-medium text-gray-800">{invoice.amount}</td>
                                  <td className="py-3 px-3">
                                    <span
                                      className={`px-2 py-1 rounded text-xs font-medium ${invoice.statusColor} cursor-pointer hover:opacity-80 transition-opacity`}
                                    >
                                      {invoice.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-3">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleDownloadInvoice(invoice.id)
                                      }}
                                      className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded hover:bg-gray-100"
                                    >
                                      <Download className="w-3 h-3" />
                                    </button>
                                  </td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-auto pt-4">
                          <button
                            onClick={() => console.log("See all invoices clicked")}
                            className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                          >
                            See all invoices
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Financial Charts - Takes 4 columns with Equal Height */}
                    <div className="col-span-4">
                      <div className="h-[500px] flex flex-col gap-4">
                        {financialCharts.map((chart, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            onClick={() => handleChartClick(chart.title)}
                            className="bg-white rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer flex-1 flex flex-col"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-sm font-medium text-gray-600">{chart.title}</h4>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  console.log(`More options for ${chart.title}`)
                                }}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded hover:bg-gray-100"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                            </div>
                            <div className={`text-xl font-bold ${chart.color} mb-1`}>{chart.value}</div>
                            <div className="text-xs text-gray-500 mb-3">{chart.subtitle}</div>
                            <div className="h-12 mt-auto">
                              <svg className="w-full h-full" viewBox="0 0 200 40">
                                <path
                                  d={
                                    chart.trend === "up"
                                      ? index === 0
                                        ? "M 10 35 Q 30 30 50 25 Q 70 20 90 15 Q 110 12 130 8 Q 150 5 170 3 Q 180 2 190 1"
                                        : "M 10 30 Q 30 25 50 20 Q 70 15 90 12 Q 110 8 130 6 Q 150 4 170 2 Q 180 1 190 1"
                                      : "M 10 5 Q 30 8 50 12 Q 70 16 90 20 Q 110 24 130 28 Q 150 32 170 35 Q 180 37 190 38"
                                  }
                                  stroke={index === 0 ? "#3b82f6" : index === 1 ? "#10b981" : "#ef4444"}
                                  strokeWidth="2"
                                  fill="none"
                                  className="hover:stroke-4 transition-all cursor-pointer"
                                />
                              </svg>
                            </div>
                          </motion.div>
                        ))}
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
export default ComprehensiveDashboard
