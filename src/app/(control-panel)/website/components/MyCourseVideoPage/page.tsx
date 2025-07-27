import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import CourseLearningInterface from "./course-video-section"
import Footer from "../Footer"

const MyCourseVideopage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      <CourseLearningInterface/>
      
      
      <Footer />
      </div>
    </>
  )
}

export default MyCourseVideopage;
