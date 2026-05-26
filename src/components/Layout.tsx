import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="container mx-auto px-4 -mt-4">
      <Navbar />
      <Outlet />
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  )
}
