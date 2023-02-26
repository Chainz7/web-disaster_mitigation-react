import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../constants'
import { Link } from 'react-router-dom'

function Left() {
  const Container = styled.div`
    width: 37%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    gap: 1rem;
    @media (max-width: 610px) {
      width: 100%;
      height: 100%;
      display: grid;
      justify-items: center;
      align-items: start;
      gap: 1rem;
    }
  `
  const TopContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `
  const TopTitle = styled.span`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 18px;
  `
  const BottomContainer = styled.div`
    display: grid;
    justify-content: start;
    align-items: start;
    gap: .5rem;
  `
  const BottomItem = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `
  const TopImageContainer = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
  `
  const TopImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
  const BottomTitle = styled.span`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    color: ${vari.quartery};
    cursor: default;
  `
  const Copyright = styled(motion.span)`
    display: block;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    color: ${vari.quartery};
    @media (max-width: 610px) {
      display: none;
    }
  `
  const opacityIn = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  const topIn = {
    whileInView: {
      y: [-50, 0],
      scale: [1, 1],
      opacity: [0, 1],
      transition: {
        duration: .7,
        ease: 'easeInOut'
      }
    }
  }
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  return (
    <Container>
      <TopContainer variant={isSmallScreen ? opacityIn : topIn}
          whileInView={isSmallScreen ? opacityIn.whileInView : topIn.whileInView}
          isSmallScreen={isSmallScreen}>
        <TopImageContainer>
          <TopImage src={img.team} />
        </TopImageContainer>
        <TopTitle>Our Team</TopTitle>
      </TopContainer>
      <BottomContainer>
        <BottomItem variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
          <BottomTitle>Nama :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NIM999999</BottomTitle>
        </BottomItem>
        <BottomItem variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
          <BottomTitle>Nama :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NIM999999</BottomTitle>
        </BottomItem>
        <BottomItem variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
          <BottomTitle>Nama :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NIM999999</BottomTitle>
        </BottomItem>
        <BottomItem variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
          <BottomTitle>Nama :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NIM999999</BottomTitle>
        </BottomItem>
      </BottomContainer>
      <Copyright variant={isSmallScreen ? opacityIn : topIn}
          whileInView={isSmallScreen ? opacityIn.whileInView : topIn.whileInView}
          isSmallScreen={isSmallScreen}>©Copyright 2023 SiBena</Copyright>
    </Container>
  )
}

export default Left