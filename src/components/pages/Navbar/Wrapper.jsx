import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../constants'
import Top from './Top'
import Bottom from './Bottom'

function Wrapper() {
  const Container = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    justify-items: center;
    align-items: flex-start;
    margin-top: .5rem;
    margin-bottom: .5rem;
  `
  return (
    <Container>
      <Top />
      <Bottom />
    </Container>
  )
}

export default Wrapper