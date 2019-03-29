import React from "react";
import natours from "../../images/natours.png";
import trillo from "../../images/trillo.png";
import nexter from "../../images/nexter.png";
import weatherApp from "../../images/react-weather-app.png";
import todoApp from "../../images/react-todo-app.png";
import milk from "../../images/milk.png";
import proktolog from "../../images/proktolog.png";
import oldPortfolio from "../../images/old-portfolio.png";
import spanishRobot from "../../images/spanish-robot.png";
import videalty from "../../images/Videalty.png";

const projectsData = {
  isPolish: true,
  language: "pl",
  projects: [
    {
      title: "Natours",
      stack: ["HTML", "CSS", "Sass"],
      img: natours,
      desc: {
        pl:
          "Landing page dla fikcyjnej firmy zajmującej się organizowaniem wycieczek turystycznych. Strona wykonana w ramach kursu 'Advanced CSS and Sass' z Udemy.com.",
        en:
          "Landing page for a fictional company that offers tours in nature. A website made as a part of `Advanced CSS Course` from Udemy.com."
      },
      githubLink: "https://github.com/gitmatheo/Natours",
      liveLink: "https://gitmatheo.github.io/Natours/"
    },
    {
      title: "Trillo",
      stack: ["HTML", "CSS", "Sass"],
      img: trillo,
      desc: {
        pl:
          "Fikcyjna wyszukiwarka hoteli. Strona wykonana w ramach kursu 'Advanced CSS and Sass' z Udemy.com. Stylowana głównie za pomocą CSS Flexbox",
        en:
          "Fictional all in one booking app made as a part of 'Advanced CSS Course' from Udemy.com. Styled mainly using CSS Flexbox."
      },
      githubLink: "https://github.com/gitmatheo/Trillo",
      liveLink: "https://gitmatheo.github.io/Trillo/"
    },
    {
      title: "Nexter",
      stack: ["HTML", "CSS", "Sass"],
      img: nexter,
      desc: {
        pl:
          "Landing page dla fikcyjnej firmy zajmującej się luksusowymi nieruchomościami. Strona wykonana w ramach kursu 'Advanced CSS and Sass' z Udemy.com. Stylowana głównie za pomocą CSS Grid",
        en:
          "Landing page for a fictional company that offers luxury real estates. Site created as part of the `Advanced CSS and Sass` course from Udemy.com. Styled mainly using CSS Grid."
      },
      githubLink: "https://github.com/gitmatheo/Nexter",
      liveLink: "https://gitmatheo.github.io/Nexter/"
    },
    {
      title: "React Weather App",
      stack: ["HTML", "CSS", "Sass", "React js", "Styled Components"],
      img: weatherApp,
      desc: {
        pl:
          "Prosta aplikacja pogodowa napisana z użyciem biblioteki react i styled components",
        en: "Simple Weather App created using React and Styled Components."
      },
      githubLink: "https://github.com/gitmatheo/React-Weather-App",
      liveLink: "https://gitmatheo.github.io/React-Weather-App/"
    },
    {
      title: "React ToDo App",
      stack: ["HTML", "CSS", "Sass", "React js", "Styled Components"],
      img: todoApp,
      desc: {
        pl:
          "TodoApp wykonana w ramach nauki biblioteki React.js zapisująca aktualny stan zadań do localstorage",
        en:
          "TodoApp reated using React library, which records the current status of tasks to local storage."
      },
      githubLink: "https://github.com/gitmatheo/React-todoapp",
      liveLink: "https://gitmatheo.github.io/React-todoapp/"
    },
    {
      title: "Szkoła rodzenia - Milk",
      stack: ["HTML", "CSS", "WordPress", "Dive Theme"],
      img: milk,
      desc: {
        pl:
          "Strona internetowa wykonana dla łódzkiej szkoły rodzenia MILK. Oparta o CMS WordPress i szablon DIVI od Elegant Themes.",
        en:
          "A website made for the MILK birth school. Based on WordPress CMS and Divi Theme from Elegant Themes."
      },
      githubLink: null,
      liveLink: "https://milk.edu.pl/"
    },
    {
      title: "Proktolog Nowicki",
      stack: ["HTML", "CSS", "WordPress", "Dive Theme"],
      img: proktolog,
      desc: {
        pl:
          "Strona internetowa wykonana dla lekarza proktologa. Oparta o CMS WordPress i szablon DIVI od Elegant Themes.",
        en:
          "A business website made for a proctologist. Based on WordPress CMS and Divi Theme from Elegant Themes."
      },

      githubLink: null,
      liveLink: "https://proktolog-nowicki.pl/"
    },
    {
      title: "Videalty",
      stack: ["HTML", "CSS", "WordPress", "Dive Theme"],
      img: videalty,
      desc: {
        pl:
          "Moja strona internetowa nt. wideo i fotografii nieruchomości. Oparta o CMS WordPress i szablon DIVI od Elegant Themes.",
        en:
          "My website about video and real estate photography. Based on CMS WordPress and Divi Theme from Elegant Themes."
      },
      githubLink: null,
      liveLink: "https://videalty.pl/"
    },
    {
      title: "Strona Wizytówka",
      stack: ["HTML", "CSS", "JavaScript", "jQuery", "typed.js", "fullpage.js"],
      img: oldPortfolio,
      desc: {
        pl:
          "Dawna strona wizytówka wykonana z wykorzystaniem jQuery Typed.js i Fullpage.js",
        en: "Old portfolio website created using jQuery Typed.js and Fullpage.js."
      },
      githubLink: "https://github.com/gitmatheo/mywebsite",
      liveLink: "https://gitmatheo.github.io/mywebsite/"
    },
    {
      title: "Spanish Robot",
      stack: ["HTML", "CSS", "JavaScript", "jQuery", "Svg", "granim.js"],
      img: spanishRobot,
      desc: {
        pl:
          "Gra do nauki hiszpańskich słowek przygotowywana na warsztatach CodersLab. Zawiera dużo błędów, ale możesz zobaczyć ją na GitHub jeśli masz ochotę. Przygotowywana dla rozdzielczości 1366x768.",
        en:
          "A game for learning Spanish words. created o the CodersLab Bootcamp. It has a lot of bugs but you can check it if you want. View it on 1366x768 screen resolution for the best experience."
      },
      githubLink: "https://github.com/gitmatheo/spanish-robot",
      liveLink: "https://gitmatheo.github.io/spanish-robot/"
    }
  ]
};

const ProjectsContext = React.createContext(projectsData);

export default ProjectsContext;
export { projectsData };
