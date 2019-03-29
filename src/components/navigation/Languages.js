import React from "react";
import styled from "styled-components";
import ProjectsContext from "../projects/ProjectsContext";

const Lang = styled.nav`
  .languages__list {
    height: 7rem;
    width: 10rem;
    position: fixed;
    top: 4rem;
    right: 15rem;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    @media only screen and (max-width: 56.25rem) {
      top: 4rem;
      right: 14rem;
    }

    @media only screen and (max-width: 37.5rem) {
      top: 3rem;
      right: 12rem;
    }
  }

  .languages__item {
    color: rgba(white, 0.7);
    z-index: 8000;
    cursor: pointer;
    p {
      font-size: 3rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.4s;
      &:hover {
        color: white;
      }
    }
    &--active {
      font-weight: 900;
      color: white;
    }
  }
`;

const Languages = props => {
  return (
    <Lang className="languages">
      <ProjectsContext.Consumer>
        {({ state, setLanguage }) => (
          <ul className="languages__list">
            <li
              onClick={() => setLanguage("pl")}
              className={`languages__item ${
                state.language === "pl" ? "languages__item--active" : null
              }`}
            >
              <p>PL</p>
            </li>
            <li
              onClick={() => setLanguage("en")}
              className={`languages__item ${
                state.language === "en" ? "languages__item--active" : null
              }`}
            >
              <p>EN</p>
            </li>
          </ul>
        )}
      </ProjectsContext.Consumer>
    </Lang>
  );
};

export default Languages;
