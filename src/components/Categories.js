import React from 'react';
import {Link} from 'react-router-dom';
import {Styled}  from './styled/StyledComponents';
import { categories } from '../data/data';

const {Section, HeadingContainer, Heading, StyledLink, Container, CategoryContainer} = new Styled();

const Categories = () => (
  <Section>
    <HeadingContainer>
      <Heading fs="21px" lh="18px">Top Categories</Heading>
      <Link to='/'><StyledLink>See all</StyledLink></Link>
    </HeadingContainer>
    <Container auto>
      {categories.map((el, i) => <Category name={el.name} img={el.img} key={i}/>)}
    </Container>
  </Section>
);

const Category = ({name, img}) => {
  return (
    <CategoryContainer>
      <Link to='/catalogue'>
        <img src={img} alt={name}/>
        <span>{name}</span>
      </Link>
    </CategoryContainer>
  )
}

export {Categories}