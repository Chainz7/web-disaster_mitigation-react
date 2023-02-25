import React from 'react'
import styled from 'styled-components'

import { vari, img } from '../../../constants'
import One from './components/One'
import Two from './components/Two'

function Wrapper() {
  const Container = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    margin-top: -2.5rem;
    padding-top: 3.6rem;
    background-color: ${vari.tertiary};
    z-index: 1;
    @media (max-width: 1067px) {
      margin-top: -1rem;
      padding-top: 3.6rem;
    }
  `
  return (
    <Container>
      <One />
      <Two />
    </Container>
  )
}

export default Wrapper