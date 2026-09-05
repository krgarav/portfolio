export default function Footer() {
    const d =new Date();
    let year = d.getFullYear();
  return (
    <div className="bg-[var(--ink)] p-6 text-center text-xs text-slate-400">
    <span >Copyright @ krgarav {year}</span>
    </div>

    
  )
}
