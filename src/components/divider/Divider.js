import React, { Component } from "react";
import styled from "styled-components";
import ProjectsContext from "../projects/ProjectsContext";

const SectionDivider = styled.section`
  background-color: ${({ theme }) => theme.colorPrimaryDark};
  margin: 0 auto;
  padding: 2rem 0;
  margin-bottom: -10em;
  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 80% 5em, 125% 100%, 0 100%);
    clip-path: polygon(0 0, 80% 5em, 125% 100%, 0 100%);
  }

  .divider__wrapper {
    padding: 5rem ${({ theme }) => theme.paddingMd};
    width: 100%;
    max-width: 140rem;
    margin: 0 auto;
  }

  .divider__title {
    display: block;
    color: ${({ theme }) => theme.colorWhite09};
  }
  .divider__desc {
    font-size: ${({ theme }) => theme.defaultFontSize};
    color: ${({ theme }) => theme.colorWhite09};
    font-weight: 200;
    line-height: 150%;
    display: block;
    width: 70%;
  }
  .divider__link {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

class Divider extends Component {
  state = {
    pl: `Poniżej znajdziesz niektóre z moich ostatnich projektów. Są tu zarówno moje
    własne projekty, jak i te wykonane w ramach kursów online. Wiecej z nich
    znajdziesz na moim`,
    en: `Below are some of my recent projects. These are my own projects as well as those created as a part of online courses. You will find more of them on my`
  };
  render() {
    const { pl, en } = this.state;
    return (
      <ProjectsContext.Consumer>
        {({ language }) => (
          <SectionDivider className="divider" id="projects">
            <div className="divider__wrapper">
              <h2 className="divider__title">
                {language === "pl" ? "Projekty" : "Projects"}
              </h2>

              <p className="divider__desc">
                {language === "pl" ? pl : en}{" "}
                <a
                  href="https://github.com/gitmatheo"
                  className="divider__link"
                  aria-label="Project1 Github"
                >
                  Github
                </a>
              </p>
            </div>
          </SectionDivider>
        )}
      </ProjectsContext.Consumer>
    );
  }
}

export default Divider;
