import BackButton from '../components/BackButton'
import ResumeButton from '../components/ResumeButton'
import SkillTag from '../components/SkillTag'
import { assetUrl } from '../lib/assetUrl'

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem-Solving',
  'Adaptability',
  'Time Management',
  'Critical Thinking',
  'Creativity',
  'Leadership',
  'Attention to Detail',
  'Empathy',
]

const qualifications = [
  {
    image: assetUrl('/images/tertiaryimage.jpg'),
    alt: 'Ara Institute',
    title: 'Bachelor of ICT',
    lines: [
      'Specialising in Software Development',
      'Ara Institute of Canterbury | Christchurch, NZ',
      'July 2022 – December 2024',
    ],
    reverse: false,
  },
  {
    image: assetUrl('/images/vintagecomputer.jpg'),
    alt: 'Diploma',
    title: 'Diploma in IT Technical Support (Level 5)',
    lines: [
      'Ara Institute of Canterbury | Christchurch, NZ',
      'July 2021 – July 2022',
    ],
    reverse: true,
  },
  {
    image: assetUrl('/images/image.jpg'),
    alt: 'High School',
    title: 'NCEA Levels 1, 2 & 3',
    lines: ['Hillmorton High School | Christchurch, NZ'],
    list: [
      'Level 1 (2018): Attained Literacy & Numeracy',
      'Level 2 (2019): University Literacy Entrance',
      'Level 3 (2020): University Entrance',
    ],
    reverse: false,
  },
]

