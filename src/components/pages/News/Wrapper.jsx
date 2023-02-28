import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Left from './Left'
import Right from './Right'

function Wrapper() {
  return (
    <Container>
      <TitleContainer>
        <Title>Kabar Bencana</Title>
      </TitleContainer>
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
  gap: 2rem;
`
const TitleContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: red;
    @media (max-width: 1200px) {
    width: auto;
    margin-left: 2%;
    margin-right: 2%;
  }
`
const Title = styled(motion.span)`
  font-weight: 400;
  font-size: 26px;
`
const Wrap = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: red;
    @media (max-width: 1200px) {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }
`
export default Wrapper