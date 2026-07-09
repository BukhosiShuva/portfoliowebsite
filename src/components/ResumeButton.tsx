import { assetUrl } from '../lib/assetUrl'

export default function ResumeButton() {
  return (
    <a
      href={assetUrl('/Bukhosi_Shuva-CV-with-Portfolio-2026.pdf')}
      download="Bukhosi_Shuva-CV-with-Portfolio-2026.pdf"
      className="inline-block"
    >
      <button
        type="button"
        className="text-white bg-[#94754C] hover:bg-[#352A1C] focus:outline-none focus:ring-4 focus:ring-[#94754C] font-medium rounded-full text-sm px-5 py-2.5 text-center"
      >
        Download Resume
      </button>
    </a>
  )
}
