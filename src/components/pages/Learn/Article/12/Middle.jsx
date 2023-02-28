import React from 'react'
import styled from 'styled-components'

import Content from '../Content/C12'

function Top() {
  return (
    <Container className='top'>
      <Wrapper>
        <ItemContainer>
          <Content />
        </ItemContainer>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const Wrapper = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 745px) {
    width: auto;
    margin-left: 2%;
    margin-right: 2%;
  }
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 475px) {
    justify-content: center;
    align-items: center;
  }
`

export default Top