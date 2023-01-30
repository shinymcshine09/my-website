import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import HomeIcon from "./icons/HomeIcon";
import ContactIcon from "./icons/ContactIcon";
import ProjectsIcon from "./icons/ProjectsIcon";
import AboutIcon from "./icons/AboutIcon";
import HamburgerIcon from "./icons/HamburgerIcon";

import Pop from "./csseffects/Pop";

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
    padding: 1rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 30px / 30px;
    font-weight: bold;
    position: fixed;
    font-family: monospace;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: end;
  `

  const NavLinks = styled.div`
    ${props => props.className === "wide-nav" && css`
      margin-right: -1rem;
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
    color: rgb(255, 255, 255);
    transition: all 1s;
    &:visited {
      color: rgb(255, 255, 255);
    }
    @media screen and (max-width: 640px) and (orientation:portrait){
      margin: 2rem;
    }
    & #kid {
      text-decoration: none;
      transition: all 1s;
      padding: .5rem;
      border-radius: 2rem;
    }
    & #kid:hover {
      ${HoverStyle}
    }
  `

  const MyName = styled.text`
    //puts my name to the left of the navbar
    margin-right: auto;
    margin-left: .5rem;
    font-size: 1.1rem;
    padding: .5rem;
    color: orange;
  `

  const ButtonStyles = styled.button`
    margin-right: .5rem;
    border-radius: 8px 8px;
    border-style: hidden;
    height: 29px;
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
      }
    `}
    ${props => props.className === "clicked-hamburger" && css`
      display: flex;
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
        <MyName>
          James Hart
        </MyName>
        <ButtonStyles 
          className={
            isNavExpanded ? "clicked-hamburger" : "hamburger"
          }
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <HamburgerIcon id='kid' />   
        </ButtonStyles>
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