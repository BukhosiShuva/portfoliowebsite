import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <div className="w-full flex justify-end pr-10 pt-10">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-white bg-[#9C7B50] hover:bg-[#b08a5c] px-4 py-2 rounded-lg shadow-md"
      >
        ← Back
      </button>
    </div>
  )
}
