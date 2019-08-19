import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import  startImg  from '../img/start-img.png';
import {Styled}  from './styled/StyledComponents';

const { Header, Heading, Button, Container, Section, StyledLink } = new Styled();

const Homepage = () => {
  return (
    <Fragment>
    <Container column>
      <Header>
        <Heading fs="30px" lh="38px">
          Buy gift for<br/> beloved one
        </Heading>
        <div class="main-title__icon"></div>
      </Header>

      <Section >
        <Container auto column>
          <img src={startImg} alt="Gift Shop" class="start-image"/>
          <Link to='/catalogue'><Button w="315px" h="50px" shadowed>EXPLORE SHOP</Button></Link>
          <StyledLink><Link to='/'>Learn more</Link></StyledLink>
        </Container>
      </Section>
      </Container>
    </Fragment>
  )
}

export { Homepage }