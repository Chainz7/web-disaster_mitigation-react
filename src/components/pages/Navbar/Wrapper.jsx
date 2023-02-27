import React from 'react'
import styled from 'styled-components'

import Top from './Top'
import Bottom from './Bottom'

function Wrapper() {
  return (
    <Container>
      <Top />
      <Bottom />
    </Container>
  )
}
  const Container = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    justify-items: center;
    align-items: flex-start;
    margin-top: .5rem;
  `

export default Wrapper