import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari, img } from '../../../constants'

defineElement(lottie.loadAnimation);
function Right() {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: .55rem;
    padding-bottom: .6rem;
    z-index: 100;
  `
  const Wrapper = styled.div`
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
  const scaleIn = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: .7,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <Container>
      <Wrapper>
        <ItemContainer to="/kabar" className='link'>
          <LogoContainer variant={scaleIn} whileInView={scaleIn.whileInView}>
            <lord-icon
                  src="https://cdn.lordicon.com/iqocwzif.json"
                  trigger="loop"
                  delay="500"
                  colors="primary:#66dac1,secondary:#ebe6ef"
              style={{width:"100%", height:"100%", objectFit:"cover"}}>
            </lord-icon>
          </LogoContainer>
          <ItemTitle variant={scaleIn} whileInView={scaleIn.whileInView}>Kabar</ItemTitle>
        </ItemContainer>
        <ItemContainer to="/" className='link'>
          <LogoContainer variant={scaleIn} whileInView={scaleIn.whileInView}>
            <lord-icon
              src="https://cdn.lordicon.com/dxoycpzg.json"
              trigger="morph"
              colors="primary:#f24c00,secondary:#646e78,tertiary:#66dac1,quaternary:#ebe6ef,quinary:#f9c9c0"
              state="morph"
              style={{width:"100%", height:"100%", objectFit:"cover"}}>
            </lord-icon>
          </LogoContainer>
          <ItemTitle variant={scaleIn} whileInView={scaleIn.whileInView}>Pelajari</ItemTitle>
        </ItemContainer>
        <ItemContainer to="/peta" className='link'>
          <LogoContainer variant={scaleIn} whileInView={scaleIn.whileInView}>
            <lord-icon
              src="https://cdn.lordicon.com/oaflahpk.json"
              trigger="loop-on-hover"
              delay="100"
              colors="primary:#66DAC1"
              style={{width:"100%", height:"100%", objectFit:"cover"}}>
            </lord-icon>
          </LogoContainer>
          <ItemTitle variant={scaleIn} whileInView={scaleIn.whileInView}>Peta</ItemTitle>
        </ItemContainer>
      </Wrapper>
    </Container>
  )
}

export default Right