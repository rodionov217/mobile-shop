import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import {Styled}  from './styled/StyledComponents';
import {ProductCard} from './ProductCard';

const {Section, HeadingContainer, SubHeading, Container, StyledLink} = new Styled();

const ProductList = (props) => { 
  return (
  <Section>
    <HeadingContainer>
      <SubHeading fs="21px" lh="18px">{props.title}</SubHeading>
      <span>{props.text ||
        (new Date()).toLocaleDateString('en-En', {month: 'long', day: 'numeric' })}</span>
      <Link to='/'><StyledLink>See all</StyledLink></Link>
    </HeadingContainer>
    
    <Container auto>
      {!props.trending ? props.list.map((el, i) => <ProductCard extended={props.extended} product={el} key={i}/>) : 
      <Fragment>
        <ProductCard extended product={props.list[0]} />
        <ProductCard extended product={props.list[0]} />
      </Fragment>
    }
    </Container>
</Section>
)
  }

export {ProductList}