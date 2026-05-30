import { assetUrl } from '../lib/assetUrl'

export default function ResumeButton() {
  return (
    <a
      href={assetUrl('/BukhosiShuva_CV_2026.pdf')}
      download="BukhosiShuva_CV_2026.pdf"
    >
      <button
        type="button"
        className="text-white bg-[#94754C] hover:bg-[#352A1C] focus:outline-none focus:ring-4 focus:ring-[#94754C] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        download resume
      </button>
    </a>
  )
}
