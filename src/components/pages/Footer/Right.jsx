import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../constants'
import { Link } from 'react-router-dom'

function Right() {
  const Container = styled.div`
    width: 63%;
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
  const TopContainer = styled.div`

  `
  const TopImageContainer = styled(motion.div)`
    width: 6rem;
    height: 6rem;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
  `
  const TopImage = styled.img`
    width: 100%;
    height: 100%;
    opacity: .9;
    object-fit: cover;
  `
  const BottomContainer = styled.div`
    display: grid;
    justify-items: center;
    margin-bottom: 4rem;
  `
  const BottomTitle = styled(motion.span)`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 17px;
    color: ${vari.quartery};
  `
  const Copyright = styled(motion.span)`
    display: none;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    color: ${vari.quartery};
    @media (max-width: 610px) {
      display: block;
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
      <TopContainer>
        <TopImageContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
          <TopImage src={img.um} />
        </TopImageContainer>
      </TopContainer>
      <BottomContainer>
        <BottomTitle variant={isSmallScreen ? opacityIn : topIn}
          whileInView={isSmallScreen ? opacityIn.whileInView : topIn.whileInView}
          isSmallScreen={isSmallScreen}>S1 Pendidikan Ilmu Pengetahuan Sosial</BottomTitle>
        <BottomTitle variant={isSmallScreen ? opacityIn : topIn}
          whileInView={isSmallScreen ? opacityIn.whileInView : topIn.whileInView}
          isSmallScreen={isSmallScreen}>Fakultas Ilmu Sosial </BottomTitle>
        <BottomTitle variant={isSmallScreen ? opacityIn : topIn}
          whileInView={isSmallScreen ? opacityIn.whileInView : topIn.whileInView}
          isSmallScreen={isSmallScreen}>Universitas Negeri Malang</BottomTitle>
      </BottomContainer>
      <Copyright variant={isSmallScreen ? opacityIn : topIn}
          whileInView={isSmallScreen ? opacityIn.whileInView : topIn.whileInView}
          isSmallScreen={isSmallScreen}>©Copyright 2023 SiBena</Copyright>
    </Container>
  )
}

export default Right