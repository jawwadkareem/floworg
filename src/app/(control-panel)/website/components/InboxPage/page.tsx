import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import DashboardInterfaceSection from "./dashboard-interface-section"
import Footer from "../Footer"

const Inboxpage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      <DashboardInterfaceSection/>
      
      
      <Footer />
      </div>
    </>
  )
}

export default Inboxpage;
