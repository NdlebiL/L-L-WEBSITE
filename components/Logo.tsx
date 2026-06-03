interface LogoIconProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 40, className }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="L & L Shuttle Services logo mark"
    >
      <rect width="64" height="64" rx="10" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="1.5" strokeOpacity="0.35"/>
      <rect x="10" y="10" width="44" height="2.5" rx="1.25" fill="#C9A84C"/>
      <text
        x="32"
        y="38"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="3"
        fill="#C9A84C"
      >
        L&amp;L
      </text>
      <rect x="10" y="51.5" width="44" height="2.5" rx="1.25" fill="#C9A84C"/>
    </svg>
  )
}
