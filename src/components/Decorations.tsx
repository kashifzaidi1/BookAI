// Reusable decorative SVG elements inspired by Chattri's playful style

export function LeafSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 26C6 26 8 14 18 8C28 2 28 2 28 2C28 2 26 14 16 20C6 26 6 26 6 26Z" fill="#C8E6C9" stroke="#81C784" strokeWidth="1" />
      <path d="M6 26C10 18 16 14 28 2" stroke="#81C784" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function StarSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.5 9.5L21 8L15 12L21 16L13.5 14.5L12 22L10.5 14.5L3 16L9 12L3 8L10.5 9.5L12 2Z" fill="#FFD54F" />
    </svg>
  );
}

export function SparkSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="3" fill="#2D7A4F" opacity="0.3" />
      <circle cx="8" cy="8" r="1.5" fill="#2D7A4F" opacity="0.6" />
    </svg>
  );
}

export function CursorSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 3L7 21L12 16L18 23L21 21L15 14L22 14L7 3Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4V16M4 10H16" stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none">
      {[0, 20, 40, 60].map((x) =>
        [0, 20, 40, 60].map((y) => (
          <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="1.5" fill="#D0D0CC" />
        ))
      )}
    </svg>
  );
}