const skillSections: { title: string; skills: string[] }[] = [
  {
    title: 'Languages & Frameworks',
    skills: [
      'Python',
      'WordPress',
      'JavaScript',
      'PHP',
      'HTML & CSS',
      'Ruby on Rails',
      'Postman API',
      'Django',
      'WooCommerse',
      'Rest APIs',
      'Docker',
      'Linux',
      'Windows',
      'React',
      'Tailwind CSS',
      'Bootstrap',
      'Jira',
      'Kubernetes',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Git',
      'GitHub',
      'GitLab'
    ],
  },
  {
    title: 'Frontend & UI',
    skills: ['React', 'Bootstrap', 'Tailwind Flowbite CSS', 'Figma', 'Material-UI', 'Lapentor'],
  },
  {
    title: 'Dev Methods & Tools',
    skills: ['Agile/Scrum', 'SDLC', 'Scrumban', 'Design Thinking', 'DevOps'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Version Control',
    skills: ['GitHub', 'CI/CD', 'GitLab', 'Git', 'Jira', 'Kubernetes'],
  },
]

export default function About() {
  return (
    <>
      <div className="pt-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8 text-center md:text-left">
          <div className="flex-1 mb-8 md:mb-0">
            <img
              src={assetUrl('/images/Prettypicture.png')}
              alt="Professional"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-[#352A1C] text-5xl pb-10 pt-1 whitespace-nowrap">About Me</h1>
            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />
            <p className="text-[#352A1C] mt-4 pt-5">
              Hi, I’m Bukhosi Shuva — a Software Developer at Arise Church and a recent ICT graduate
              from Ara Institute of Canterbury. I’m passionate about creating digital experiences
              that combine functionality with beauty. I believe great software should feel
              user-friendly, look good, feel good to use, and solve real-world problems with
              elegance.
              <br />
              <br />
              At Arise Church, I contribute to real-world development projects that support internal
              systems and community engagement, while continuing to build my skills in full-stack
              development, API integration, and UI design. I also gained industry experience through
              my internship at Seequent, where I helped deliver key features for the Evo platform
              using Python, React, and MongoDB.
              <br />
              <br />
              Now, I’m actively seeking a Software Development/ Engineering role where I can expand
              my skills, grow professionally, and bring value to innovative teams. My motto?
              “Feel the fear and do it anyway.”
              <br />
              <br />
              I’m excited to connect with like-minded individuals and explore opportunities that
              allow me to make a positive impact through technology.
              <br />
              <br />
              <span className="italic">
                Join me on this journey of coding with elegance, where every line of code is a
                brushstroke on the canvas of technology.
              </span>
            </p>
            <div className="pt-10">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 lg:pl-20 sm:pl-0">
        <div className="max-w-7xl w-full pt-10 flex flex-col items-center justify-center gap-10 py-12 px-4">
          <h2 className="text-[#352A1C] text-5xl font-semibold text-center">
            Education & Qualifications
          </h2>

          {qualifications.map((q) => (
            <div
              key={q.title}
              className={`flex flex-col ${
                q.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center bg-[#F8F6F2] shadow-lg rounded-lg overflow-hidden w-full max-w-screen-md`}
            >
              <div className="md:w-1/2">
                <img src={q.image} alt={q.alt} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-bold text-[#352A1C] mb-2">{q.title}</h3>
                {q.lines.map((line) => (
                  <p key={line} className="text-[#352A1C] text-base">
                    {line}
                  </p>
                ))}
                {q.list && (
                  <ul className="list-disc list-inside text-[#352A1C] text-base mt-2 space-y-1">
                    {q.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-10 py-12 px-4">
        <h1 className="text-[#352A1C] text-5xl pb-10 pt-1 whitespace-nowrap sm:pl-20 lg:pr-28 lg:pt-20 text-center">
          Experiences
        </h1>
        <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />

        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8 text-center md:text-left">
          
          <div className="flex-1">
            <div className="text-[#352A1C] mt-4 pt-5">
              <h2 className="text-2xl font-bold text-[#352A1C]">Arise Church - Software Developer</h2>
              <h3 className="text-[#352A1C] font-bold mb-2 italic">
                85 Picton Avenue, Riccarton, Christchurch, NZ
              </h3>
              <h3 className="text-[#352A1C] font-bold mb-2 italic">
                14 March 2025 to Present (Part Time)
              </h3>
              <ul className="list-none space-y-1">
                <li>Developing and maintaining internal databases and app ecosystems.</li>
                <li>Contributing to website development and maintenance.</li>
                <li>
                  Participating in development processes from requirement collection to delivery.
                </li>
                <li>Maintaining developed apps for security and functionality.</li>
                <li>Debugging and troubleshooting code issues.</li>
                <li>Attended regular team meetings to discuss progress and challenges.</li>
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="text-[#352A1C] mt-4 pt-5">
              <h2 className="text-2xl font-bold text-[#352A1C]">
                Seequent - Software Engineering Intern
              </h2>
              <h3 className="text-[#352A1C] font-bold mb-2 italic">
                20 Moorhouse Avenue, Addington, Christchurch 8011
              </h3>
              <h3 className="text-[#352A1C] font-bold mb-2 italic">
                19 August 2024 to 28 October 2024
              </h3>
              <ul className="list-none space-y-1">
                <li>Collaborated with supervisor, mentor, and team to develop a stages feature.</li>
                <li>Brainstormed and explored solutions for implementing the feature.</li>
                <li>Planned and designed both backend and frontend requirements.</li>
                <li>Developed and wrote backend and frontend code.</li>
                <li>Debugged and troubleshot code issues.</li>
                <li>Attended regular team meetings to discuss progress and challenges.</li>
              </ul>
            </div>
            </div>      
          </div>
        </div>

      <div className="max-w-7xl w-full px-4 pt-10 flex flex-col items-center justify-center gap-10 py-12 lg:pl-40">
        <h2 className="text-[#352A1C] text-5xl font-semibold text-center">My Skill Stack</h2>

        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white shadow-md p-8 rounded-2xl border border-[#d1bfa8] flex flex-col gap-6 max-w-lg mx-auto">
            <h3 className="text-[#352A1C] text-3xl font-semibold text-center tracking-wide">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white shadow-md p-8 rounded-2xl border border-[#d1bfa8] flex flex-col gap-6 max-w-lg mx-auto">
            <h3 className="text-[#352A1C] text-3xl font-semibold text-center tracking-wide">
              Technical Skills
            </h3>
            {skillSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-[#352A1C] mb-3 mt-6 text-center">
                  {section.title}
                </h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {section.skills.map((skill) => (
                    <SkillTag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BackButton />
    </>
  )
}
