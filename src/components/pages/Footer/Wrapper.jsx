import React from 'react'
import styled from 'styled-components'

import { vari, img } from '../../../constants'
import Left from './Left'
import Right from './Right'

function Wrapper() {
  const Container = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
    padding-top: 2.2rem;
    padding-bottom: .2rem;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px solid rgba(210, 215, 211, 0.5);
    box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    @media (max-width: 610px) {
      width: auto;
      height: auto;
      display: grid;
      justify-content: center;
      align-items: start;
      gap: 2.5rem;
      padding-top: 2.2rem;
      padding-bottom: .2rem;
      margin-left: auto;
      margin-right: auto;
    }
  `
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  )
}

export default Wrapper