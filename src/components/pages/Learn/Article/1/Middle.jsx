import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Content from '../Content/C1'

function Top() {
  const opacityIn = {
    whileInView: {
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
      }
    }
  }
  const bottomIn = {
    whileInView: {
    y: [30, 0],
    scale: [1, 1],
    opacity: [0, 1],
    transition: {
      duration: .7,
      ease: 'easeInOut'
      }
    }
  }
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      if (scrollDistance > 75) {
        document.querySelector('.top').style.paddingTop = '8rem';
      } else {
        document.querySelector('.top').style.paddingTop = '';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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