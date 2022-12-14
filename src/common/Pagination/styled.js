import styled from "styled-components";
import { ReactComponent as VectorLeft } from "./left_arrow.svg";
import { ReactComponent as VectorRight } from "./right_arrow.svg";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 100px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightBlue};
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.blue};
  border: none;
  margin: 0 12px 0 12px;
  transition: box-shadow 0.5s;
  cursor: pointer;
  
  &:not([disabled]):hover {
    box-shadow: ${({ theme }) => theme.boxShadow.hover};
  };
  
  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: auto;
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 2px 0 2px;
    padding: 8px 4px 8px 4px;
  }
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.woodSmoke};
  margin: 0 12px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  margin: 0 12px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.darkGrey};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.mobileMedium};
  }
`;

export const PageNumber = styled.span`
  font-weight: 600;
  margin: 0 8px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 2px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileMedium};
  }
`;

export const LeftArrow = styled(VectorLeft)`
  margin: 0 8px;
`;

export const RightArrow = styled(VectorRight)`
  margin: 0 8px;
`;

export const LeftArrowMobile = styled(VectorLeft)`
  display: none;
  margin-right: 8px;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: inline;
  }
`;

export const RightArrowMobile = styled(VectorRight)`
  display: none;
  margin-left: 8px;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: inline;
  }
`;

