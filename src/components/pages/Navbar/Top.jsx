import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../constants'

function Left() {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-bottom: .5rem;
    border-bottom: 1px solid rgba(210, 215, 211, 0.5);
    box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
  `
  const Top = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  `
  const LogoContainer = styled.div`
    width: 3rem;
    height: 3rem;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
  `
  const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
  const Title = styled.span`
    font-weight: 600;
    font-size: 30px;
  `
  const Bottom = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Subtitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
  `
  const SubtitleSpan = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: ${vari.primary};
  `
  const leftIn = {
    whileInView: {
      x: [-50, 0],
      scale: [1, 1],
      opacity: [.5, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  const rightIn = {
    whileInView: {
      x: [50, 0],
      scale: [1, 1],
      opacity: [.5, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <Container>
      <Top variant={leftIn} whileInView={leftIn.whileInView}>
        <LogoContainer>
          <Logo src={img.logo}/>
        </LogoContainer>
        <Title>SiBena</Title>
      </Top>
      <Bottom variant={rightIn} whileInView={rightIn.whileInView}>
        <Subtitle>Sigap&nbsp;<SubtitleSpan>Bencana</SubtitleSpan>&nbsp;Alam</Subtitle>
      </Bottom>
    </Container>
  )
}

export default Left