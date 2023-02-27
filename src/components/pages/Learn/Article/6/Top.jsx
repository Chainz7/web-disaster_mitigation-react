import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari, img } from '../../../../../constants'

defineElement(lottie.loadAnimation);
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
      setIsFixed(scrollDistance > 75);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container style={{ 
      position: isFixed ? 'fixed' : 'static',
      top: isFixed? 0 : 'auto',
      zIndex: isFixed? 1000 : 0,
      backgroundColor: isFixed? 'white' : '',
    }}>
      <Wrapper>
        <Link to="/pelajari/artikel-5" className='link'>
          <ItemContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
            <ImageContainer variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              <Image src={img.learnIcon1} />
            </ImageContainer>
            <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              Banjir Bandang
            </ItemTitle>
          </ItemContainer>
        </Link>
        <Link to="/pelajari/artikel-6" className='link'>
          <ItemContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
            <ImageContainer variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              <Image src={img.learnIcon2} />
            </ImageContainer>
            <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              Tanah Longsor
            </ItemTitle>
          </ItemContainer>
        </Link>
        <Link to="/pelajari/artikel-7" className='link'>
          <ItemContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
            <ImageContainer variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              <Image src={img.learnIcon3} />
            </ImageContainer>
            <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
              Gunung Meletus
            </ItemTitle>
          </ItemContainer>
        </Link>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: .5rem;
  padding-bottom: .5rem;
  border-top: 1px solid rgba(210, 215, 211, 0.5);
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
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 760px) {
    font-size: 13px;
  }
  @media (max-width: 460px) {
    font-size: 12px;
  }
  @media (max-width: 403px) {
    display: none;
  }
`

export default Top