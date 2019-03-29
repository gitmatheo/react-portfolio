import React from "react";
import styled from "styled-components";
import heroDesktop from "../../images/hero-desktop.jpg";
import heroTab from "../../images/hero-tab.jpg";
import heroPhone from "../../images/hero-phone.jpg";
import HeadingPrimary from "./HeadingPrimary";
import LogoImg from "../../images/logo-white.svg";
import LogoImgSmall from "../../images/logo-white-small.svg";
import ProjectsContext from "../projects/ProjectsContext";
import CVpl from "../../assets/NoweCV-final.pdf";
import CVen from "../../assets/NewCV-final.pdf";
// import Particles from "react-particles-js";
import ButtonLink from "../ButtonLink";
// import "./sass/style.scss";

const StyledHeader = styled.header`
  height: 85vh;
  min-height: 720px;
  background-image: linear-gradient(
      ${({ theme }) => theme.colorPrimary08},
      ${({ theme }) => theme.colorPrimaryDark}
    ),
    url(${heroDesktop});
  background-size: cover;
  background-position: top;
  position: relative;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5em));
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5em));
    height: 95vh;
  }

  @media only screen and (min-resolution: 192dpi) and (min-width: 37.5rem),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5rem),
    only screen and (min-width: 125rem) {
    background-image: linear-gradient(
        to top bottom,
        ${({ theme }) => theme.colorPrimary08},
        ${({ theme }) => theme.colorPrimaryDark}
      ),
      url(${heroTab});
  }

  @media only screen and (max-width: 37.5rem) {
    background-image: linear-gradient(
        ${({ theme }) => theme.colorPrimary08},
        ${({ theme }) => theme.colorPrimaryDark}
      ),
      url(${heroPhone});
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10em));
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10em));
  }

  @media only screen and (max-width: 75rem) {
    background-image: linear-gradient(
        ${({ theme }) => theme.colorPrimary08},
        ${({ theme }) => theme.colorPrimaryDark}
      ),
      url(${heroTab});
  }

  @media only screen and (max-width: 56.25rem) {
    font-size: 50%;
  }

  .header__text-box {
    z-index: 2000;
  }

  .header__btn {
    margin: 1rem;
    color: ${({ theme }) => theme.colorPrimaryDark};
    font-weight: 600;
    margin-left: 0;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 140rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 ${props => props.theme.paddingMd};
  position: relative;
`;

const LogoBox = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
`;

const Logo = styled.div`
  background-image: url(${LogoImg});
  background-position: left;
  background-repeat: no-repeat;
  width: 20rem;
  height: 7rem;
  @media only screen and (max-width: 56.25rem) {
    height: 6rem;
  }

  @media only screen and (max-width: 37.5rem) {
    background-image: url(${LogoImgSmall});
    width: 20rem;
    height: 5rem;
  }
  @media only screen and (max-width: 22.5rem) {
    height: 5rem;
  }
`;

const Socials = styled.div`
  ul {
    list-style: none;
    display: flex;
    padding: 2rem 0;
    li {
      i {
        color: ${({ theme }) => theme.colorWhite};
        font-size: 6rem;
        padding: 0.7rem;
        transition: all 0.3s ease-out;
        &:hover {
          color: ${({ theme }) => theme.colorWhite08};
          transform: translateY(-3px) scale(1.1);
        }
        &:active {
          color: ${({ theme }) => theme.colorWhite};
          transform: translateY(-1px) scale(1);
        }
      }
    }
  }
`;

// const StyledParticles = styled(Particles)`
//   position: absolute;
//   width: 70%;
//   height: 100%;
//   border-radius: 50%;
//   overflow: hidden;
//   background-image: url("");
//   background-size: cover;
//   background-position: 50% 50%;
//   background-repeat: no-repeat;
//   z-index: 1000;
// `;

const Header = () => {
  return (
    <StyledHeader className="header" id="home">
      {/* <Particles /> */}
      <Wrapper>
        <LogoBox>
          <Logo />
        </LogoBox>

        <div className="header__text-box">
          <HeadingPrimary />
          <ProjectsContext.Consumer>
            {({ language }) => (
              <>
                <ButtonLink
                  href="#projects"
                  className="header__btn btn btn--white btn--animated"
                  aria-label="View Projects"
                >
                  {language === "pl" ? "Zobacz projekty" : "Show Projects"}
                </ButtonLink>
                <ButtonLink
                  href={language === "pl" ? CVpl : CVen}
                  className="header__btn btn btn--white btn--animated"
                >
                  {language === "pl" ? "Pobierz CV" : "Download CV"}
                </ButtonLink>
              </>
            )}
          </ProjectsContext.Consumer>
          <Socials>
            <ul>
              <li>
                <a href="https://github.com/gitmatheo" aria-label="Github">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mateusz-dominiak/"
                  aria-label="Linkedin"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/matteuszd" aria-label="YouTube">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/mateuszdominiak" aria-label="Facebook">
                  <i className="fab fa-facebook" />
                </a>
              </li>
            </ul>
          </Socials>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
