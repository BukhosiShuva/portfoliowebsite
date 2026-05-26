import BackButton from '../components/BackButton'
import { assetUrl } from '../lib/assetUrl'
import ResumeButton from '../components/ResumeButton'

export default function ProjectCurl() {
  return (
    <>
      <div className="pt-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex-1 mb-8 md:mb-0 pl-10 pr-10">
            <img
              src={assetUrl('/images/curlspire.png')}
              alt="CurlSpire homepage"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-[#352A1C] text-5xl pb-10 pt-1">CurlSpire: Inspirinng Curls</h1>
            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />
            <p className="text-[#352A1C] mt-4 pt-5">
              CurlSpire was a mock website that I built for my Interactive Media Development class.
              This platform was designed to help people with curly hair—specifically textures ranging
              from 3A to 4D.
              <br />
              <br />
              The purpose of the website was and is to connect people with curly hair to local hair
              salons, barbershops, and beauty stores. CurlSpire was created not only to facilitate
              meaningful connections within the curly hair community but also to educate, inspire,
              and empower individuals to embrace and care for their natural curls with confidence.
              <br />
              <br />
              The site includes features that are still in production like stylist directories,
              product recommendations, and a blog for sharing curly hair tips, stories, and
              tutorials.
            </p>
            <div className="pt-10">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>

      <BackButton />
    </>
  )
}
