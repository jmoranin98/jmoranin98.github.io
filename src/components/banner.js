import React from 'react';
import styled from 'styled-components';

const BannerRoot = styled.section`
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2em;
  letter-spacing: -1.5px;
`;

const Subtitle = styled.h2`
  font-family: 'Ubuntu Mono', mono;
  font-size: 1.5em;
  letter-spacing: 2px;
`;

const Description = styled.p`
  margin: 20px 0;
  font-size: .5em;
  letter-spacing: 1.5px;
  max-width: 600px;
`;

const Banner = () => (
  <BannerRoot>
    <Title>Jesús Morán</Title>
    <Subtitle>Full-Stack Developer</Subtitle>
    <Description>
      Desarollador Full Stack viviendo en Lima, Perú enfocado en la
      arquitectura y desarollo de aplicaciones web.
    </Description>
  </BannerRoot>
);

export default Banner;
