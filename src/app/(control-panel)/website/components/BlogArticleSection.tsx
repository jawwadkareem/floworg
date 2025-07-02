"use client"

import type React from "react"
import { Search, Calendar, Tag, Play, Facebook, Twitter, Linkedin } from "lucide-react"

const BlogArticle: React.FC = () => {
  const categories = [
    { name: "Business Courses", count: 5 },
    { name: "English Learning", count: 3 },
    { name: "Health Courses", count: 8 },
    { name: "Life Coach", count: 2 },
    { name: "Life Courses", count: 4 },
  ]

  const latestNews = [
    {
      title: "Smashing Podcast Episode Luca Mezzalira Front",
      date: "June 1, 2021",
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      title: "Live Sketching A Site Visitor Journey To Create",
      date: "June 1, 2021",
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      title: "Get Started With Ui Design With Tips To Speed",
      date: "June 1, 2021",
      image: "/placeholder.svg?height=60&width=80",
    },
  ]

  const popularTags = [
    "Art",
    "Business",
    "Coach",
    "Corporate",
    "Creative",
    "CSS",
    "Finance",
    "Health",
    "HTML",
    "Investment",
    "Planning",
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="bg-white rounded-lg p-8 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Most Powerful Thing You Have Self Coaching Scholars
              </h1>

              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>June 1, 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    <Tag className="w-3 h-3" />
                    <span>Health</span>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    <Tag className="w-3 h-3" />
                    <span>Health</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mb-8">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Woman holding yoga mat"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <span className="text-gray-600 text-lg">‹</span>
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <span className="text-gray-600 text-lg">›</span>
                </button>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Abstracting WordPress Code To Reuse With Other
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum The man, who is in a stable condition
                  inhospital, has "potentially life-changing injuries" after being shot in Neasden, north-west London.
                  Comfy Longsleeves, He was shot in the arms and legs."What sort of men would think." A reader will be
                  distracted by the readable content.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  "Every child has the right to feel safe and protected in their own home – how is this poor child going
                  to sleep tonight or in coming nights? What are the long term effects on her going to be?"
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Content without backward-compatible data.</h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  As a app web crawler expert, I help organizations adjust to the expanding significance of internet
                  promoting, placeholder text for use in your graphic, print, quality levels at each site. CleanNet's
                  proprietary software enables CleanNet Quality.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Standards and take action when necessary, from solving basic problems to incorporating remedial
                  training, quality levels at each site.
                </p>
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className="bg-white rounded-lg p-8 mb-6">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Man working at computer"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>
                <div>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Woman at desk with laptop"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">A Kentucky woman who was accused last year.</h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                The intruders chased the girl in the house and threatened her when she hid from them, according to the
                PSNI Limavady Facebook page. "She came out petrified with her Piggy Bank, HER PIGGY BANK! hoping that
                the men would take it and leave her dad alone."
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Like men who are so beguiled & demoralized our power of pleasure is to be welcomed. Denounce with righ
                teous indignation and dislike men who are so beguiled.
              </p>

              {/* Quote Block */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-8">
                <blockquote className="text-lg text-gray-800 font-medium mb-4">
                  "What sort of men would think it is acceptable to girl to this for level of brutality and violence? an
                  attack like thiop."
                </blockquote>
                <cite className="text-blue-600 font-semibold">— Neil Borton</cite>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                The intruders chased the girl in the house and threatened her when she hid from them, according to the
                PSNI Limavady Facebook page.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                "She came out petrified with her Piggy Bank, HER PIGGY BANK! hoping that the men would take it and leave
                her dad alone," one outraged officer wrote, especially in capital projects and the own suppliers and
                consultants that work for you know the value of a customer like that. As a executing livy projects for a
                large multinational.
              </p>

              {/* Tags and Share */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4 sm:mb-0">
                  <span className="text-gray-700 font-semibold">Tags:</span>
                  <div className="flex gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Business</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Corporate</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">HTML</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-semibold">Share:</span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Facebook className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <Twitter className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <span className="text-white text-xs font-bold">P</span>
                    </button>
                    <button className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      {category.name}
                    </a>
                    <span className="text-gray-500 text-sm">{category.count}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-semibold transition-colors">
                View All
              </button>
            </div>

            {/* Latest News */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Latest News</h3>
              <div className="space-y-4">
                {latestNews.map((news, index) => (
                  <div key={index} className="flex gap-3">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="w-16 h-12 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 leading-tight mb-1 line-clamp-2">
                        {news.title}
                      </h4>
                      <p className="text-xs text-gray-500">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle
