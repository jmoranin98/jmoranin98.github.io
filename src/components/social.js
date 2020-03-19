import React from 'react';
import styled from 'styled-components';

const SocialRoot = styled.div`
  position: fixed;
  bottom: 2vw;
  right: 2vw;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 20px 10px;
`;

const ListItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img`
  width: 25px;
`;

const Social = () => (
  <SocialRoot>
    <List>
      <ListItem>
        <ListItemLink href='#'>
          <IconImage src={require('../images/gatsby-icon.png')}/>
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink href='#'>
          <IconImage src={require('../images/gatsby-icon.png')}/>
        </ListItemLink>
      </ListItem>
    </List>
  </SocialRoot>
);


export default Social;
