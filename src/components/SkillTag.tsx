export default function SkillTag({ label }: { label: string }) {
  return (
    <div className="bg-[#f3ede6] text-[#352A1C] font-semibold px-4 py-2 rounded-full text-sm cursor-default select-none transition-colors hover:bg-[#e6d7c1]">
      {label}
    </div>
  )
}
