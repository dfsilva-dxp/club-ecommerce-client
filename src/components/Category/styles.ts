import styled, { css } from "styled-components";

import { ICategoryProps } from ".";

export const CategoryContent = styled.figure<Pick<ICategoryProps, "gridArea">>`
  ${({ theme, gridArea }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.elements};
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

    grid-area: ${gridArea};

    &:hover ${CategoryImage} {
      opacity: 0.5;
      scale: 1;
      filter: blur(1px);
    }

    &:hover ${CategoryBody}::before {
      opacity: 1;
      scale: 1;
    }

    &:hover ${CategoryTitle} {
      opacity: 1;
      translate: 0;
    }
  `}
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  scale: 1.15;
  filter: blur(0);
  transition:
    opacity 0.25s,
    scale 0.35s,
    filter 0.35s;
`;

export const CategoryBody = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    padding: 2.5rem;
    color: ${theme.colors.white};
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      inset: 1.25rem;
      border: 2px solid ${theme.colors.white};
      border-radius: 0.5rem;
      opacity: 0;
      scale: 1.25;
      transition:
        opacity 0.25s,
        scale 0.25s;
    }
  `}
`;

export const CategoryTitle = styled.h3`
  ${({ theme }) => css`
    letter-spacing: 1px;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    font-weight: ${theme.font.weight.bold};
    opacity: 0;
    translate: -2.5rem;
    transition:
      opacity 0.25s,
      translate 0.25s;
  `}
`;
