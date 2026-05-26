import BackButton from '../components/BackButton'
import { assetUrl } from '../lib/assetUrl'
import ResumeButton from '../components/ResumeButton'

export default function ProjectEmerge() {
  return (
    <>
      <div className="pt-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex-1 mb-8 md:mb-0 pl-10 pr-10">
            <img
              src={assetUrl('/images/emergehomepage.png')}
              alt="Emerge homepage"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-[#352A1C] text-5xl pb-10 pt-1 pl-10 pr-10">Emerge Virtual Tour</h1>
            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />
            <p className="text-[#352A1C] mt-4 pt-5">
              Emerge is an exciting and significant milestone for Ara’s Bachelor of ICT and Graduate
              Diploma students, as it marks the successful completion of their Work-Integrated
              Capstone Projects.
              <br />
              <br />
              This event serves not only as a celebration but also as a networking opportunity where
              students can connect with potential employers. I was fortunate enough to be tasked
              with developing a website for this event, which would serve as a platform for past and
              current students to showcase their projects and connect with industry professionals.
              The website was developed to ensure that potential employers could still engage with
              students and their work even after the event.
              <br />
              <br />
              The website features a gallery of student projects, a virtual tour of the students
              posters, and student profiles with bios. Future implementation will involve adding a
              blog section, a feedback form for employers, text replacements, and a content
              management system.
            </p>
            <div className="pt-10">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-[#352A1C] text-center text-4xl pt-20">Emerge Website Demo Video</h2>

      <div className="flex-1 md:pt-12 mb-8 md:mb-0">
        <video controls className="w-full max-w-2xl mx-auto rounded-lg shadow-lg">
          <source src={assetUrl('/videos/emerge.mov')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <BackButton />
    </>
  )
}
