import BackButton from '../components/BackButton'
import ResumeButton from '../components/ResumeButton'
import { assetUrl } from '../lib/assetUrl'

export default function Contact() {
  return (
    <>
      <div className="pt-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8 text-center md:text-left">
          <div className="flex-1 mb-8 md:mb-0">
            <img
              src={assetUrl('/images/contactus.jpg')}
              alt="Contact us"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-[#352A1C] text-5xl pb-10 pt-1">Let's talk</h1>
            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />
            <p className="text-[#352A1C] mt-4 pt-5">
              If you like what you see and want to connect, I would love to hear from you!
              <br />
              <br />
              Whether you're interested in collaborating on a project, discussing potential job
              opportunities, or simply want to share your thoughts, I'm all ears.
              <br />
              <br />
              Feel free to reach out to me via email or phone, and let's start a conversation that
              could lead to something amazing!
              <br />
              <br />
              <span className="font-bold">
                <i className="fas fa-phone" /> 0484 964 361
              </span>
              <br />
              <span className="font-bold">bukhosishuva@gmail.com</span>
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

      <BackButton />
    </>
  )
}
