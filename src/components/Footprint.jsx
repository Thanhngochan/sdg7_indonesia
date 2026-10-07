// Decorative footprint, echoing the infographic.
export default function Footprint({ className = "", flip = false }) {
  return (
    <svg className={className} viewBox="0 0 120 220" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <g fill="currentColor">
        <ellipse cx="28" cy="26" rx="15" ry="19" />
        <ellipse cx="57" cy="16" rx="10" ry="13" />
        <ellipse cx="78" cy="22" rx="9" ry="11" />
        <ellipse cx="95" cy="34" rx="8" ry="10" />
        <ellipse cx="107" cy="50" rx="7" ry="9" />
        <path d="M14 78c0-22 20-32 44-30 28 2 50 14 50 40 0 20-16 30-22 48-5 15 2 36-6 56-6 15-22 22-36 18-16-5-22-22-20-40 2-22 4-34-2-52-4-13-8-26-8-40z" />
      </g>
    </svg>
  );
}
