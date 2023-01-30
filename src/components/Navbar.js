import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import HomeIcon from "./icons/HomeIcon";
import ContactIcon from "./icons/ContactIcon";
import ProjectsIcon from "./icons/ProjectsIcon";
import AboutIcon from "./icons/AboutIcon";

function clickOutsideAlerter(ref, setIsNavExpanded) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsNavExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const ref = useRef();
  clickOutsideAlerter(ref, setIsNavExpanded)

  const Pop = keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
    80% {
      transform: scale(1.07);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `

  const HoverStyle = css`
    filter: invert(1);
    background: linear-gradient(45deg, rgba(55,55,55,0.6), rgba(22,22,22,0.6));
    padding: .5rem;
    border-radius: 2rem;
  `

  const NavBar = styled.ul`
    list-style-type: none;
    z-index: 2;
    top: 1rem;
    right: 2rem;
    left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 30px / 30px;
    font-weight: bold;
    position: fixed;
    font-family: monospace;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: end;
    @media screen and (max-width: 640px) and (orientation:portrait){
      height: 28px;
    }
  `

  const NavLinks = styled.div`
    ${props => props.className === "wide-nav" && css`
      display: flex;
      justify-content: flex-end;
      padding-right: 15px;
      @media screen and (max-width: 640px) and (orientation:portrait) {
        display: none;
      }
    `}
    ${props => props.className === "nav-expanded" && css`
      display: none;
        @media screen and (max-width: 640px) and (orientation:portrait) {
          display: block;
          position: fixed;
          right: 3rem;
          top: 7rem;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 1rem;
          text-align: end;
          animation: ${Pop} 500ms ease-in-out forwards;
        }
        // stops the expanded navbar appearing after widening window
        @media screen and (min-width: 640px) and (orientation:portrait) {
          display: flex;
          justify-content: flex-end;
          padding-right: 15px;
        }
    `}
    & .active {
      ${HoverStyle}
    }
  `

  const LinkItem = styled.li`
    padding: .5rem;
    border-radius: 2rem;
    margin-left: 1rem;
    color: rgb(255, 255, 255);
    transition: background 1s, color 1s;
    &:visited {
      color: rgb(255, 255, 255);
    }
    @media screen and (max-width: 640px) and (orientation:portrait){
      margin: 2rem;
    }
    & #kid {
      text-decoration: none;
      transition: background 1s, color 1s;
      padding: .5rem;
      border-radius: 2rem;
    }
    & #kid:hover {
      ${HoverStyle}
    }
  `

  const MyName = styled.text`
    left: 3.7rem;
    top: 3.5rem;
    position: fixed;
    font-size: 1.1rem;
    color: orange;
  `

  const ButtonStyles = styled.button`
    margin-right: 1.5rem;
    border-radius: 8px 8px;
    border-style: hidden;
    width: 2.5rem;
    ${props => props.className === "hamburger" && css`
      transition: background 1s, color 1s;
      background: transparent;
      display: none;
      &:hover {
        background: rgba(195, 195, 195, 0.6);
        color: rgb(0, 0, 0);
        & #kid {
          filter: invert(0);
        }
      }
      @media screen and (max-width: 640px) and (orientation:portrait) {
        display: flex;
        justify-content: center;
      }
    `}
    ${props => props.className === "clicked-hamburger" && css`
      display: flex;
      justify-content: center;
      @media screen and (min-width: 640px) and (orientation:portrait) {
        display: none;
      }
      & #kid ${!isNavExpanded} {
        height: 100%;
        filter: invert(0);
      }
    `}
    & #kid ${isNavExpanded} {
      height: 100%;
      filter: invert(1);
      transition: filter 1s;
    }
  `

  return(
    <nav>
      <NavBar> 
        <li>
          <MyName>
            James Hart
          </MyName>
        </li>
        <ButtonStyles 
          className={
            isNavExpanded ? "clicked-hamburger" : "hamburger"
          }
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg id="kid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>        </ButtonStyles>
        <NavLinks
          ref={ref}
          className={
            (isNavExpanded) ? "nav-expanded" : 'wide-nav'
          }
        >
          <LinkItem>
            <NavLink 
              onClick={() => { setIsNavExpanded(false);}} 
              to="/" 
              exact 
              id="kid"
            >
              <HomeIcon />
              Home
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink 
              onClick={() => { setIsNavExpanded(false);}} 
              to="/projects" 
              id="kid"
            >
              <ProjectsIcon />
              Projects
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink 
              onClick={() => { setIsNavExpanded(false);}} 
              to="/about" 
              id="kid"
            >
              <AboutIcon />
              About
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink 
              onClick={() => { setIsNavExpanded(false);}} 
              to="/contact" 
              id="kid"
            >
              <ContactIcon />
              Contact
            </NavLink>
          </LinkItem>
        </NavLinks>
      </NavBar>
    </nav>);
}