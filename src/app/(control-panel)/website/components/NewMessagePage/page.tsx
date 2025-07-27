import type React from "react"
import Header from "../Header"
import EmailInterfaceDashboard from "./email-interface-dashboard"
import Navbar from "../Navbar"
import Footer from "../Footer"

const NewMessagepage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      <EmailInterfaceDashboard/>

      
      <Footer />
      </div>
    </>
  )
}

export default NewMessagepage;
