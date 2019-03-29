import React from "react";
import styled from "styled-components";
import ProjectsContext from "../projects/ProjectsContext";

const NaviItem = styled.li`
  margin: 1rem;
  a {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: ${({ theme }) => theme.colorWhite};
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        ${({ theme }) => theme.colorWhite} 50%,
        ${({ theme }) => theme.colorWhite} 100%
      );
      background-size: 230%;
      transition: all 0.4s;
      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }
    &:hover,
    &:active {
      background-position: 100%;
      color: ${({ theme }) => theme.colorPrimary};
      transform: translateX(1rem);
    }
  }
`;

const NavItem = ({ href, ariaLabel, text, toggleNav }) => {
  return (
    <ProjectsContext.Consumer>
      {({ language }) => (
        <NaviItem>
          <a href={href} aria-label={ariaLabel} onClick={toggleNav}>
            {language === "pl" ? text.pl : text.en}
          </a>
        </NaviItem>
      )}
    </ProjectsContext.Consumer>
  );
};

export default NavItem;
