import BackButton from '../components/BackButton'
import ResumeButton from '../components/ResumeButton'
import {
  BUTTON_CLASS,
  THE_GATHERING_APP_STORE_URL,
  THE_GATHERING_GOOGLE_PLAY_URL,
  THE_GATHERING_WEBSITE_URL,
} from '../constants'

import { assetUrl } from '../lib/assetUrl'

export default function LatestProject() {
  return (
    <>
      <div className="pt-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8 text-center md:text-left">
          <div className="flex-1 mb-8 md:mb-0 pb-10">
            <img
              src={assetUrl('/images/TheGatheringiPad.png')}
              alt="The Gathering 2026 Application"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-[#352A1C] text-5xl pb-5 pt-1">The Gathering 2026 App</h1>
            <h2 className="text-[#352A1C] text-2xl pt-1">Role: Software Developer</h2>
            <h3 className="text-[#352A1C] text-2xl pt-1">Organisation: Arise Church</h3>
            <p className="text-[#352A1C] pb-5 pt-1">Technologies: React, Ruby on Rails, Tailwind, Firebase, JavaScript, HTML5, CSS3, Capacitor, Android Studio, Google Play Console, Git, GitLab </p>
            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />
            <p className="text-[#352A1C] mt-4 pt-5">
                I developed the official mobile application for The Gathering 2026, 
                a nationwide conference that brings together attendees from across 
                New Zealand for a multi-day event featuring keynote speakers, worship sessions, 
                children's programmes, and community activities.
                <br />
                <br />

                The Gathering app was developed to provide attendees with a simple, centralised way 
                to access event information during the conference. With a busy programme spread across 
                multiple days, the app was designed to reduce confusion by giving users quick access to 
                schedules, speaker information, venue details, and practical event resources.

            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center md:items-start gap-4 pt-10">
              <a
                href={THE_GATHERING_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button type="button" className={BUTTON_CLASS}>
                  Visit Website
                </button>
              </a>

              <a
                href={THE_GATHERING_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button type="button" className={BUTTON_CLASS}>
                  App Store
                </button>
              </a>

              <a
                href={THE_GATHERING_GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button type="button" className={BUTTON_CLASS}>
                  Google Play
                </button>
              </a>
            </div>

          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8 text-center md:text-left">
          <div className="flex-1 mb-8 md:mb-0">
            <img
              src={assetUrl('/images/TheGathering2026.png')}
              alt="The Gathering 2026 Application"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 pt-10">
            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />
            <h4 className="text-[#352A1C] text-3xl pb-5 pt-5">My Contribution</h4>

            <ul className="text-[#352A1C] mt-4 pt-5">
                <li> -  Built the mobile application using React.</li>
                <li> -  Learned and implemented Capacitor to package the React application as a native Android app.</li>
                <li> -  Configured and tested Android builds using Android Studio.</li>
                <li> -  Prepared the application for deployment through the Google Play Store.</li>
                <li> -  Developed a clean, easy-to-navigate interface focused on helping attendees quickly find the information they needed.</li>
            </ul>
            <p className="text-[#352A1C] mt-4 pt-5">

            </p>

          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8 text-center md:text-left">

          <div className="flex-1 mb-8 md:mb-0 pb-10">
            <img
              src={assetUrl('/images/AppStoreListing.png')}
              alt="The Gathering 2026 Application"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 pt-8 md:pt-10">
            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />
            <h4 className="text-[#352A1C] text-3xl pb-5 pt-5">What I Learned</h4>

            <p className="text-[#352A1C]">
              This project challenged me to step outside my comfort zone and accelerated my growth
              as a software developer.
            </p>

            <ul className="text-[#352A1C] mt-4 pt-5">
              <li>
                - Patience and perseverance: Learning new technologies can be challenging at first,
                but I discovered that consistent practice and problem-solving make complex tasks
                become much more manageable over time.
              </li>
              <li>
                - Learning new technologies: I gained hands-on experience with React for mobile
                development, Capacitor, Android Studio, and the Android app deployment process.
              </li>
              <li>
                - Problem-solving: I developed confidence in researching unfamiliar concepts,
                experimenting with solutions, and debugging issues independently.
              </li>
              <li>
                - Clear communication: I learned how to communicate technical findings effectively
                by being concise, focusing on the key issue, and presenting solutions clearly to
                teammates and stakeholders.
              </li>
              <li>
                - Continuous improvement: This project reinforced the importance of embracing new
                challenges, knowing that every difficult task becomes easier with experience and
                repetition.
              </li>
            </ul>

            <div className="pt-6">
              <ResumeButton />
            </div>
          </div>


        </div>

      </div>

      <BackButton />
    </>
  )
}
