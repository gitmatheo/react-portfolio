import React from "react";
import styled from "styled-components";

const Btn = styled.a`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 0.4rem;
    transition: all 0.2s;
    position: relative;
    font-size: ${({ theme }) => theme.defaultFontSize};


    border: 1px solid white;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem ${({ theme }) => theme.colorBlack015};

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.colorBlack015};
  }

  .btn--white {
    background-color: ${({ theme }) => theme.colorWhite};
    color: ${({ theme }) => theme.colorGreyDark};

    &::after {
      background-color: ${({ theme }) => theme.colorWhite};
    }
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  .btn--animated {
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }

  .btn--anim1 {
    background: transparent;
    color: white;
    border: 1px solid white;
    overflow: hidden;
    -webkit-transition: border-color 0.3s, color 0.3s;
    transition: all 0.3s, color 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 100%;
      background: #37474f;
      z-index: -1;
      -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
      transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transition: -webkit-transform 0.3s, opacity 0.3s,
        background-color 0.3s;
      transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
    }
    &:hover {
      color: ${({ theme }) => theme.colorWhite09};
      border-color: ${({ theme }) => theme.colorBlack015};
      &::before {
        opacity: 1;
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg);
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
    }
  }
}

.btn--anim1.btn--inverted:hover {
  color: ${({ theme }) => theme.colorPrimary};
  border-color: ${({ theme }) => theme.colorWhite09};
}

.btn--anim1.btn--inverted:hover::before {
  background-color: ${({ theme }) => theme.colorWhite};
}

.btn-text {
  &:link,
  &:visited {
    font-size: ${({ theme }) => theme.defaultFontSize};
    color: ${({ theme }) => theme.colorPrimary};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};
    padding: 3px;
    transition: all 0.2s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.colorWhite};
    box-shadow: 0 1rem 2rem ${({ theme }) => theme.colorBlack015};
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.colorBlack015};
    transform: translateY(0);
  }
}
`;

const ButtonLink = props => {
  return <Btn {...props}>{props.children}</Btn>;
};

export default ButtonLink;
