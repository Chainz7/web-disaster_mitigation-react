import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Left from './Left'
import Right from './Right'

function Wrapper() {
  return (
    <Container>
      <Title>Kabar Bencana</Title>
      <Wrap>
        <Left />
        <Right />
      </Wrap>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
  margin-top: 1.1rem;
  margin-bottom: 2rem;
  gap: 2rem;
`
const Title = styled(motion.span)`
  font-weight: 500;
  font-size: 28px;
`
const Wrap = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1200px) {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
    gap: 1rem;
  }
  @media (max-width: 878px) {
    display: grid;
    justify-items: center;
    align-items: flex-start;
    gap: 0;
  }
`
export default Wrapper