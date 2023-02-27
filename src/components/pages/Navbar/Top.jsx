import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari, img } from '../../../constants'

defineElement(lottie.loadAnimation);
function Left() {
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
      scale: [0, 1],
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
        <Top variant={isSmallScreen ? bottomIn : opacityIn} whileInView={isSmallScreen ? bottomIn.whileInView : opacityIn.whileInView} whileHover={{ scale: 1.02 }} transition={{ duration: .4 }} isSmallScreen={isSmallScreen}>
          <LogoContainer>
            <Link to="/" className='link'>
              <Logo src={img.logo}/>
            </Link>
          </LogoContainer>
          <Link to="/" className='link'>
            <Title>Si<span className='title-hover'>Bena</span></Title>
          </Link>
        </Top>
      <Bottom variant={isSmallScreen ? bottomIn : opacityIn} whileInView={isSmallScreen ? bottomIn.whileInView : opacityIn.whileInView} whileHover={{ scale: 1.02 }} transition={{ duration: .4 }} isSmallScreen={isSmallScreen}>
        <Subtitle>Sigap&nbsp;<SubtitleSpan>Bencana</SubtitleSpan>&nbsp;Alam</Subtitle>
        <BottomItem to="/peta" className='link'>
          <BottomImageContainer>
            <lord-icon src="https://cdn.lordicon.com/oaflahpk.json" trigger="loop-on-hover" delay="100" colors="primary:#66dac1,secondary:#ebe6ef" style={{width:"100%", height:"100%", objectFit:"cover"}}></lord-icon>
          </BottomImageContainer>
          <BottomTitle>Peta</BottomTitle>
        </BottomItem>
        <BottomItem to="/kabar" className='link'>
          <BottomImageContainer>
          <lord-icon src="https://cdn.lordicon.com/iqocwzif.json" trigger="loop-on-hover" delay="100" colors="primary:#66DAC1" style={{width:"100%", height:"100%", objectFit:"cover"}}></lord-icon>
          </BottomImageContainer>
          <BottomTitle>Kabar</BottomTitle>
        </BottomItem>
        <BottomItem to="/" className='link'>
          <BottomImageContainer>
            <lord-icon src="https://cdn.lordicon.com/dxoycpzg.json" trigger="morph" state="morph" colors="primary:#f24c00,secondary:#646e78,tertiary:#66dac1,quaternary:#ebe6ef,quinary:#f9c9c0" style={{width:"100%", height:"100%", objectFit:"cover"}}></lord-icon>
          </BottomImageContainer>
          <BottomTitle>Pelajari</BottomTitle>
        </BottomItem>
      </Bottom>
      </Wrapper>
    </Container>
  )
}
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(210, 215, 211, 0.5);
    box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    background-color: white;
  `
  const Wrapper = styled.div`
    width: 1250px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: .5rem;
    background-color: white;
    z-index: 100;
    @media (max-width: 1200px) {
      width: 100%;
    }
    @media (max-width: 610px) {
      width: 100%;
      height: 100%;
      display: grid;
      justify-items: center;
      align-items: center;
      padding-bottom: .5rem;
      border-bottom: 1px solid rgba(210, 215, 211, 0.5);
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
      z-index: 100;
    }
  `
  const Top = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    margin-left: 2rem;
    &:hover {
      .title-hover {
        color: ${vari.primary};
        transition: all 0.4s ease-in-out;
      }  
    }
    @media (max-width: 610px) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      margin-left: 0;
    }
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
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin-right: 2rem;
    cursor: default;
    @media (max-width: 610px) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      margin-right: 0;
    }
  `
  const Subtitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    display: none;
    @media (max-width: 610px) {
      display: block;
    }
  `
  const SubtitleSpan = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: ${vari.primary};
  `
  const BottomItem = styled(Link)`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: ${vari.primary};
      transition: all 0.4s ease-in-out;
    }
    @media (max-width: 610px) {
      display: none;
    }
  `
  const BottomImageContainer = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const BottomTitle = styled.div`
    font-weight: 400;
    font-size: 15px;
  `

export default Left