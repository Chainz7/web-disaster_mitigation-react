import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari, img } from '../../../../../constants'

defineElement(lottie.loadAnimation);
function Top() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: .5rem;
    border-bottom: 1px solid rgba(210, 215, 211, 0.5);
  `
  const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    @media (max-width: 1250px) {
      width: 100%;
      margin-left: 2%;
      margin-right: 2%;
    }
    @media (max-width: 403px) {
      justify-content: center;
      gap: 3rem;
    }
  `
  const ItemContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    &:hover {
      .title-hover {
        color: ${vari.primary};
        transition: all 0.4s ease-in-out;
      }  
    }
    @media (max-width: 650px) {
      display: grid;
      justify-items: center;
    }
    @media (max-width: 403px) {
      &:hover {
    .title-hover {
      display: block;
      font-size: 11px;
      color: black;
    }
  }
}
  `
  const ImageContainer = styled(motion.div)`
    width: 2.5rem;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  `
  const ItemTitle = styled(motion.span)`
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    @media (max-width: 460px) {
      font-size: 14px;
    }
    @media (max-width: 403px) {
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
  return (
    <Container>
      <Wrapper>
        <Link to="/pelajari/artikel-1" className='link'>
          <ItemContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
            <ImageContainer variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              <Image src={img.learnIcon1} />
            </ImageContainer>
            <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              Banjir Bandang
            </ItemTitle>
          </ItemContainer>
        </Link>
        <Link to="/pelajari/artikel-2" className='link'>
          <ItemContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
            <ImageContainer variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              <Image src={img.learnIcon2} />
            </ImageContainer>
            <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              Tanah Longsor
            </ItemTitle>
          </ItemContainer>
        </Link>
        <Link to="/pelajari/artikel-3" className='link'>
          <ItemContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
            <ImageContainer variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              <Image src={img.learnIcon3} />
            </ImageContainer>
            <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              Gunung Meletus
            </ItemTitle>
          </ItemContainer>
        </Link>
        <Link to="/pelajari/artikel-4" className='link'>
          <ItemContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
            <ImageContainer variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              <Image src={img.learnIcon0} />
            </ImageContainer>
            <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              Bisa Terjadi Bersamaan ?
            </ItemTitle>
          </ItemContainer>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Top