import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LINKEDIN_URL, NAV_LINK_CLASS } from '../constants'
import { assetUrl } from '../lib/assetUrl'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#EDEADF]">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/home" className="flex items-center space-x-3">
          <img
            src={assetUrl('/images/smallerlogo-removebg.png')}
            alt="BS logo"
            className="h-25 w-auto"
          />
        </Link>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#9C7B50] rounded-lg md:hidden hover:bg-[#d6d4cc] focus:outline-none focus:ring-2 focus:ring-[#9C7B50]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {!menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>

        <div
          className={`${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:items-center md:space-x-8`}
        >
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 text-base font-medium">
            <li>
              <NavLink to="/about" className={NAV_LINK_CLASS} onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={NAV_LINK_CLASS}
                onClick={() => setMenuOpen(false)}
              >
                My Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={NAV_LINK_CLASS}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
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
      </div>
    </nav>
  )
}
