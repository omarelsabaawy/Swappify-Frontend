import React from 'react'

function TopLogo() {
  return (
    <div style={{display: 'flex',
                justifyContent: 'center',
            }}
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="45"
      viewBox="0 0 290 80"
      style={{
        width: '3xl', // You may need to define a specific width here based on your design requirements
        height: 'auto',
      }}
    >
      {/* Define the linear gradient */}
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#fff' }} />
          <stop offset="50%" style={{ stopColor: '#fff' }} />
        </linearGradient>
      </defs>

      {/* Apply the gradient and set font weight to bold */}
      <text x="20" y="50" fontFamily="Arial" fontSize="54px" fontWeight="bold">
        <tspan fill="url(#textGradient)">Swappify</tspan>
      </text>
    </svg>
  </div>
  )
}

export default TopLogo