"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Inbox,
  Send,
  FileText,
  Trash2,
  Star,
  Users,
  Settings,
  ChevronDown,
  Paperclip,
  Reply,
  RotateCcw,
  Forward,
} from "lucide-react"

// Define the Message type
type Message = {
  sender: string
  avatar: string
  subject: string
  preview: string
  time: string
  hasAttachment: boolean
  isVerified: boolean
}

const DashboardInterfaceSection: React.FC = () => {
  // Define messages array before state
  const messages: Message[] = [
    {
      sender: "Mary Shelley",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Please review and sign the attached agreement",
      preview:
        "Hi Brian, I hope this email finds you well. I wanted to follow up on our previous discussion about the potential collaboration between our planning teams. I've attached work...",
      time: "Jan 25",
      hasAttachment: true,
      isVerified: true,
    },
    {
      sender: "Brian Murray",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Delivery address confirmation",
      preview:
        "Dear Brian, I hope this message finds you well. I wanted to reach out regarding your recent purchase from our online store. We want to ensure that your order reaches you...",
      time: "Jan 25",
      hasAttachment: false,
      isVerified: false,
    },
    {
      sender: "Senders Bank",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Suspicious transaction detected",
      preview:
        "Hi Brian, Aliquam ipsum quam sit amet neque elit vehicula. Nisi molestie suscipit consectetur ut tellus eu consectetur. Etiam posuere mauris quis ut. Nam lorem nec ante nibh.",
      time: "Jan 25",
      hasAttachment: false,
      isVerified: false,
    },
    {
      sender: "Zimmerman David",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Previous clients and new invoices",
      preview:
        "Dear Brian, Ut quis ex tellus tellus lorem sit amet. Fuget molestie mollis ante pharetra. Vivamus mauris molestie ut nisi. Magna suscipit ut suscipit lorem velit ut aliquam nisi elit.",
      time: "Jan 24",
      hasAttachment: false,
      isVerified: false,
    },
    {
      sender: "Katrina Allard",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Quote for a new logo design project",
      preview:
        "Hey Brian, Nisi tellus aliquam nec consectetur elit aliquam. Nunc pretium aliquam consectetur ut nec lorem. Ut quis elit interdum elit nec lorem. Ut quis elit interdum elit nec lorem.",
      time: "Jan 24",
      hasAttachment: false,
      isVerified: true,
    },
    {
      sender: "Carla Gray",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Nulla consectetur ante ex ex urna bibendum aliquam suscipit sit ullam fugiat aliquam ex",
      preview:
        "Hey Brian, Ut pretium consectetur tempor ante. Ante consectetur non consectetur ut consectetur ante. Diam reprehenderit ante nisi consectetur ut consectetur ante consectetur.",
      time: "Jan 24",
      hasAttachment: false,
      isVerified: false,
    },
  ]

  // Initialize state with explicit type and first message
  const [selectedMessage, setSelectedMessage] = useState<Message>(messages[0])
  const [activeSidebarItem, setActiveSidebarItem] = useState<string>("Inbox")

  const sidebarItems = [
    { icon: Inbox, label: "Inbox", active: activeSidebarItem === "Inbox" },
    { icon: Send, label: "Sent", active: activeSidebarItem === "Sent" },
    { icon: FileText, label: "Drafts", active: activeSidebarItem === "Drafts" },
    { icon: Star, label: "Starred", active: activeSidebarItem === "Starred" },
    { icon: Trash2, label: "Trash", active: activeSidebarItem === "Trash" },
    { icon: Users, label: "Team", active: activeSidebarItem === "Team" },
    { icon: Settings, label: "Important", active: activeSidebarItem === "Important" },
  ]

  const attachments = [
    {
      name: "register-forms.zip",
      type: "ZIP",
      size: "2.3 MB",
    },
    {
      name: "monthly-transaction-oct-dec.xls",
      type: "XLS",
      size: "890 KB",
    },
    {
      name: "deals-and-contracts.jpg",
      type: "JPG",
      size: "1.2 MB",
    },
  ]

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message)
    console.log(`Clicked message from ${message.sender}`)
  }

  const handleSidebarItemClick = (label: string) => {
    setActiveSidebarItem(label)
    console.log(`Clicked sidebar item: ${label}`)
  }

  const handleButtonClick = (action: string) => {
    console.log(`Clicked ${action} button`)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Abbott Keith"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Home</span>
                      <span>/</span>
                      <span>Dashboards</span>
                    </div>
                    <h1 className="text-xl font-bold text-gray-800">Welcome back, Abbott Keith!</h1>
                    <p className="text-sm text-gray-500">📧 You have 2 new messages and 15 new tasks</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleButtonClick("Inbox")}
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-teal-600"
                >
                  📧 Inbox
                </button>
                <button
                  onClick={() => handleButtonClick("Settings")}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-700"
                >
                  ⚙️ Settings
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => handleButtonClick("Calendar")}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-700"
              >
                📅 Calendar
              </button>
              <button
                onClick={() => handleButtonClick("My Account")}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-600"
              >
                👤 My Account
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-4 mt-4 text-sm">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleButtonClick("Dashboard Filter")}
              >
                <span className="text-teal-600 border-b-2 border-teal-600 pb-1">Dashboard</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleButtonClick("Personal Area Filter")}
              >
                <span className="text-gray-600">Personal Area</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleButtonClick("Select Company Filter")}
              >
                <span className="text-gray-600">Select Company</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">5</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleButtonClick("WorkSpace Filter")}
              >
                <span className="text-gray-600">WorkSpace</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">25</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleButtonClick("My Projects Filter")}
              >
                <span className="text-gray-600">My Projects</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">7</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex h-[calc(100vh-200px)]">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200">
              <div className="p-4">
                <button
                  onClick={() => handleButtonClick("Compose")}
                  className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg text-sm mb-4 hover:bg-teal-600"
                >
                  Compose
                </button>

                <div className="space-y-1">
                  {sidebarItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSidebarItemClick(item.label)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        item.active ? "bg-teal-50 text-teal-600 font-medium" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex">
              {/* Message List */}
              <div className="flex-1 bg-white">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>INBOX</span>
                    <input
                      type="text"
                      placeholder="Search for any email or task"
                      className="flex-1 px-3 py-1 border border-gray-300 rounded-lg text-sm"
                      onChange={(e) => console.log(`Search: ${e.target.value}`)}
                    />
                  </div>
                </div>

                <div className="overflow-y-auto h-full">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      onClick={() => handleMessageClick(message)}
                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                        selectedMessage === message ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <img
                            src={message.avatar || "/placeholder.svg"}
                            alt={message.sender}
                            className="w-8 h-8 rounded-full"
                          />
                          {message.isVerified && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-gray-800 text-sm">{message.sender}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{message.time}</span>
                              {message.hasAttachment && <Paperclip className="w-4 h-4 text-gray-400" />}
                            </div>
                          </div>
                          <h4 className="font-medium text-gray-800 text-sm mb-1 truncate">{message.subject}</h4>
                          <p className="text-xs text-gray-600 line-clamp-2">{message.preview}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-96 bg-gray-50 border-l border-gray-200">
                <div className="p-4 h-full overflow-y-auto">
                  {selectedMessage && (
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h3 className="font-medium text-gray-800 mb-2">{selectedMessage.subject}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <img
                          src={selectedMessage.avatar}
                          alt={selectedMessage.sender}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-sm">{selectedMessage.sender}</div>
                          <div className="text-xs text-gray-500">to me and 3 others</div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{selectedMessage.preview}</p>

                      <div className="text-sm text-gray-500 mb-4">
                        Cheers!
                        <br />
                        {selectedMessage.sender}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleButtonClick("Reply")}
                          className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded text-sm hover:bg-gray-200 transition-colors"
                        >
                          <Reply className="w-4 h-4" />
                          Reply
                        </button>
                        <button
                          onClick={() => handleButtonClick("Reply All")}
                          className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded text-sm hover:bg-gray-200 transition-colors"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Reply All
                        </button>
                        <button
                          onClick={() => handleButtonClick("Forward")}
                          className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded text-sm hover:bg-gray-200 transition-colors"
                        >
                          <Forward className="w-4 h-4" />
                          Forward
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Attachments Section */}
                  {selectedMessage?.hasAttachment && (
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-800 mb-3 text-sm">3 Attachments</h4>
                      <div className="space-y-2">
                        {attachments.map((attachment, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                            onClick={() => console.log(`Clicked attachment: ${attachment.name}`)}
                          >
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                              {attachment.type}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-gray-800 truncate">{attachment.name}</div>
                              <div className="text-xs text-gray-500">{attachment.size}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardInterfaceSection