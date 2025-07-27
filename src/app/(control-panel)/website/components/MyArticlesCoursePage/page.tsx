import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import CourseDashboardSection from "./course-dashboard-section"
import Footer from "../Footer"

const MyArticleCoursepage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      <CourseDashboardSection/>
      
      
      <Footer />
      </div>
    </>
  )
}

export default MyArticleCoursepage;
