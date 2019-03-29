import React from "react";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  .card-top__fig {
    position: relative;
    overflow: hidden;
    .card-top__figcap::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      content: "";
      -webkit-transition: -webkit-transform 0.6s;
      transition: transform 0.6s;
      -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
        translate3d(0, -100%, 0);
      transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -100%, 0);
    }
    ul {
      list-style: none;
      position: absolute;
      right: 1.5em;
      bottom: 1.5em;
      padding: 0 1em;
      border-right: 4px solid #fff;
      font-size: ${({ theme }) => theme.defaultFontSize};
      text-align: right;
      opacity: 0;
      -webkit-transition: opacity 0.35s;
      transition: opacity 0.35s;
    }
    &:hover {
      ul {
        opacity: 1;
        -webkit-transition-delay: 0.1s;
        transition-delay: 0.1s;
      }
      .card-top__img {
        opacity: 0.1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      .card-top__figcap {
        &::before {
          -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, 100%, 0);
          transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 100%, 0);
        }
      }
      .card-top__heading {
        color: white;
        background: transparent;
      }
    }
  }
  .card-top__img {
    position: relative;
    padding: 1em;
    display: block;
    min-height: 100%;
    max-width: 100%;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale3d(1.05, 1.05, 1);
    transform: scale3d(1.05, 1.05, 1);
    padding: ${({ theme }) => theme.paddingSm};
  }

  .card-top__figcap {
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizeSmall};
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    &::before,
    &::after {
      pointer-events: none;
    }
  }
  .card-top__figcap,
  .card-top__figcap > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .card-top__figcap > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }
  .card-top__heading {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.2em 0.8em;
    margin: 1em;
    background: ${({ theme }) => theme.colorWhite09};
    color: ${({ theme }) => theme.colorPrimaryDark};
    font-size: ${({ theme }) => theme.defaultFontSize};
    transition: all 0.2s;
  }
`;

const ProjectCard = ({ title, img, stack }) => {
  return (
    <StyledProjectCard className="card-top">
      <figure className="project__img  card-top__fig">
        <img className="card-top__img" src={img} alt="Mockup project 1" />
        <figcaption className="card-top__figcap">
          <h2 className="card-top__heading">
            <span>{title}</span>
          </h2>
          <ul>
            {stack.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </StyledProjectCard>
  );
};

export default ProjectCard;
