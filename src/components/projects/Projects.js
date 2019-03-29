import React, { Component } from "react";
import styled from "styled-components";
import ProjectsContext from "./ProjectsContext";
import ProjectCard from "./ProjectCard";
import ButtonLink from "../ButtonLink";

const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.colorPrimaryDark};
  -webkit-clip-path: polygon(0 10em, 100% 0, 100% calc(100% - 10em), 0% 100%);
  clip-path: polygon(0 10em, 100% 0, 100% calc(100% - 10em), 0% 100%);
  overflow: hidden;
  .projects__wrapper {
    grid-column: center-start/ center-end;
    margin: 0 auto;
    max-width: 140rem;
    padding: 15em ${({ theme }) => theme.paddingMd};
    display: grid;
    grid-template-columns: repeat(3, minmax(25rem, 1fr));
    grid-gap: 7rem;

    @media only screen and (max-width: 75em) {
      grid-template-columns: repeat(2, minmax(25rem, 1fr));
    }

    @media only screen and (max-width: 37.5em) {
      grid-template-columns: minmax(25rem, 1fr);
    }

    @media only screen and (min-width: 112.5em) {
      font-size: 75%;
    }
  }
  .project {
    background-color: ${({ theme }) => theme.colorPrimary};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > * {
      padding: 3rem;
      color: ${({ theme }) => theme.colorWhite09};
    }
    .project__img {
      width: 100%;
    }

    .project__name {
      width: calc(100% - 3em);
      margin: 0 3rem;
      font-size: ${({ theme }) => theme.fontSizeMedium};
      font-weight: 400;
      padding: 0.5rem 0rem;
      border-bottom: 1px solid ${({ theme }) => theme.colorWhite09};
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .project__description {
      font-size: ${({ theme }) => theme.defaultFontSize};
      display: flex;
      align-items: center;
    }

    .project__btns-wrapper {
      margin-top: auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .project__btn {
      width: 45%;
      padding: 1.5rem 0rem !important;
    }
  }

  .card-top {
    padding: 0;
    backface-visibility: hidden;
  }
`;

class Projects extends Component {
  state = {};
  render() {
    return (
      <ProjectsSection className="projects">
        <div className="projects__wrapper">
          <ProjectsContext.Consumer>
            {({ state, language }) => (
              <>
                {state.projects.map(project => (
                  <div key={project.title} className="project">
                    <ProjectCard
                      title={project.title}
                      img={project.img}
                      stack={project.stack}
                    />

                    <h5 className="project__name">{project.title}</h5>
                    <div className="project__description">
                      <p>{language === "pl" ? project.desc.pl : project.desc.en}</p>
                    </div>
                    <div className="project__btns-wrapper">
                      {project.githubLink ? (
                        <ButtonLink
                          href={project.githubLink}
                          className="project__btn btn btn--anim1 btn--inverted"
                          aria-label="Project1 Github"
                        >
                          Github
                        </ButtonLink>
                      ) : null}
                      <ButtonLink
                        href={project.liveLink}
                        className="project__btn btn btn--anim1 btn--inverted"
                        aria-label="Project1 Live Demo"
                      >
                        Live
                      </ButtonLink>
                    </div>
                  </div>
                ))}
              </>
            )}
          </ProjectsContext.Consumer>
        </div>
      </ProjectsSection>
    );
  }
}

export default Projects;
