import React from 'react';
import { Styled }  from './styled/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const {InputWithIcon, Input} = new Styled();

const SearchInput = () => (
  <InputWithIcon>
    <Input type="text" placeholder="Search"></Input>
    <FontAwesomeIcon icon={faSearch}/>
  </InputWithIcon>
)

export {SearchInput}