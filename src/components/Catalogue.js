import React, {useContext, useState, useEffect} from 'react';
import {Styled}  from './styled/StyledComponents';
import {ProductList} from './ProductList';
import {Categories} from './Categories';
import {SearchInput} from './SearchInput';

import {ApiServiceContext} from '../context/context';

const {Header, Container} = new Styled();

const Catalogue = () => {
  const api = useContext(ApiServiceContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      api.getItems()
        .then(data => {
          setProducts(data)})
    }
  });

  return (
    <Container column>
      <Header >
        <SearchInput />
      </Header>
        {products.length > 0 ? <ProductList title="Todays Trending" extended trending list={products}/> : null}
        {products.length > 0 ?  <ProductList title="Best Selling" text="This Week" list={products}/> : null}
      <Categories />
    </Container>
  )
}

export { Catalogue }









