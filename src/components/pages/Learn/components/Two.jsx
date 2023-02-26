import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari, img } from '../../../../constants'

defineElement(lottie.loadAnimation);
function Two() {
  const Container = styled(motion.div)`
    width: 900px;
    height: 400px;
    display: grid;
    position: relative;
    justify-items: center;
    align-items: center;
    border-radius: 0 0 .5rem .5rem;
    background-image: url(${img.background});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 1067px) {
      width: 100%;
      height: 100%;
      align-items: start;
      margin-top: 6rem;
      margin-bottom: 1.4rem;
      padding-bottom: 1.6rem;
      background-position: top;
      background-size: 27rem;
    }
  `
  const Order = styled(motion.div)`
    position: absolute;
    left: 0;
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 120px;
    color: gray;
    opacity: .1;
    cursor: default;
    &:hover {
      opacity: .5;
      transition: all 0.4s ease-in-out;
    }
    @media (max-width: 1067px) {
      display: none;
    }
  `
  const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: default;
    @media (max-width: 1067px) {
      position: relative;
    }
  `
  const ImageContainer = styled(motion.div)`
    width: 17.5rem;
    height: 17.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
  const TitleContainer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    background-color: ${vari.secondaryTransparent};
  `
  const Title = styled(motion.span)`
    text-align: center;
    padding-top: .3rem;
    padding-bottom: .3rem;
    font-weight: 500;
    font-size: 26px;
  `
  const SubContainer1 = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    left: 21rem;
    top: .5rem;
    &:hover {
      .subtitle-hover {
        color: ${vari.primary};
        transition: all 0.4s ease-in-out;
      }  
    }
    @media (max-width: 1067px) {
      width: 35rem;
      position: relative;
      justify-content: flex-start;
      gap: .5rem;
      left: 0;
      top: 0;
      margin-top: 1rem;
      padding-left: 1rem;
      padding-top: .5rem;
      padding-bottom: .5rem;
      background-color: white;
      border: 1px solid rgba(210, 215, 211, 0.5);
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    }
    @media (max-width: 610px) {
      width: 93%;
    }
  `
  const SubContainer3 = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    left: 7rem;
    bottom: 3rem;
    &:hover {
      .subtitle-hover {
        color: ${vari.primary};
        transition: all 0.4s ease-in-out;
      }  
    }
    @media (max-width: 1067px) {
      width: 35rem;
      position: relative;
      justify-content: flex-start;
      gap: .5rem;
      left: 0;
      bottom: 0;
      padding-left: 1rem;
      padding-top: .5rem;
      padding-bottom: .5rem;
      background-color: white;
      border: 1px solid rgba(210, 215, 211, 0.5);
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    }
    @media (max-width: 610px) {
      width: 93%;
    }
  `
  const SubContainer4 = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    right: 3rem;
    bottom: 6rem;
    &:hover {
      .subtitle-hover {
        color: ${vari.primary};
        transition: all 0.4s ease-in-out;
      }  
    }
    @media (max-width: 1067px) {
      width: 35rem;
      position: relative;
      justify-content: flex-start;
      gap: .5rem;
      right: 0;
      bottom: 0;
      padding-left: 1rem;
      padding-top: .5rem;
      padding-bottom: .5rem;
      background-color: white;
      border: 1px solid rgba(210, 215, 211, 0.5);
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    }
    @media (max-width: 610px) {
      width: 93%;
    }
  `
  const SubImageContainer = styled(motion.div)`
    width: 4rem;
    height: 4rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1067px) {
      width: 3rem;
      height: 3rem;
    }
  `
  const SubImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;

  `
  const SubTitleContainer = styled.div`
    width: 11rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1067px) {
      width: auto;
    }
  `
  const SubTitle = styled(motion.span)`
    font-weight: 500;
    font-size: 17px;
    @media (max-width: 1067px) {
      font-weight: 500;
      font-size: 16px;
    }
  `
  const opacityIn = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: .7,
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
    <Container variant={opacityIn} whileInView={opacityIn.whileInView}>
      <Order>2</Order>
      <MainContainer>
        <ImageContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
          <Image src={img.learn2}/>
          <TitleContainer>
            <Title variant={isSmallScreen ? opacityIn : bottomIn}
                whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
                isSmallScreen={isSmallScreen}>Kapan Bencana Terjadi ?</Title>
          </TitleContainer>
        </ImageContainer>
      </MainContainer>
      <SubContainer1 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/pelajari/artikel-5" className='link'>
          <SubImageContainer variant={isSmallScreen ? opacityIn : bottomIn}
              whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
              isSmallScreen={isSmallScreen}>
            <SubImage src={img.learnIcon1}/>
          </SubImageContainer>
        </Link>
        <Link to="/pelajari/artikel-5" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={isSmallScreen ? opacityIn : bottomIn}
              whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
              isSmallScreen={isSmallScreen}>Banjir Bandang</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer1>
      <SubContainer3 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/pelajari/artikel-6" className='link'>
          <SubImageContainer variant={isSmallScreen ? opacityIn : bottomIn}
              whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
              isSmallScreen={isSmallScreen}>
            <SubImage src={img.learnIcon2}/>
          </SubImageContainer>
        </Link>
        <Link to="/pelajari/artikel-6" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={isSmallScreen ? opacityIn : bottomIn}
              whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
              isSmallScreen={isSmallScreen}>Tanah Longsor</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer3>
      <SubContainer4 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/pelajari/artikel-7" className='link'>
          <SubImageContainer variant={isSmallScreen ? opacityIn : bottomIn}
              whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
              isSmallScreen={isSmallScreen}>
            <SubImage src={img.learnIcon3}/>
          </SubImageContainer>
        </Link>
        <Link to="/pelajari/artikel-7" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={isSmallScreen ? opacityIn : bottomIn}
              whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView}
              isSmallScreen={isSmallScreen}>Gunung Meletus</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer4>
    </Container>
  )
}

export default Two