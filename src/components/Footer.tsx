import { Link } from 'react-router-dom'
import { LINKEDIN_URL } from '../constants'
import { assetUrl } from '../lib/assetUrl'

export default function Footer() {
  return (
    <footer className="bg-[#EDEADF] rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/home" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img
              src={assetUrl('/images/smallerlogo-removebg.png')}
              alt="BS logo"
              className="h-25 w-auto"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#876A45] sm:mb-0">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:underline me-4 md:me-6">
                My Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="block py-2 px-3"
              >
                <img
                  src={assetUrl('/images/linkedinlogo.png')}
                  alt="LinkedIn"
                  className="h-8 w-auto hover:opacity-100 transition duration-300"
                />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#94754C] sm:mx-auto lg:my-8" />
        <span className="block text-sm text-[#876A45] sm:text-center">
          © 2025{' '}
          <Link to="/about" className="hover:underline">
            Bukhosi Shuva™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
