import React from 'react'
import styled from 'styled-components'

import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'

function Wrapper() {
  return (
    <Container>
      <Top />
      <Middle />
      <Bottom />
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
  gap: 1rem;
`
export default Wrapper