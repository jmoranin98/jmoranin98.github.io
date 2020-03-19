import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderRoot = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;
`;

const LogoSection = styled.div`

`;

const LogoText = styled.h1`
  margin: 0;
  font-family: 'Open Sans', serif;
  font-size: .8em;
  letter-spacing: -1.5px;
`;

const LinksSection = styled.div`

`;

const LinksList = styled.ol`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 0;
`;

const LinkItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 12px 10px;
`;

const LinkItemRef = styled.a`
  text-decoration: none;
  color: #304FFE;
  font-family: 'Open Sans', serif;
  letter-spacing: 1px;
  font-size: .5em;
`;

const Header = ({ links }) => (
  <HeaderRoot>
    <LogoSection>
      <LogoText>Jesús Morán</LogoText>
    </LogoSection>
    <LinksSection>
      <LinksList>
        {
          links.map((link, index) => (
            <LinkItem key={`link-${index}`}>
              <LinkItemRef href={link.ref}>{link.name}</LinkItemRef>
            </LinkItem>
          ))
        }
      </LinksList>
    </LinksSection>
  </HeaderRoot>
);

Header.propTypes = {
  links: PropTypes.array,
}

Header.defaultProps = {
  links: [],
}

export default Header
