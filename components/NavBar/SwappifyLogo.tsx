export const SwappifyLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="80" viewBox="0 0 150 80">
    {/* Define the linear gradient */}
    <defs>
      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#007BFF' }} />
        <stop offset="50%" style={{ stopColor: '#E91E63' }} />
      </linearGradient>
    </defs>

    {/* Apply the gradient and set font weight to bold */}
    <text x="20" y="50" fontFamily="Arial" fontSize="28" fontWeight="bold">
      <tspan fill="url(#textGradient)">Swa</tspan>
      <tspan fill="url(#textGradient)">ppi</tspan>
      <tspan fill="url(#textGradient)">fy</tspan>
    </text>
  </svg>
);
