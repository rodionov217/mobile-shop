import React from 'react';
import {Link} from 'react-router-dom';
import {Styled}  from './styled/StyledComponents';
import {Rating} from './Rating';
import productImg from '../img/product-img.png';
import books from '../img/books.png';
import longCard from '../img/long-card.png';
import specialCard from '../img/special-card.png';
import pen from '../img/pen.png';
import {CartServiceContext} from '../context/context';

const {ProductCardContainer, ProductImageContainer, ProductCardTitle, ProductCardSubtitle, Button} = new Styled();

const ProductCard = (props) => {
  const images = [productImg, books, longCard, specialCard, pen, productImg];
  const {extended, product} = props;

  return (
    <ProductCardContainer extended={extended} >
      <ProductImageContainer extended={extended} rounded>
        <Link to={{ pathname: '/product', id: product["_id"], index: product.index }}><img src={images[product.index]} alt="product"/></Link>
        <span>${product.price}</span>
      </ProductImageContainer>
      <div>
        <Link to={{ pathname: '/product', id: product["_id"], index: product.index }}><ProductCardTitle extended={extended}>{product.name}</ProductCardTitle></Link>
        {extended && <ProductCardSubtitle>{product.company}</ProductCardSubtitle>}
        <Rating stars={product.rate.indexOf(Math.max.apply(null, product.rate)) + 1} votes={product.rate.reduce((p, c) => p + c, 0)}/> 
        {extended && <CartServiceContext.Consumer>
            {context => <Button onClick={() => context.addItem(product)} inline w="90px" h="30px">Add to cart</Button>}
          </CartServiceContext.Consumer>
        }
      </div>
    </ProductCardContainer>
  )
}

export {ProductCard}