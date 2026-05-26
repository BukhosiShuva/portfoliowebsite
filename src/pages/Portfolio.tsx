import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { assetUrl } from '../lib/assetUrl'

const projects = [
  {
    slug: '/portfolioprojectEvo',
    image: assetUrl('/images/evopt2.png'),
    title: 'Evo Data Stages - 2024',
    description:
      'In the last semester of my degree at Ara Institute of Canterbury, I had the opportunity to work on a Software engineering Intern at Seequent. During my internship I was tasked to create a data management feature for the Evo platform, which is a data management h....',
  },
  {
    slug: '/portfolioprojectEmerge',
    image: assetUrl('/images/emerge.png'),
    title: 'Emerge Virtual Tour - 2024',
    description:
      'Emerge is an exciting and significant milestone for Ara’s Bachelor of ICT and Graduate Diploma students, as it marks the successful completion of their Work-Integrated Capstone Projects. This event serves not only as a celebration....',
  },
  {
    slug: '/portfolioprojectCurl',
    image: assetUrl('/images/curlspirev2.png'),
    title: 'Curl Spire - 2023',
    description:
      'CurlSpire was a mock website that I built for my Interactive Media Development class. This platform was designed to help people with curly hair—specifically textures ranging from 3A to 4D. The purpose of the website is to connect....',
  },
]

function ReadMoreIcon() {
  return (
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  )
}

export default function Portfolio() {
  return (
    <>
      <div className="pt-10 py-12 px-4">
        <h1 className="text-[#352A1C] text-5xl pb-5 pt-1 whitespace-nowrap sm:pl-20 lg:pl-20">
          My Portfolio
        </h1>

        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-left md:text-left">
          <p className="text-[#352A1C] mt-4">
            Welcome to my personal portfolio — a curated space showcasing some of the projects I've
            worked on. I'm deeply passionate about software development, design, aesthetics, and the
            overall experience of using software. To me, coding is not just a technical skill — it's
            an art form that blends creativity and functionality to solve real-world problems in
            meaningful ways.
            <br />
            <br />
            These projects reflect not only my skills and creativity, but also my dedication to
            users. Every decision I make is rooted in empathy — I strive to build software that feels
            intuitive, thoughtful, and truly serves the people who use it.
          </p>
        </div>
      </div>

      <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-1/2 mx-auto" />

      <div className="pt-10 sm:pl-0 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left flex-wrap gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <Link to={project.slug}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </Link>
            <div className="p-5">
              <Link to={project.slug}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#352A1C]">
                  {project.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700">{project.description}</p>
              <Link
                to={project.slug}
                className="inline-flex items-center text-sm font-medium text-center text-white bg-[#94754C] hover:bg-[#352A1C] focus:outline-none focus:ring-4 focus:ring-[#94754C] rounded-full px-5 py-2.5 me-2 mb-2"
              >
                Read more
                <ReadMoreIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <BackButton />
    </>
  )
}
