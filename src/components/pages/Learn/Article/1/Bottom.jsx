import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari, img } from '../../../../../constants'

defineElement(lottie.loadAnimation);
function Bottom() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
    padding-bottom: 2.5rem;
    background-color: ${vari.articleBottom};
    border: 1px solid rgba(210, 215, 211, 0.5);
    box-shadow: 0 -2px 4px 0 rgba(210, 215, 211, 0.5); 
  `
  const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20rem;
    @media (max-width: 1250px) {
      width: 100%;
      margin-left: 2%;
      margin-right: 2%;
    }
    @media (max-width: 810px) {
      gap: 10rem;
    }
    @media (max-width: 650px) {
      gap: 1rem;
    }
  `
  const ItemContainer = styled.div`
    width: 100%;
    display: grid;
    gap: 1.5rem;
  `
  const Title = styled(motion.span)`
    font-weight: 500;
    font-size: 18px;
    @media (max-width: 650px) {
      text-align: center;
    }
  `
  const ItemWrapper = styled(motion.div)`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 2px;
    border: 1px solid rgba(210, 215, 211, 0.5);
    box-shadow: 2px 2px 4px 2px rgba(210, 215, 211, 0.5); 
    &:hover {
      .title-hover {
        color: ${vari.primary};
        transition: all 0.4s ease-in-out;
      }  
    }
    @media (max-width: 650px) {
      width: 90%;
    }
    @media (max-width: 542px) {
      padding: .75rem;
    }
    @media (max-width: 470px) {
      padding: .5rem;
    }
  `
  const ItemImageContainer = styled(motion.div)`
    width: 2rem;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const ItemImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  `
  const ItemTitle = styled(motion.span)`
   text-align: center;
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 542px) {
      font-size: 14px;
    }
    @media (max-width: 470PX) {
      font-size: 12px;
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
        <ItemContainer>
          <Title variant={isSmallScreen ? opacityIn : bottomIn}
                whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
                isSmallScreen={isSmallScreen}>Saat ini</Title>
          <Link to="/pelajari/artikel-1" className='link'>
            <ItemWrapper variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ItemImageContainer variant={isSmallScreen ? opacityIn : bottomIn}
                  whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
                  isSmallScreen={isSmallScreen}>
                <ItemImage src={img.learn1}/>
              </ItemImageContainer>
              <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn}
                  whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
                  isSmallScreen={isSmallScreen}>Bencana</ItemTitle>
            </ItemWrapper>
          </Link>
        </ItemContainer>
        <ItemContainer>
          <Title variant={isSmallScreen ? opacityIn : bottomIn}
                whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
                isSmallScreen={isSmallScreen}>Selanjutnya</Title>
          <Link to="/pelajari/artikel-5" className='link'>
            <ItemWrapper variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
              <ItemImageContainer variant={isSmallScreen ? opacityIn : bottomIn}
                  whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
                  isSmallScreen={isSmallScreen}>
                <ItemImage src={img.learn2}/>
              </ItemImageContainer>
              <ItemTitle className='title-hover' variant={isSmallScreen ? opacityIn : bottomIn}
                  whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
                  isSmallScreen={isSmallScreen}>Kapan Bencana Terjadi ?</ItemTitle>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      </Wrapper>
    </Container>
  )
}

export default Bottom