import styled from '@emotion/styled';

export class Styled {

Container = styled('div')`
  min-height: ${props => props.auto ? 'auto' : '100vh'} ;
  width: auto;
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.column ? 'space-around' : 'space-between'};
  align-items: ${props => !props.column && 'center'};
  overflow-x: ${props => props.column && 'scroll'};
  overflow-y: ${props => props.column ? 'scroll' : 'hidden'};

  & > img {
    width: 100%;
  }
`;

Section = styled('section')`
padding: 10px 20px;
`;

Header = styled('header')`
  padding: 20px;
  margin-bottom: ${props => props.mb};
`;

Heading = styled('h1')`
  margin-top: ${props => props.mt || 'unset'};
  font-size: ${props => props.fs};
  line-height: ${props => props.lh}
`;

SubHeading = this.Heading.withComponent('h2');

HeadingSpan = styled('span')`
  font-size: 10px;
  line-height: 12px;
  color: #9B9B9B;
  margin-left: 10px;
`;

Button = styled('button')`
  box-sizing: border-box;
  width: ${props => props.w};
  height: ${props => props.h};
  box-shadow: ${props => props.shadowed && '0px 24px 24px rgba(55, 115, 187, 0.4);'};
  line-height: 18px;
  color: #FFFFFF;
  text-align: center;
  font-size: ${props => props.fs};
  border: 0;
  border-radius: 5px;
  background-color: #8ea2ff;
  padding: 0;
  color: #fff;
  display: ${props => props.inline ? "inlin-block" : "block"};
  margin: ${props => props.inline ? "20px 0 0 0" : "20px auto 30px auto"};
  cursor: pointer;
 `;


StyledLink = styled('div')`
  text-align: center;
  & > a {
  color: #8ea2ff;
  text-decoration: none;
  }
`;

ProductImageContainer = styled('div')`
  position: relative;
  margin-right: ${props => props.extended ? "10px" : 0};

  &  img {
    height: ${props => !props.extended && "119px"};
    width: ${props => !props.extended && "95px"};
    border-radius: ${props => props.rounded && '5px'}
  }

& > span {
  position: absolute;
  top: 8px;
  left: 8px;
  display: block;
  width: 40px;
  height: 20px;
  background-color: rgba(142, 162, 255, 0.5) ;
  backdrop-filter: blur(27.1828px);
  border-radius: 3px;
  font-size: 15px;
  line-height: 20px;
  color: #FFFFFF;
  padding-top: 3px;
  text-align: center;
}
`;


TextMinor = styled('span')`
  color: #9B9B9B;
  font-weight: 200;
  font-size: 10px;
  margin-left: 10px;
  display: inline-block;
`;

CategoryContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  align-self: stretch;

& > span {
  font-size: 11;
  font-weight: 200;
  color: #4A4A4A;
  text-align: center;
  margin-top: 10px;
}
`;

HeadingContainer = styled('div')`
  display: flex;
  align-items: baseline;
  position: relative;

  & > a {
    position: absolute;
    margin-right: 10px;
    right: 0;
    font-size: 12px;
    color: #557AC7;
  }
  
  & > span {
    font-size: 10px;
    line-height: 12px;
    color: #9B9B9B;
    margin-left: 10px;
    margin-bottom: 0.9rem;
  }
`;


Input = styled('input')`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border: none;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

InputWithIcon = styled('div')`
  position: relative;
  & > svg {
    position: absolute;
    right: 5%;
    top: 25%
  }
`;

ProductCardContainer = styled('div')`
  display: flex;
  flex-direction: ${props => !props.extended ? 'column' : 'row'};
  justify-content: ${props => !props.extended ? 'space-between' : 'left'};
  ${props => props.extended ? 'min-width: 310px' : 'width: auto'};
  heigth: 170px;
  background: #FFFFFF;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  margin-right: 5px;
  min-height: 205px;

  & > div:last-of-type {
    dixplay: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

ProductCardTitle = styled('h2')`
  font-weight: 200;
  font-size: 18px;
  margin-top: ${props => props.extended ? '0.8rem' : '0px'};
  margin-bottom: ${props => props.extended ? '0.8rem' : '0px'};
  padding-right: 5px;
`;

ProductCardSubtitle = styled('h3')`
  font-weight: 200;
  font-size: 13px;
  line-height: 18px;
  color: #9B9B9B;
`;

Price = styled('div')`
  font-weight: 200;
  font-size: 20px;
  line-height: 18px;
  color: #4A4A4A;
  margin-bottom: 15px;
`;

TextSecondary = styled('span')`
  font-size: 11px;
  color: #9B9B9B;
  font-weight: 200;
`;

SizeContainer = styled('div')`
  display: inline-block;
`

ProductAmountContainer = styled('div')`
  width: 78px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 2.33333px;
  margin: 20px 20px 0 0;

  & > span {
    color: #8EA2FF;
    cursor: pointer;
  }
`;

SizeLabel = styled('label')`
  display: flex;
  flex-direction: column;
  width: 85px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid #C7C7C7;
  box-sizing: border-box;
  border-radius: 2px;
  color: #4A4A4A;
  background-color: #FFFFFF;
  z-index: 10;
  margin-right: 15px;
  cursor: pointer;

  input:checked + & {
    border: 1px solid #8EA2FF;
  }

  & > span {
    color: #9B9B9B;
    font-size: 11px;
    font-weight: 200;
  }
`;

SizeInput = styled('input')`
  position: absolute;
  top: 0;
  visibility: hidden;
`;

BackButton = styled('div')`
  width: 100%;
  padding: 10px 0 0 10px;

  & > span {
    color: #000000;
    font-size: 18px;
}
`;


ModalOverlay = styled('div')`
  width: 100vw; 
  height: 100vh; 
  position: fixed; 
  top: 0; 
  left: 0;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }

  & > section {
    position: relative;
    width: 80vw;
    box-shadow: 0 19px 60px rgba(0,0,0,.3), 0 15px 20px rgba(0,0,0,.22);
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 1;
    z-index: 400;
    border-radius: 2px;

    & > div {
      padding: 2rem;
      background-color: #FFFFFF;
      opacity: 1;
      border-radius: 2px;
    }
  }
`;
}
