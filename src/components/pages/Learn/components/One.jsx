import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari, img } from '../../../../constants'

defineElement(lottie.loadAnimation);
function One() {
  const Container = styled.div`
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
      background-size: 52%;
    }
  `
  const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    @media (max-width: 1067px) {
      position: relative;
    }
  `
  const ImageContainer = styled(motion.div)`
    width: 18rem;
    height: 18rem;
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
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-weight: 500;
    font-size: 32px;
  `
  const SubContainer1 = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    left: 5rem;
    top: 3rem;
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
  const SubContainer2 = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    right: 3rem;
    top: 3rem;
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
    bottom: 4rem;
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
    right: 0;
    bottom: 5rem;
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
  // const SubImageBG1 = styled.div`
  //   width: 80%;
  //   height: 80%;
  //   top: 0;
  //   left: 0;
  //   position: absolute;
  //   background-color: ${vari.primary};
  //   border-radius: 41% 59% 81% 19% / 53% 41% 59147%;
  //   object-fit: cover;
  //   z-index: 1;
  // `
  const SubImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    z-index: 99;
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
      transit1n: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  const bottomIn = {
    whileInView: {
      y: [100, 0],
      scale: [1, 1],
      opacity: [.5, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  const rightIn = {
    whileInView: {
      y: [30, 0],
      scale: [1, 1],
      opacity: [.5, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  const leftIn = {
    whileInView: {
      y: [30, 0],
      scale: [1, 1],
      opacity: [.5, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <Container>
      <MainContainer>
        <ImageContainer variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
          <Image src={img.learn1}/>
          <TitleContainer>
            <Title variant={bottomIn} whileInView={bottomIn.whileInView}>Bencana</Title>
          </TitleContainer>
        </ImageContainer>
      </MainContainer>
      <SubContainer1 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/kabar" className='link'>
          <SubImageContainer variant={leftIn} whileInView={leftIn.whileInView}>
            <SubImage src={img.learnIcon1}/>
            {/* <SubImageBG1></SubImageBG1> */}
          </SubImageContainer>
        </Link>
        <Link to="/kabar" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={leftIn} whileInView={leftIn.whileInView}>Banjir Bandang</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer1>
      <SubContainer2 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/kabar" className='link'>
          <SubImageContainer variant={rightIn} whileInView={rightIn.whileInView}>
          <SubImage src={img.learnIcon2}/>
          </SubImageContainer>
        </Link>
        <Link to="/kabar" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={rightIn} whileInView={rightIn.whileInView}>Tanah Longsor</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer2>
      <SubContainer3 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/kabar" className='link'>
          <SubImageContainer variant={leftIn} whileInView={leftIn.whileInView}>
            <SubImage src={img.learnIcon3}/>
          </SubImageContainer>
        </Link>
        <Link to="/kabar" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={leftIn} whileInView={leftIn.whileInView}>Gunung Meletus</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer3>
      <SubContainer4 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/kabar" className='link'>
          <SubImageContainer variant={rightIn} whileInView={rightIn.whileInView}>
            <SubImage src={img.learnIcon4}/>
          </SubImageContainer>
        </Link>
        <Link to="/kabar" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={rightIn} whileInView={rightIn.whileInView}>Bisa Terjadi Bersamaan?</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer4>
    </Container>
  )
}

export default One