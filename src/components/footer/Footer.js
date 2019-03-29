import React from "react";
import styled from "styled-components";
import ButtonLink from "../ButtonLink";
import ProjectsContext from "../projects/ProjectsContext";

const StyledFooter = styled.section`
  background: #16222a;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colorPrimary},
    ${({ theme }) => theme.colorPrimaryDark}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.defaultFontSize};
  padding-top: 5rem;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(50% 0%, 100% 5rem, 100% 100%, 0 100%, 0 5rem);
    clip-path: polygon(50% 0%, 100% 5rem, 100% 100%, 0 100%, 0 5rem);
  }
  .footer__container {
    color: ${({ theme }) => theme.colorWhite09};
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 80%;
    width: 100%;
    max-width: 140rem;
    line-height: 150%;
    padding: 4rem ${({ theme }) => theme.paddingMd};
    @media only screen and (max-width: 56.25rem) {
      flex-direction: column;
      padding: 2rem 0;
      div {
        text-align: center;
        padding: 2rem 0;
      }
    }

    * {
      line-height: 150%;
    }
  }
  .footer__copy {
    align-self: center;
  }
  .footer__contact {
    text-align: left;

    @media only screen and (max-width: 56.25rem) {
      text-align: center;
      align-self: center;
    }
  }
  .footer__cv {
    color: ${({ theme }) => theme.colorPrimaryDark};
    font-weight: 600;
    margin-right: 2rem;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colorPrimaryDark};
    }
  }
  ul {
    list-style: none;
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    transition: 0.3s;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  i {
    display: inline-block;
    padding: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <ProjectsContext.Consumer>
      {({ language }) => (
        <StyledFooter id="contact" className="footer">
          <div className="footer__container">
            <div className="footer__contact">
              <h3>{language === "pl" ? "Kontakt" : "Contact"}</h3>
              <ul>
                <li>
                  <i className="fas fa-mobile-alt" />
                  Tel: +48 695 655 650
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  email: matteuszd@gmail.com
                </li>
                <li>
                  <ButtonLink
                    href="./assets/NoweCV-final.pdf"
                    className="footer__cv header__btn btn btn--white btn--animated"
                  >
                    CV PL
                  </ButtonLink>
                  <ButtonLink
                    href="./assets/NewCV-final.pdf"
                    className="footer__cv header__btn btn btn--white btn--animated"
                  >
                    CV EN
                  </ButtonLink>
                </li>
              </ul>
            </div>
            <div className="footer__socials">
              <h3>Social Media</h3>
              <ul>
                <li>
                  <a
                    href="https://github.com/gitmatheo"
                    target="_blank"
                    aria-label="Github"
                  >
                    <i className="fab fa-github" />
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mateusz-dominiak/"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <i className="fab fa-linkedin" />
                    Linkedin
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/user/matteuszd"
                    target="_blank"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube" />
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/mateuszdominiak"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="copy">
              <p>Copyright &copy; 2019 Mateusz Dominak</p>
            </div>
          </div>
        </StyledFooter>
      )}
    </ProjectsContext.Consumer>
  );
};
export default Footer;
