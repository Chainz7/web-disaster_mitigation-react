import React from 'react'
import styled from 'styled-components'

import Content from './Content'

function Wrapper() {
  return (
    <Container>
      <Wrap>
        <Content />
      </Wrap>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const Wrap = styled.div`
  width: 1300px;
  height: 100%;
  display: flex;
  justify-content: center;
`
export default Wrapper