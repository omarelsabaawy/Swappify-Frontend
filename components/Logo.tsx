import React from 'react'

function Logo() {
  return (
    <div style={{display: 'flex',
                justifyContent: 'center',
            }}
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="80"
      viewBox="0 0 300 80"
      style={{
        width: '3xl', // You may need to define a specific width here based on your design requirements
        height: 'auto',
      }}
    >
      {/* Define the linear gradient */}
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#007BFF' }} />
          <stop offset="50%" style={{ stopColor: '#E91E63' }} />
        </linearGradient>
      </defs>

      {/* Apply the gradient and set font weight to bold */}
      <text x="20" y="50" fontFamily="Arial" fontSize="54px" fontWeight="bold">
        <tspan fill="url(#textGradient)">Swa</tspan>
        <tspan fill="url(#textGradient)">ppi</tspan>
        <tspan fill="url(#textGradient)">fy</tspan>
      </text>
    </svg>
  </div>
  )
}

export default Logo