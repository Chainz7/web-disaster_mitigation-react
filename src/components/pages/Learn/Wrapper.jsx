import React from 'react'
import styled from 'styled-components'

import { vari, img } from '../../../constants'
import { One, Two, Three, Four, Five, Six, Seven, Eight } from './components'

function Wrapper() {
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
  return (
    <Container>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
    </Container>
  )
}

export default Wrapper