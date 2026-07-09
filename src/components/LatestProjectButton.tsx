import { Link } from 'react-router-dom'

export default function LatestProjectButton() {
  return (

    <Link to="/latest-project">
        <button
        type="button"
        className="text-white bg-[#94754C] hover:bg-[#352A1C] focus:outline-none focus:ring-4 focus:ring-[#94754C] font-medium rounded-full text-sm px-5 py-2.5 text-center"
      >
        Latest Project
      </button>
    </Link>
      
  )
}
