import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Footer = () => {
    const FooterDuplicate = css`
        border-top: .1rem rgb(100, 100, 100) solid;
        margin-left: 2%;
        margin-right: 2%;
    `

    const Footer = styled.footer`
        background-color: rgb(49, 49, 49);
        width: 100vw;  
        position: sticky;
    `

    const WebsiteInfo = styled.p`
        text-align: center;
        margin: 0;
        padding-bottom: 1rem;
        padding-top: 1rem;
        ${FooterDuplicate}
        @media screen and (max-width: 320px) and (orientation:portrait){
            font-size: .9rem;
        }
    `

    const UnorderedList = styled.ul`
        flex-direction: column;
        list-style-type: none;
        margin-top: 0;
        padding-top: 1rem;
        ${FooterDuplicate}
    `

    const ListItem = styled.li`
        padding: .1rem;
        @media screen and (max-width: 320px) and (orientation:portrait){
            font-size: .9rem;
        }
    `

    return (
        <Footer>
            <UnorderedList>
                <ListItem>
                    <Link 
                        to="/" 
                        exact
                    >
                        Home
                    </Link>
                </ListItem>
                <ListItem>
                    <Link 
                        to="/projects"
                    >
                        Projects
                    </Link>
                </ListItem>
                <ListItem>
                    <Link 
                        to="/about"
                    >
                        About
                    </Link>
                </ListItem>
                <ListItem>
                    <Link 
                        to="/contact"
                    >
                        Contact
                    </Link>
                </ListItem>
            </UnorderedList>
            <div>
                <WebsiteInfo>
                    Website created in React by James Hart
                </WebsiteInfo>
            </div>
        </Footer>
    )
}

export default Footer;