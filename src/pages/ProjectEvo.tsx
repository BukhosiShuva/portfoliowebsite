import BackButton from '../components/BackButton'
import { assetUrl } from '../lib/assetUrl'
import ResumeButton from '../components/ResumeButton'

export default function ProjectEvo() {
  return (
    <>
      <div className="pt-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex-1 mb-8 md:mb-0 pl-10 pr-10">
            <img src={assetUrl('/images/evo.png')} alt="Evo platform" />
          </div>

          <div className="flex-1">
            <h1 className="text-[#352A1C] text-5xl pb-10 pt-1">Evo Data Stages</h1>
            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />
            <p className="text-[#352A1C] mt-4 pt-5">
              In the final semester of my degree at Ara Institute of Canterbury, I interned as a
              Software Engineer at Seequent. During my internship, I worked on a data management
              feature for the EVO platform—a cloud-based ecosystem used by geoscientists in
              industries such as mining and civil engineering to manage and visualize geoscience
              data collaboratively.
              <br />
              <br />
              My project focused on the EVO Data Stages feature, which allows users to classify and
              provide detailed updates on geoscience objects. The goal was to enable better workflow
              management by assigning stages like “approved” or “work in progress” to data objects. I
              successfully implemented the first phase of this feature, allowing users to assign
              hardcoded stages to their data.
              <br />
              <br />
              This functionality improves data interaction, collaboration, and clarity among users.
              Based on insights from team discussions with architects and the product owner, the
              feature is set to expand further, allowing administrators to modify stages and
              integrate triggering actions for streamlined data workflows.
            </p>
            <div className="pt-10">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-[#352A1C] text-center text-4xl pt-20">Evo Data Stages Demo Video</h2>

      <div className="flex-1 md:pt-12 mb-8 md:mb-0">
        <video controls className="w-full max-w-2xl mx-auto rounded-lg shadow-lg">
          <source src={assetUrl('/videos/FrontEndDemoV2.mov')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <BackButton />
    </>
  )
}
