import React, { Component } from "react";
import styled from "styled-components";
import NavItem from "../navigation/NavItem";

const Navi = styled.div`
  .navigation__checkbox {
    display: none;
  }
  .navigation__button {
    background-color: ${({ theme }) => theme.colorWhite};
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 4rem;
    right: 4rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem ${({ theme }) => theme.colorPrimary01};
    text-align: center;
    cursor: pointer;
    @media only screen and (max-width: 56.25rem) {
      top: 4rem;
      right: 4rem;
    }
    @media only screen and (max-width: 37.5rem) {
      top: 3rem;
      right: 3rem;
    }
  }
  .navigation__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 4.5rem;
    right: 4.5rem;
    background-image: radial-gradient(
      ${({ theme }) => theme.colorPrimary},
      ${({ theme }) => theme.colorPrimaryDark}
    );
    z-index: 1;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    @media only screen and (max-width: 56.25rem) {
      top: 4.5rem;
      right: 4.5rem;
    }
    @media only screen and (max-width: 37.5rem) {
      top: 3.5rem;
      right: 3.5rem;
    }
  }

  /* FUNCTIONALITY */
  .navigation__checkbox:checked ~ .navigation__background {
    transform: scale(80);
  }
  .navigation__checkbox:checked ~ .navigation__nav {
    opacity: 1;
    width: 100%;
  }
  /* //ICON */
  .navigation__icon {
    position: relative;
    margin-top: 3.5rem;
    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: ${({ theme }) => theme.colorGreyDark3};
      display: inline-block;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }
  .navigation__button:hover .navigation__icon::before {
    top: -1rem;
  }
  .navigation__button:hover .navigation__icon::after {
    top: 1rem;
  }
  .navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent;
  }
  .navigation__checkbox:checked + .navigation__button .navigation__icon::before {
    top: 0;
    transform: rotate(135deg);
  }
  .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }

  .navigation__checkbox:checked + .navigation__nav {
    display: block;
  }
  .navigation__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

const NavList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
`;

class Navigation extends Component {
  state = {
    navItems: [
      {
        text: {
          pl: "Home",
          en: "Home"
        },
        href: "#home",
        ariaLabel: "Home"
      },
      {
        text: {
          pl: "O mnie",
          en: "About Me"
        },
        href: "#about",
        ariaLabel: "About"
      },
      {
        text: {
          pl: "Projekty",
          en: "Projects"
        },
        href: "#projects",
        ariaLabel: "Projects"
      },
      {
        text: {
          pl: "Technologie",
          en: "Tech/Tools I use"
        },
        href: "#tech",
        ariaLabel: "Tech"
      },
      {
        text: {
          pl: "Kontakt",
          en: "Contact"
        },
        href: "#contact",
        ariaLabel: "Contact"
      }
    ],
    isChecked: false
  };

  toggleNav = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
  render() {
    return (
      <Navi>
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          onClick={this.toggleNav}
          checked={this.state.isChecked}
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <NavList>
            {this.state.navItems.map(item => (
              <NavItem
                className="navigation__item"
                key={item.text}
                text={item.text}
                href={item.href}
                ariaLabel={item.ariaLabel}
                toggleNav={this.toggleNav}
              />
            ))}
          </NavList>
        </nav>
      </Navi>
    );
  }
}

export default Navigation;
