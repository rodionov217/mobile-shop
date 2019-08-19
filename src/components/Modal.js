import React from 'react';
import {Styled}  from './styled/StyledComponents';

const {ModalOverlay, Button} = new Styled();

const Modal = ({visible, hide}) => {
  return visible && (
    <ModalOverlay>
      <div></div>
      <section>
        <div>The item was added to cart!</div>
        <Button w="80%" h="40px" onClick={() => hide()}>OK</Button>
      </section>
    </ModalOverlay>
 )

}

export {Modal}
