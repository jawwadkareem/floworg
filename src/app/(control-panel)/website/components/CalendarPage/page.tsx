import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import DashboardCalendarSection from "./dashboard-calendar-section"
import Footer from "../Footer"

const Calendarpage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      <DashboardCalendarSection/>
      
      
      <Footer />
      </div>
    </>
  )
}

export default Calendarpage;
