import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.elements};
    padding: 1.5rem 2.5rem;
    color: ${theme.colors.light};
  `}
`;

export const HeaderTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    text-transform: uppercase;
  `}
`;

export const HeaderLinks = styled.nav`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.semibold};
  `}
`;

export const HeaderLink = styled.div``;
