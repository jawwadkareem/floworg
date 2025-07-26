"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Jenny Wilson",
      role: "CTO / Developer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Olivia Rodrigo",
      role: "Marketing Intern",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Glen Smith",
      role: "Developer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Dylan Auty",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Dylan Auty",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Glen Smith",
      role: "Developer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Olivia Rodrigo",
      role: "Marketing Intern",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Jenny Wilson",
      role: "CTO / Developer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">OpenUp Dedicated Team</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-lg mx-auto object-cover shadow-sm"
                  />
                  {index === 3 && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">×</span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                <div className="flex justify-center gap-2">
                  <Facebook className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  <Twitter className="w-4 h-4 text-gray-400 hover:text-blue-400 cursor-pointer" />
                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-700 cursor-pointer" />
                  <Instagram className="w-4 h-4 text-gray-400 hover:text-pink-600 cursor-pointer" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
