import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import ComprehensiveDashboard from "./comprehensive-dashboard"
import Footer from "../Footer"

const Dashboardpage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      <ComprehensiveDashboard/>
      
      
      <Footer />
      </div>
    </>
  )
}

export default Dashboardpage;
