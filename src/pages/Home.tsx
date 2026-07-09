import PortfolioButton from '../components/PortfolioButton'
import LatestProjectButton from '../components/LatestProjectButton'
import ResumeButton from '../components/ResumeButton'
import { assetUrl } from '../lib/assetUrl'


const featuredPictures = [
  {
    image: assetUrl('/images/cityimage.jpg'),
    alt: 'City Image',
  },
  {
    image: assetUrl('/images/AppStoreListing.png'),
    alt: 'Dressed Up Image',
  },
  {
    image: assetUrl('/images/Prettypicture.png'),
    alt: 'Pretty Picture',
  },
]

export default function Home() {
  return (
    <div className="pt-10 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full space-y-10 md:space-y-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 text-center md:text-left">
          <div className="w-full md:flex-1 md:max-w-md">
            <img
              src={assetUrl('/images/feelthefeardoitanyway.jpg')}
              alt="Feel the fear and do it anyway"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:flex-1">
            <h1 className="text-[#352A1C] text-4xl sm:text-5xl pb-8 md:pb-10 pt-1">
              Coding with Elegance
            </h1>

            <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full m-0" />

            <p className="text-[#352A1C] mt-4 pt-5 text-base sm:text-lg">
              Welcome to my portfolio website, where I showcase my work and passion for software
              development and design.
              <br />
              <br />
              I believe that coding is not just a technical skill, but an art form that allows us to
              create beautiful and functional solutions to real-world problems.
              
              <br />
              <br />

              I also believe that challenges must be embraced, with the understanding that every obstacle
              presents an opportunity for growth, learning, and innovation. 
              
              <br />
              <br />
              <span className="italic">
                I am not afraid to take risks and try new things, as they are essential for progress and true innovation.
              </span>
              <br />
              <br />
              <span className="italic">
                My goal is to combine my technical expertise with my creative vision to deliver exceptional results that exceed expectations and change people's lives and make an impact.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-8 md:pt-10">
              <ResumeButton />
              <PortfolioButton />
              <LatestProjectButton />
            </div>
          </div>
        </div>

        <section className="w-full">
          <hr className="shadow-[0_0_8px_1px_#9C7B50] border-none w-full mb-6 md:mb-8" />

          <div className="flex gap-4 sm:gap-6 overflow-x-auto scroll-px-4 sm:scroll-px-0 pb-2 snap-x snap-mandatory scroll-smooth scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
            {featuredPictures.map((picture) => (
              <figure
                key={picture.alt}
                className="snap-center shrink-0 w-[min(90vw,18rem)] sm:w-72 md:w-80 lg:w-full lg:shrink rounded-lg overflow-hidden shadow-lg ring-1 ring-[#9C7B50]/30 transition-transform duration-300 lg:hover:scale-[1.02]"
              >
                <img
                  src={picture.image}
                  alt={picture.alt}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
