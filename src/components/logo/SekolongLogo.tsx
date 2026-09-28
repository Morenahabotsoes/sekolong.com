const SekolongMark = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 420 320"
    className={className}
    role="img"
    aria-label="Sekolong logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sek-mark-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#1cc8ff" />
        <stop offset="35%" stopColor="#0bb3ec" />
        <stop offset="65%" stopColor="#0a78f1" />
        <stop offset="100%" stopColor="#0b1f8f" />
      </linearGradient>
      <linearGradient id="sek-mark-shadow" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" stopColor="#0b2a9f" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#0b2a9f" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M68 235C120 165 166 128 233 111C291 96 343 105 374 140C396 165 404 193 404 222C404 266 362 288 318 288C165 272 115 264 78 252C57 245 55 243 68 235Z"
      fill="url(#sek-mark-gradient)"
    />

    <path
      d="M116 230C162 181 209 154 269 140C302 131 337 132 363 147C376 155 381 167 379 179C370 161 344 141 309 130C273 118 231 118 197 131C170 142 144 162 124 186C109 204 104 216 116 230Z"
      fill="url(#sek-mark-shadow)"
      opacity="0.85"
    />

    <circle cx="330" cy="75" r="62" fill="#43d5ff" />
    <circle cx="330" cy="75" r="38" fill="#0bb0e7" opacity="0.5" />
  </svg>
)

export function SekolongLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SekolongMark className="h-14 w-20 shrink-0 md:h-16 md:w-24" />
      <div className="leading-none text-[#0e2f9a]">
        <div className="text-[2rem] font-black tracking-[-0.08em] md:text-[3rem]">SEKOLONG</div>
        <div className="-mt-1 text-[0.85rem] font-black tracking-[-0.05em] md:text-[1.35rem]">.com</div>
      </div>
    </div>
  )
}

export default SekolongLogo
