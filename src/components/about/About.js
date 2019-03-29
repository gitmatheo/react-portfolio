import React, { Component } from "react";
import styled from "styled-components";
import picture from "../../images/face.jpg";
import ProjectsContext from "../projects/ProjectsContext";

const SectionAbout = styled.section`
  background: ${({ theme }) => theme.colorGreyLight2};
  color: ${({ theme }) => theme.colorPrimaryDark};

  .about__container {
    width: 100%;
    max-width: 140rem;
    padding: 20rem ${({ theme }) => theme.paddingMd} 25rem
      ${({ theme }) => theme.paddingMd};
    margin: -15rem auto -18rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 37.5rem) {
      flex-direction: column;
      padding: 20rem 1rem 25rem 1rem;
      margin: -15rem auto -20rem auto;
    }
  }
  .about__content {
    margin-left: 3em;
    p {
      font-size: ${({ theme }) => theme.defaultFontSize};
      line-height: 1.6em;
    }
  }
  .about__img {
    height: 20rem;
    border-radius: 50%;
    backface-visibility: cover;
  }
`;

class About extends Component {
  state = {
    pl: `<p>
  Mam na imię Mateusz i jestem{" "}
  <strong>Junior Front-End Developerem</strong> mieszkającym w Łodzi.
  Zawsze szukam okazji do kodowania i uczenia się nowych rzeczy. Mam około
  sześć miesięcy praktycznego doświadczenia w kodowaniu stron
  internetowych i aplikacji przy użyciu nowoczesnego HTML, CSS i
  JavaScript. Ostatnio uczę się biblioteki React JS. Oprócz mojej bazy
  wiedzy, aktywnie poszukuję nowych technologii i staram się być na
  bieżąco z trendami i postępami w branży. Ukończyłem Bootcamp „Become a
  Front-End Developer” w CodersLab,{" "}
  <strong>codziennie uczę się więcej</strong>, korzystając z kursów online
  i pisząc nowe linie kodu.
</p>
<br />
<p>
  Wcześniej pracowałem w najwiekszej w Polsce firmie zajmującej się
  zarządzaniem najmem jako Specjalista ds. najmu a także fotograf i
  producent video. Oprócz tego interesuję się technologią blockchain i
  kryptowalutami. Zimą jeżdzę na snowboardzie po alpejskich stokach.
</p>
<br />
<p>
  Aktualnie <strong>szukam ludzi lepszych od siebie </strong> i możliwości
  zatrudnienia/stażu jako Junior Front-End Developer, gdzie mógłbym wnieść
  wartość do zespołu i dalej się rozwijać.
</p>`,
    en: `    <p>
My name is Mateusz and I am a<strong> Junior Front-End Developer</strong> working in Łódź. I always look for opportunities to code and learn new things. I have about six months of practical experience coding websites and applications using modern HTML, CSS, and JavaScript. I have recently been learning the React JS. In addition to my knowledge base, I actively look for new technologies and try to keep up to date on industry trends and advancements. I completed  "Become a Front-End Developer" Bootcamp at CodersLab, <strong>I learn more every day</strong> through using online courses and writing new lines of code.
</p>
<br>
<p>
  Earlier, I worked in the largest Polish company dealing with lease management as a rental specialist as well as a photographer and video producer. In addition, I'm interested in blockchain technology and cryptocurrency. In winter, I go snowboarding on the Alpine slopes.
</p>
<br>
<p>
   I am currently <strong>looking for people who are better than myself</strong> and for employment/internship as a Junior Front-End Developer, where I could bring value to the team and develop further.
</p>}`
  };

  render() {
    const { pl, en } = this.state;
    return (
      <ProjectsContext.Consumer>
        {({ language }) => (
          <SectionAbout className="about" id="about">
            <div className="about__container">
              <img className="about__img" src={picture} alt="Author" />
              <div className="about__content">
                <h2>{language === "pl" ? "O mnie" : "About me"}</h2>
                <h3>
                  {language === "pl"
                    ? "Pozwól, że się przedstawię..."
                    : "Let me introduce myself..."}
                </h3>
                {language === "pl" ? pl : en}
              </div>
            </div>
          </SectionAbout>
        )}
      </ProjectsContext.Consumer>
    );
  }
}

export default About;
