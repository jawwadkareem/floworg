"use client"

import type React from "react"
import { motion } from 'framer-motion';


const BlogArticleHeader: React.FC = () => {
  return (
    <header className="bg-linear-to-r from-teal-800 to-teal-600 py-6">
      {/* <div className="container mx-auto px-4">
        <h1 className="text-white text-2xl font-bold text-center">
          Floworg Blog
        </h1>
      </div> */}
      <div className="py-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Floworg Blog
          </h1>
        </motion.div>
      </div>
    </header>
  )
}

export default BlogArticleHeader
