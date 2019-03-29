import React, { Component } from "react";
import styled from "styled-components";
import icons from "../../assets/icons/sprite.svg";
import ProjectsContext from "../projects/ProjectsContext";

const SectionTech = styled.section`
  color: ${({ theme }) => theme.colorPrimaryDark};
  font-size: ${({ theme }) => theme.defaultFontSize};
  background: ${({ theme }) => theme.colorGreyLight2};
  margin-top: -10rem;
  margin-bottom: -5rem;
  padding: ${({ theme }) => theme.paddingMd};
  padding-top: 14rem;
  padding-bottom: 10rem;
  .tech__wrapper {
    padding: ${({ theme }) => theme.paddingMd};

    max-width: 140rem;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row-reverse;

    @media only screen and (max-width: 56.25em) {
      flex-direction: row-reverse;
    }

    @media only screen and (max-width: 37.5em) {
      flex-direction: column;
    }

    &--right {
      text-align: right;
    }
    ul {
      list-style: none;
      line-height: 150%;
    }
  }
  .tech__title {
  }
  .tech__desc {
    font-size: ${({ theme }) => theme.defaultFontSize};
  }

  .tech__content-wrapper {
    margin-left: 5rem;

    @media only screen and (max-width: 37.5em) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 5rem;
    }
    &--reversed {
      align-items: flex-end;
    }
  }
  .tech__logos-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 31%;

    @media only screen and (max-width: 56.25em) {
      width: 50%;
    }
    @media only screen and (max-width: 37.5em) {
      width: 100%;
    }
  }
  .tech__logo {
    height: 10rem;
    flex-basis: 6rem;
    margin: 0 0.5rem;
    fill: currentColor;
    flex-grow: 1;
  }
`;

class Tech extends Component {
  state = {};
  render() {
    return (
      <ProjectsContext.Consumer>
        {({ language }) => (
          <SectionTech className="tech" id="tech">
            <div className="tech__wrapper ">
              <div className="tech__content-wrapper">
                <h2 className="tech__title heading-tertiary">
                  {language === "pl"
                    ? "Technologie i narzędzia z których korzystam."
                    : "Technologies and tools that I use."}
                </h2>
                <p className="tech__desc">
                  {language === "pl"
                    ? "Przez cały okres mojej nauki miałem okazję pracować z..."
                    : "Throughout my entire learning process I had the pleasure to work with..."}
                </p>
                <br />
                <ul>
                  <li>HTML</li>
                  <li>CSS, Sass, RWD, BEM</li>
                  <li>JavaScript ES6 +</li>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Styled Components</li>
                  <li>jQuery</li>
                  <li>Bootstrap 4</li>
                  <li>NPM</li>
                  <li>WordPress</li>
                  <li>Git</li>
                  <li>Adobe Photoshop Lightroom</li>
                </ul>
              </div>
              <div className="tech__logos-wrapper">
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-html5`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-css3`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-sass`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-javascript`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-jquery`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-bootstrap`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-npm`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-git`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-wordpress`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-adobephotoshop`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-adobelightroom`} />
                </svg>
              </div>
            </div>
            <div className="tech__wrapper ">
              <div className="tech__content-wrapper tech__content-wrapper--reversed">
                <h2 className="tech__title heading-tertiary">
                  {language === "pl" ? "W trakcie nauki..." : "Currently learning..."}
                </h2>
                <p className="tech__desc">
                  {language === "pl"
                    ? `Ostatnio spędzam swój wolny czas na nauce React.js + Redux z użyciem
                    Firebase.`
                    : ` Recently I spend my free time learning React.js + Redux using Firebase.`}
                </p>
              </div>
              <div className="tech__logos-wrapper">
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-redux`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-firebase`} />
                </svg>
              </div>
            </div>
            <div className="tech__wrapper ">
              <div className="tech__content-wrapper">
                <h2 className="tech__title heading-tertiary">
                  {language === "pl"
                    ? ` W najbliższym czasie mam zamiar nauczyć się...`
                    : ` In the near future I am going to learn ...`}
                </h2>
                <ul>
                  <li>Vue.js</li>
                  <li>GraphQL</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="tech__logos-wrapper">
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-vue-dot-js`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-graphql`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-mongodb`} />
                </svg>
                <svg className="tech__logo">
                  <use xlinkHref={`${icons}#icon-node-dot-js`} />
                </svg>
              </div>
            </div>
          </SectionTech>
        )}
      </ProjectsContext.Consumer>
    );
  }
}

export default Tech;
