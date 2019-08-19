import React, { useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Styled} from './styled/StyledComponents';
import {Rating} from './Rating';
import {ProductList} from './ProductList';
import {CartServiceContext} from '../context/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {ApiServiceContext} from '../context/context';
import {images} from '../data/data';

const styled = new Styled();
const {Container, Section, Heading, ProductCardSubtitle, ProductImageContainer, TextSecondary, Price, SizeContainer, Button, ProductAmountContainer, SizeLabel, SizeInput, BackButton} = styled;

const ProductPage = (props) => {
  if (props.location.id) {
    sessionStorage.productId = props.location.id;
  }
  const id = props.location.id || sessionStorage.productId;
  const index = props.location.index;

  const api = useContext(ApiServiceContext);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    api.getItems()
      .then(data => {
        setProducts(data);
        const current = data.find(el => el["_id"] === id);
        if (!current) {
          throw new Error("Product Not Found");
        } else {
          setCurrentProduct(current);
        }
      })
  }, [id]);

  return (currentProduct && 
    <Container column auto>
      <Link to='/catalogue'><BackButton>
        <span><FontAwesomeIcon icon={faArrowLeft } /></span>
      </BackButton></Link>
      <ProductInfo index={index} name={currentProduct.name} store={currentProduct.company} price={currentProduct.price} description={currentProduct.about.substring(0, 75) + "..."} />
      <ProductRating stars={currentProduct.rate.indexOf(Math.max.apply(null, currentProduct.rate)) + 1} votes={currentProduct.rate.reduce((p, c) => p + c, 0)}/>
      <Section>
        <ProductForm product={currentProduct}/>
      </Section>        
      <ProductList title="Related Products" text=" " list={products.reverse()}/> 
    </Container>
  )
}

const ProductForm = ({product}) => {
  const { sizes } = product;
  const [amount, setAmount] = useState(1);
  return (
    <form>
      <ProductCardSubtitle>Size</ProductCardSubtitle>
      <ProductSizes sizes={sizes} />
      <ProductAmount value={amount} onChange={amount => setAmount(amount)}/>
      <CartServiceContext.Consumer>
        {context => <Button onClick={event => {event.preventDefault(); context.addItem(product)}} inline w="143px" h="42px">Add to cart</Button>}
      </CartServiceContext.Consumer>
    </form>
  )
}

const  ProductInfo = (props) => {
  const {name, store, price, description, index} = props;
  return (
    <Section>
      <Container auto>
        <div>
          <Heading fs="24px" mt="0px">{name}</Heading>
          <ProductCardSubtitle>{store}</ProductCardSubtitle>
          <Price>${price}</Price>
          <ProductDescription description={description}/>
        </div>
        <ProductImageContainer>
          <img src={images[index]} alt="product"/>
        </ProductImageContainer>
      </Container>
    </Section>
  )
}

const ProductDescription = ({description}) => (
  <TextSecondary>{description}</TextSecondary>
)

const ProductRating = ({stars, votes}) => {
  return (
    <Section>
      <ProductCardSubtitle>Rating</ProductCardSubtitle>
      <Rating stars={stars} votes={votes} large/>
    </Section>
  )
}

const ProductSizes = ({sizes}) => {
  return (
    <div>
      {sizes.small && <Size checked name="Small" dimensions="10cm x 24cm"/>}
      {sizes.medium && <Size checked={!sizes.small} name="Medium" dimensions="14cm x 28cm"/>}
      {sizes.big && <Size checked={!sizes.small && !sizes.medium} name="Big" dimensions="18cm x 32cm"/>}
    </div>
  )
}

const Size = ({name, dimensions, checked}) => (
  <SizeContainer>
    <SizeInput defaultChecked={checked} type="radio" id={name} name="size"/>
    <SizeLabel htmlFor={name} name="size">
      {name}
      <span>{dimensions}</span>
    </SizeLabel>
  </SizeContainer>
);

const ProductAmount = ({value, onChange}) => {
  const handleChange = action => {
    if (action === 'dec') {
      if (value === 1) {
        return;
      }
      onChange(value - 1);
    } else {
      onChange(value + 1);
    }
  }
  return (
    <ProductAmountContainer>
      <span onClick={() => handleChange('dec')}><FontAwesomeIcon icon={faChevronLeft }/></span>
      <div>{value}</div>
      <span onClick={() => handleChange('inc')}><FontAwesomeIcon icon={faChevronRight }/></span>
    </ProductAmountContainer>
  )
}

export {ProductPage}