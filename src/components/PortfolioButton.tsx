import { NavLink } from 'react-router-dom'

export default function PortfolioButton() {
  return (
    <NavLink
        to="/portfolio"
        onClick={() => window.location.href = '/portfolio'}
        className="inline-block"
    >
      <button
        type="button"
        className="text-white bg-[#94754C] hover:bg-[#352A1C] focus:outline-none focus:ring-4 focus:ring-[#94754C] font-medium rounded-full text-sm px-5 py-2.5 text-center"
      >
        My Portfolio
      </button>
    </NavLink>
  )
}   
