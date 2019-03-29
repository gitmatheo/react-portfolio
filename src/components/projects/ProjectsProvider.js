import React, { Component } from "react";
import ProjectsContext, { projectsData } from "./ProjectsContext";

class ProjectsProvider extends Component {
  state = projectsData;
  handleLanguageChange = language => this.setState({ language });
  render() {
    return (
      <ProjectsContext.Provider
        value={{
          state: this.state,
          setLanguage: this.handleLanguageChange,
          language: this.state.language
        }}
      >
        {this.props.children}
      </ProjectsContext.Provider>
    );
  }
}

export default ProjectsProvider;
