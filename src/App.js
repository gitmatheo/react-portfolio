import React, { Component } from "react";
// import "./sass/style.scss";
import "./App.scss";
import theme from "./style/theme.js";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Languages from "./components/navigation/Languages.js";
import About from "./components/about/About";
import Divider from "./components/divider/Divider";
import Projects from "./components/projects/Projects";
import ProjectsProvider from "./components/projects/ProjectsProvider";
import Tech from "./components/tech/Tech";
import Footer from "./components/footer/Footer";

const GlobalStyle = createGlobalStyle`
  *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

:root {
font-size:10px;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  @media only screen and (max-width: 75em) {
    font-size: 56.25%;
  }
  @media only screen and (max-width: 56.25em) {
    font-size: 50%;
  }

}
body {
  box-sizing: border-box;
 font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: ${props => props.theme.colorGreyDark};
}
::selection {
  background-color: ${props => props.theme.colorPrimary};
  color: ${props => props.theme.colorWhite};
}
h2 {
  font-size: 3.8rem;
  line-height: 4.8rem;
  margin: 2rem 0;
}
h3 {
  font-size: 2rem;
  line-height: 200%;
}
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <ProjectsProvider>
            <GlobalStyle />
            <Navigation />
            <Languages />
            <Header />
            <About />
            <Divider />

            <Projects />

            <Tech />
            <Footer />
          </ProjectsProvider>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
