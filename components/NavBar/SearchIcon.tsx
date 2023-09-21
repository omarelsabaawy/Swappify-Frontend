import React, { FC } from 'react';

interface SearchIconProps {
  size?: number;
  fill?: string;
  width?: number;
  height?: number;
}

const SearchIcon: FC<SearchIconProps> = ({ size, fill, width = 24, height = 24, ...props }) => {
  return (
    <svg fill="none" height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
      <path
        d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};

export default SearchIcon;
