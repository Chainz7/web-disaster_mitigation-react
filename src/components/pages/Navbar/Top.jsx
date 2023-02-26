import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../constants'
import { Link } from 'react-router-dom'

function Left() {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: .5rem;
    border-bottom: 1px solid rgba(210, 215, 211, 0.5);
    box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    z-index: 100;
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
    gap: .5rem;
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
  `
  const SubtitleSpan = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: ${vari.primary};
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
        <Top variant={isSmallScreen ? bottomIn : opacityIn}
            whileInView={isSmallScreen ? bottomIn.whileInView : opacityIn.whileInView}
            whileHover={{ scale: 1.02 }} transition={{ duration: .4 }}
            isSmallScreen={isSmallScreen}>
          <LogoContainer>
            <Link to="/" className='link'>
              <Logo src={img.logo}/>
            </Link>
          </LogoContainer>
          <Link to="/" className='link'>
            <Title>Si<span className='title-hover'>Bena</span></Title>
          </Link>
        </Top>
      <Bottom variant={isSmallScreen ? bottomIn : opacityIn}
          whileInView={isSmallScreen ? bottomIn.whileInView : opacityIn.whileInView}
          whileHover={{ scale: 1.02 }} transition={{ duration: .4 }}
          isSmallScreen={isSmallScreen}>
        <Subtitle>Sigap&nbsp;<SubtitleSpan>Bencana</SubtitleSpan>&nbsp;Alam</Subtitle>
      </Bottom>
    </Container>
  )
}

export default Left