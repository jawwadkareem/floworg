import type React from "react"
import Header from "../Header"

import MyCoursesDashboard from "./my-course-dashboard"
import Navbar from "../Navbar"
import Footer from "../Footer"

const MyCoursepage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      <MyCoursesDashboard/>

      
      <Footer />
      </div>
    </>
  )
}

export default MyCoursepage;
