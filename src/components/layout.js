/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import Header from "./header";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: calc(1em + 1vw);
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', serif;
    margin: 0;
    padding: 0;
  }
`;

const MainContent = styled.div`
  margin: 0;
  padding: 0 50px;
`;

const links = [
  {
    name: 'About',
    ref: '#',
  },
  {
    name: 'Work',
    ref: '#',
  },
  {
    name: 'Projects',
    ref: '#',
  },
];

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle/>
      <Header links={links} />
      <MainContent>
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with ❤️
        </footer> */}
      </MainContent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
