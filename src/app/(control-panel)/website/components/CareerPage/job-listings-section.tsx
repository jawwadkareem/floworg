"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin } from "lucide-react"

interface Job {
  id: string
  title: string
  type: string
  employment: string
  location: string
  category: string
}

const JobListingsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Job Category")
  const [selectedType, setSelectedType] = useState("All Job Type")
  const [selectedLocation, setSelectedLocation] = useState("All Job Location")

  const jobs: Job[] = [
    {
      id: "1",
      title: "iOS Developer",
      type: "Software",
      employment: "Full Time",
      location: "London",
      category: "Development",
    },
    {
      id: "2",
      title: "Flutter Developer",
      type: "Software",
      employment: "Full Time",
      location: "London",
      category: "Development",
    },
    {
      id: "3",
      title: "Backend Developer",
      type: "Software",
      employment: "Full Time",
      location: "Dhaka",
      category: "Development",
    },
    {
      id: "4",
      title: "App Developer",
      type: "Software",
      employment: "Full Time",
      location: "Dhaka",
      category: "Development",
    },
    {
      id: "5",
      title: "Database Administrator",
      type: "Data Analyst",
      employment: "Full Time",
      location: "Singapore",
      category: "Database",
    },
    {
      id: "6",
      title: "Chief Development Officer",
      type: "Web Development",
      employment: "Part Time",
      location: "Dhaka",
      category: "Management",
    },
    {
      id: "7",
      title: "Data Analyst",
      type: "Data Analyst",
      employment: "Part Time",
      location: "Dhaka",
      category: "Analytics",
    },
    {
      id: "8",
      title: "Graphic Designer",
      type: "UI/UX Designer",
      employment: "Part Time",
      location: "Singapore",
      category: "Design",
    },
    {
      id: "9",
      title: "Art Director",
      type: "UI/UX Designer",
      employment: "Freelance",
      location: "Rangpur",
      category: "Design",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-white min-w-[160px]"
            >
              <option>All Job Category</option>
              <option>Development</option>
              <option>Design</option>
              <option>Analytics</option>
              <option>Management</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-white min-w-[140px]"
            >
              <option>All Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Freelance</option>
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-white min-w-[150px]"
            >
              <option>All Job Location</option>
              <option>London</option>
              <option>Dhaka</option>
              <option>Singapore</option>
              <option>Rangpur</option>
            </select>
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-sm transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{job.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-900 rounded-sm"></div>
                    <span>{job.employment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <button className="text-teal-500 hover:text-teal-600 text-sm font-medium transition-colors">
                  More Details →
                </button>
              </motion.div>
            ))}
          </div>

          {/* Load More and CTA */}
          <div className="text-center space-y-6">
            <button className="text-teal-500 hover:text-teal-600 font-medium transition-colors">Load more...</button>
            <br />
            <button className="bg-gradient-to-r from-orange-400 via-orange-500 to-teal-400 hover:from-orange-500 hover:via-orange-600 hover:to-teal-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Join Our Team – Career Application
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JobListingsSection
