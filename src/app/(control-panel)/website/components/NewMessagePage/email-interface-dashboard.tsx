"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Settings,
  Calendar,
  Inbox,
  User,
  Send,
  Paperclip,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  ImageIcon,
  Smile,
  X,
  Search,
  Star,
  Archive,
  Trash2,
  FileText,
  CreditCard,
  Users,
  BookOpen,
  Plus,
  Reply,
  Forward,
  RotateCcw,
} from "lucide-react"

interface Email {
  id: number
  sender: string
  avatar: string
  subject: string
  preview: string
  fullContent: string
  time: string
  verified: boolean
  folder: string
}

const DynamicEmailInterface: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)
  const [composeModalOpen, setComposeModalOpen] = useState(false)
  const [activeFolder, setActiveFolder] = useState("Inbox")
  const [emailData, setEmailData] = useState({
    from: "johnboe@hexagond.com",
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    message: "",
  })

  const dropdownOptions = [
    { name: "Dashboard", count: null, active: true },
    { name: "Personal Area", count: null, active: false },
    { name: "Select Company", count: 5, active: false },
    { name: "WorkSpace", count: 25, active: false },
    { name: "My Projects", count: 7, active: false },
  ]

  const mailboxItems = [
    { icon: Inbox, label: "Inbox", count: 5, folder: "Inbox" },
    { icon: Send, label: "Sent", count: 12, folder: "Sent" },
    { icon: FileText, label: "Drafts", count: 3, folder: "Drafts" },
    { icon: Archive, label: "Spam", count: 0, folder: "Spam" },
    { icon: Trash2, label: "Trash", count: 2, folder: "Trash" },
  ]

  const filterItems = [
    { icon: Star, label: "Starred", count: 8, folder: "Starred" },
    { icon: Star, label: "Important", count: 4, folder: "Important" },
    { icon: User, label: "Personal", count: 15, folder: "Personal" },
    { icon: FileText, label: "Work", count: 23, folder: "Work" },
    { icon: CreditCard, label: "Payments", count: 6, folder: "Payments" },
    { icon: FileText, label: "Invoices", count: 9, folder: "Invoices" },
    { icon: Users, label: "Accounts", count: 11, folder: "Accounts" },
    { icon: BookOpen, label: "Forums", count: 7, folder: "Forums" },
  ]

  const allEmails: Email[] = [
    {
      id: 1,
      sender: "Rica Cash",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Ipsum laborum minim aute labore in",
      preview:
        "Hey Brian, Laborum aute ad ex aute amet aliquam minim voluptate tempor non labore cillum. Voluptate veniam magna et...",
      fullContent:
        "Hey Brian, Laborum aute ad ex aute amet aliquam minim voluptate tempor non labore cillum. Voluptate veniam magna et consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      time: "2 hours ago",
      verified: true,
      folder: "Inbox",
    },
    {
      id: 2,
      sender: "Elaine Ortiz",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Ipsum fugiat ad deserunt cillum sunt fugiat",
      preview:
        "Hello Brian, id Lorem laborum suscipit laborum aliquam mollit commodo ullamco. Sunt nulla ex dolor velit ex...",
      fullContent:
        "Hello Brian, id Lorem laborum suscipit laborum aliquam mollit commodo ullamco. Sunt nulla ex dolor velit ex consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      time: "4 hours ago",
      verified: true,
      folder: "Inbox",
    },
    {
      id: 3,
      sender: "Fleming Stone",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Consequat exercitation elit nulla elit Lorem",
      preview: "Hi Brian, Est labore sunt sunt Lorem dolore. In excepteur ut veniam ut et culpa exercitation qui ut...",
      fullContent:
        "Hi Brian, Est labore sunt sunt Lorem dolore. In excepteur ut veniam ut et culpa exercitation qui ut consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      time: "6 hours ago",
      verified: false,
      folder: "Inbox",
    },
    {
      id: 4,
      sender: "England Willy",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Minim do reprehenderit dolor ipsum officia magna et",
      preview:
        "Dear Brian, Ad do minim ut ad ex est reprehenderit labore deserunt nostrud pariatur nulla ullamco fugiat...",
      fullContent:
        "Dear Brian, Ad do minim ut ad ex est reprehenderit labore deserunt nostrud pariatur nulla ullamco fugiat consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      time: "1 day ago",
      verified: false,
      folder: "Inbox",
    },
    {
      id: 5,
      sender: "Ingram Fowler",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Aliquip eiusmod pariatur adipisicing id consectetur",
      preview:
        "Dear Brian, Dolore est occaecat est do fugiat sunt est amet magna dolor. Eiusmod nostrud qui sunt ut aliquip...",
      fullContent:
        "Dear Brian, Dolore est occaecat est do fugiat sunt est amet magna dolor. Eiusmod nostrud qui sunt ut aliquip consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      time: "2 days ago",
      verified: true,
      folder: "Inbox",
    },
    {
      id: 6,
      sender: "Diana Walsh",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Non anim id laborum in et ut",
      preview: "Hi Brian, Non anim id laborum in et ut consectetur adipiscing elit...",
      fullContent:
        "Hi Brian, Non anim id laborum in et ut consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      time: "3 days ago",
      verified: false,
      folder: "Inbox",
    },
    // Sent emails
    {
      id: 7,
      sender: "You",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Re: Project Update",
      preview: "Thanks for the update. I'll review the documents and get back to you...",
      fullContent:
        "Thanks for the update. I'll review the documents and get back to you by tomorrow. The project looks great so far.",
      time: "1 hour ago",
      verified: false,
      folder: "Sent",
    },
    // Draft emails
    {
      id: 8,
      sender: "Draft",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Meeting Follow-up",
      preview: "Following up on our meeting yesterday...",
      fullContent: "Following up on our meeting yesterday, I wanted to confirm the next steps we discussed.",
      time: "30 minutes ago",
      verified: false,
      folder: "Drafts",
    },
  ]

  const attachments = [
    { name: "attachment-1.jpg", size: "0.25 KB" },
    { name: "attachment-2.jpg", size: "0.25 KB" },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleEmailChange = (field: string, value: string) => {
    setEmailData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendEmail = () => {
    console.log("Sending email:", emailData)
    setComposeModalOpen(false)
    setEmailData({
      from: "johnboe@hexagond.com",
      to: "",
      cc: "",
      bcc: "",
      subject: "",
      message: "",
    })
  }

  const handleFolderClick = (folder: string) => {
    setActiveFolder(folder)
    setSelectedEmail(null)
  }

  const handleEmailClick = (email: Email) => {
    setSelectedEmail(email)
  }

  const filteredEmails = allEmails.filter((email) => email.folder === activeFolder)

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
                      <div className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Option 1</div>
                      <div className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Option 2</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Email Interface */}
          <div className="flex h-[600px]">
            {/* Left Sidebar */}
            <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
              <button
                onClick={() => setComposeModalOpen(true)}
                className="w-full bg-teal-500 text-white px-4 py-3 rounded-lg text-sm font-medium mb-4 hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Compose
              </button>

              {/* Mailboxes Section */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">MAILBOXES</h3>
                <div className="space-y-1">
                  {mailboxItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleFolderClick(item.folder)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeFolder === item.folder
                          ? "bg-teal-50 text-teal-600 font-medium"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </div>
                      {item.count > 0 && (
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">{item.count}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filters Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">FILTERS</h3>
                <div className="space-y-1">
                  {filterItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleFolderClick(item.folder)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeFolder === item.folder
                          ? "bg-teal-50 text-teal-600 font-medium"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </div>
                      {item.count > 0 && (
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">{item.count}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Email List */}
            <div className="flex-1 bg-white border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-semibold text-gray-800">{activeFolder.toUpperCase()}</h2>
                  <div className="flex-1 relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for any email or task"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto h-full">
                {filteredEmails.map((email, index) => (
                  <motion.div
                    key={email.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleEmailClick(email)}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedEmail?.id === email.id ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <img
                          src={email.avatar || "/placeholder.svg"}
                          alt={email.sender}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {email.verified && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-800 text-sm">{email.sender}</span>
                          <span className="text-xs text-gray-500">{email.time}</span>
                        </div>
                        <h4 className="font-medium text-gray-800 text-sm mb-1 truncate">{email.subject}</h4>
                        <p className="text-xs text-gray-600 line-clamp-2">{email.preview}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Email Detail View */}
            {selectedEmail && (
              <div className="w-96 bg-white flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">{selectedEmail.subject}</h3>
                    <button
                      onClick={() => setSelectedEmail(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={selectedEmail.avatar || "/placeholder.svg"}
                      alt={selectedEmail.sender}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-800 text-sm">{selectedEmail.sender}</div>
                      <div className="text-xs text-gray-500">{selectedEmail.time}</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                  <p className="text-gray-700 leading-relaxed text-sm">{selectedEmail.fullContent}</p>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-3 py-2 bg-teal-500 text-white rounded text-sm hover:bg-teal-600 transition-colors">
                      <Reply className="w-4 h-4" />
                      Reply
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors">
                      <RotateCcw className="w-4 h-4" />
                      Reply All
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors">
                      <Forward className="w-4 h-4" />
                      Forward
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Compose Modal */}
          <AnimatePresence>
            {composeModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
                >
                  <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-700 text-white rounded-t-lg">
                    <h3 className="font-medium">New Message</h3>
                    <button
                      onClick={() => setComposeModalOpen(false)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Email Form */}
                    <div className="p-4 space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">From</label>
                        <input
                          type="email"
                          value={emailData.from}
                          onChange={(e) => handleEmailChange("from", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">To</label>
                        <input
                          type="email"
                          value={emailData.to}
                          onChange={(e) => handleEmailChange("to", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter email address"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Cc</label>
                        <input
                          type="email"
                          value={emailData.cc}
                          onChange={(e) => handleEmailChange("cc", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Cc"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Bcc</label>
                        <input
                          type="email"
                          value={emailData.bcc}
                          onChange={(e) => handleEmailChange("bcc", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Bcc"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
                        <input
                          type="text"
                          value={emailData.subject}
                          onChange={(e) => handleEmailChange("subject", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter subject"
                        />
                      </div>
                    </div>

                    {/* Rich Text Toolbar */}
                    <div className="px-4 py-2 border-t border-gray-200">
                      <div className="flex items-center gap-1">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Bold className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Italic className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Underline className="w-4 h-4 text-gray-600" />
                        </button>
                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <AlignLeft className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <AlignCenter className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <AlignRight className="w-4 h-4 text-gray-600" />
                        </button>
                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Link className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <ImageIcon className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Smile className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Message Body */}
                    <div className="flex-1 p-4">
                      <textarea
                        value={emailData.message}
                        onChange={(e) => handleEmailChange("message", e.target.value)}
                        className="w-full h-32 resize-none border border-gray-300 rounded text-sm p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Type your message here..."
                      />
                    </div>

                    {/* Attachments */}
                    <div className="px-4 py-2 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                        <Paperclip className="w-3 h-3" />
                        <span>Attachments: 2 files</span>
                      </div>
                      <div className="flex gap-4">
                        {attachments.map((attachment, index) => (
                          <div key={index} className="text-xs">
                            <div className="text-blue-600">{attachment.name}</div>
                            <div className="text-gray-500">{attachment.size}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                      <button
                        onClick={() => setComposeModalOpen(false)}
                        className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                      >
                        Discard
                      </button>
                      <div className="flex items-center gap-2">
                        <button className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm transition-colors">
                          Save as draft
                        </button>
                        <button
                          onClick={handleSendEmail}
                          className="bg-teal-500 text-white px-6 py-2 rounded text-sm hover:bg-teal-600 transition-colors flex items-center gap-2"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default DynamicEmailInterface
