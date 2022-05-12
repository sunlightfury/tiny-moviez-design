import React from "react";

import styled from "styled-components";

const Svg = styled.svg``;
const Path = styled.path`
  transition: all 550ms ease-out;
`;

const ArrowLeftIcon = () => {
  return (
    <Svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8 14L2 8L8 2"
        stroke="#F9F9F9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
