import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari } from '../../../constants'

defineElement(lottie.loadAnimation);
function Right() {
  const opacityIn = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  const scaleIn = {
    whileInView: {
      scale: [0, 1],
      opacity: [1, 1],
      transition: {
        duration: .7,
        ease: 'easeIn'
      }
    }
  }
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      setIsFixed(scrollDistance > 75);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container style={{ display: isFixed ? 'flex' : '' }}>
      <Wrapper style={{ 
        position: isFixed ? 'fixed' : 'static',
        height: isFixed ? '3rem' : '100%',
        top: isFixed? 0 : 'auto'
      }} variant={isSmallScreen ? opacityIn : opacityIn} whileInView={isSmallScreen ? opacityIn.whileInView : opacityIn.whileInView} isSmallScreen={isSmallScreen}
      >
        <ItemContainer to="/kabar" className='link'>
          <LogoContainer variant={isSmallScreen ? opacityIn : scaleIn} whileInView={isSmallScreen ? opacityIn.whileInView : scaleIn.whileInView} isSmallScreen={isSmallScreen}>
            <lord-icon src="https://cdn.lordicon.com/iqocwzif.json" trigger="loop" delay="500" colors="primary:#66dac1,secondary:#ebe6ef" style={{width:"100%", height:"100%", objectFit:"cover"}}>
            </lord-icon>
          </LogoContainer>
          <ItemTitle variant={isSmallScreen ? opacityIn : scaleIn} whileInView={isSmallScreen ? opacityIn.whileInView : scaleIn.whileInView} isSmallScreen={isSmallScreen}>Kabar</ItemTitle>
        </ItemContainer>
        <ItemContainer to="/peta" className='link'>
          <LogoContainer variant={isSmallScreen ? opacityIn : scaleIn} whileInView={isSmallScreen ? opacityIn.whileInView : scaleIn.whileInView} isSmallScreen={isSmallScreen}>
            <lord-icon src="https://cdn.lordicon.com/oaflahpk.json" trigger="loop" delay="0" colors="primary:#66DAC1" state="loop-spin" style={{width:"100%", height:"100%", objectFit:"cover"}}>
            </lord-icon>
          </LogoContainer>
          <ItemTitle variant={isSmallScreen ? opacityIn : scaleIn} whileInView={isSmallScreen ? opacityIn.whileInView : scaleIn.whileInView} isSmallScreen={isSmallScreen}>Peta</ItemTitle>
        </ItemContainer>
        <ItemContainer to="/" className='link'>
          <LogoContainer variant={isSmallScreen ? opacityIn : scaleIn} whileInView={isSmallScreen ? opacityIn.whileInView : scaleIn.whileInView} isSmallScreen={isSmallScreen}>
            <lord-icon src="https://cdn.lordicon.com/dxoycpzg.json" trigger="morph" colors="primary:#f24c00,secondary:#646e78,tertiary:#66dac1,quaternary:#ebe6ef,quinary:#f9c9c0" style={{width:"100%", height:"100%", objectFit:"cover"}}>
            </lord-icon>
          </LogoContainer>
          <ItemTitle variant={isSmallScreen ? opacityIn : scaleIn} whileInView={isSmallScreen ? opacityIn.whileInView : scaleIn.whileInView} isSmallScreen={isSmallScreen}>Pelajari</ItemTitle>
        </ItemContainer>
      </Wrapper>
    </Container>
  )
}
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    padding-top: .5rem;
    padding-bottom: .6rem;
    z-index: 10;
    margin-top: -.5rem;
    @media (max-width: 610px) {
      display: flex;
    }
  `
  const Wrapper = styled(motion.div)`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-left: 1rem;
    padding-right: 1.5rem;
    background-color: ${vari.secondary};
    border-radius: 0 0 .5rem .5rem;
    border-bottom: 1px solid rgba(210, 215, 211, 0.5);
    border-left: 1px solid rgba(210, 215, 211, 0.5);
    border-right: 1px solid rgba(210, 215, 211, 0.5);
    box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    z-index: 99;
  `
  const ItemContainer = styled(Link)`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    &:hover {
      color: ${vari.primary};
      transition: all 0.4s ease-in-out;
    }
  `
  const LogoContainer = styled(motion.div)`
    width: 2rem;
    height: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const ItemTitle = styled(motion.span)`
    font-weight: 400;
    font-size: 15px;
  `

export default Right