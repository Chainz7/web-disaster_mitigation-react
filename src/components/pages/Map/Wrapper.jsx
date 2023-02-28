import React from 'react'
import styled from 'styled-components'

import { vari } from '../../../constants'
import Left from './Left'
import Right from './Right'

function Wrapper() {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  )
}
const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 10rem;
  margin-top: -2.5rem;
  padding-bottom: 5rem;
  padding-top: 3.6rem;
  background-color: ${vari.tertiary};
  z-index: 1;
  @media (max-width: 1067px) {
    gap: 1rem;
  }
`
export default Wrapper