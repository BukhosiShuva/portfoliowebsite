import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assetUrl } from '../lib/assetUrl'

export default function Landing() {
  const navigate = useNavigate()
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000)
    const navigateTimer = setTimeout(() => navigate('/home'), 6000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(navigateTimer)
    }
  }, [navigate])

  return (
    <div className="bg-[#EDEADF] min-h-screen flex items-center justify-center">
      <div
        className={`transition-opacity duration-[3000ms] ease-in-out w-full ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="pt-10 px-4 md:px-20">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={assetUrl('/images/landingpagegif.gif')}
                alt="Landing page gif"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-[#9C7B50] text-3xl md:text-4xl font-normal pb-6 pt-2">
                Bukhosi Shuva: Software Developer
              </h2>

              <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full my-2" />

              <h2 className="text-[#9C7B50] text-2xl md:text-4xl font-normal mt-4 pt-4 pb-5">
                Coding with Elegance. <br className="block md:hidden" />
                <span className="italic">Where software becomes Art.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
