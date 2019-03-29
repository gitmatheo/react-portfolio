import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${props => props.theme.colorWhite};
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem;
  }
`;

const Main = styled.span`
  font-size: 6rem;
  font-weight: 200;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  margin-left: -0.5rem;
  display: block;

  @media only screen and (max-width: 37.5em) {
    font-family: 5rem;
  }
  .strong {
    font-weight: 900;
  }
`;

const Sub = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  animation: moveInRight 1s ease-out;
  @media only screen and (max-width: 37.5em) {
  }
`;

const HeadingPrimary = () => {
  return (
    <H1>
      <Main>
        Mateusz <span className="strong">Dominiak</span>
      </Main>
      <span id="typed-pl" className="typed" />
      <Sub>Front-End Developer</Sub>
    </H1>
  );
};

export default HeadingPrimary;
