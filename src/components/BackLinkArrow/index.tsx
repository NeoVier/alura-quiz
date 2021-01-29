import Link from "next/link";
import React from "react";
import styled from "styled-components";

type Props = {
  href: string;
};

const StyledLink = styled(Link)`
  transition: 0.3s;
  width: 24px;
  height: 24px;
  display: inline-block;

  &:hover {
    opacity: 0.5;
  }
`;

const SVG = styled.svg`
  vertical-align: middle;
  fill: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
`;

const BackLinkArrow = ({ href }: Props) => (
  <StyledLink href={href}>
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
        fillOpacity="0.87"
      />
    </SVG>
  </StyledLink>
);

export default BackLinkArrow;
