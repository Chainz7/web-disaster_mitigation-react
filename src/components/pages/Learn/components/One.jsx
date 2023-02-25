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
    width: 1000px;
    height: 500px;
    display: grid;
    position: relative;
    justify-items: center;
    align-items: center;
    border-radius: 0 0 .5rem .5rem;
    /* background-image: url('https://www.pngarts.com/files/11/Grid-Pattern-PNG-Image-Background.png');
    background-size: 100%;
    background-repeat: no-repeat; */
    @media (max-width: 1067px) {
      width: 100%;
      height: 100%;
      align-items: start;
      margin-top: 3rem;
      margin-bottom: 1.4rem;
      padding-bottom: 1.6rem;
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
    margin-top: 3rem;
    background-color: ${vari.secondaryTransparent};
  `
  const Title = styled(motion.span)`
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-weight: 500;
    font-size: 32px;
  `
  const SubContainer1 = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
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
      margin-top: 1rem;
      padding-left: .5rem;
      border: 1px solid rgba(210, 215, 211, 0.5);
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    }
    @media (max-width: 610px) {
      width: 93%;
    }
  `
  const SubContainer2 = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
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
      padding-left: .5rem;
      border: 1px solid rgba(210, 215, 211, 0.5);
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    }
    @media (max-width: 610px) {
      width: 93%;
    }
  `
  const SubContainer3 = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
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
      padding-left: .5rem;
      border: 1px solid rgba(210, 215, 211, 0.5);
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    }
    @media (max-width: 610px) {
      width: 93%;
    }
  `
  const SubContainer4 = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
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
      padding-left: .5rem;
      border: 1px solid rgba(210, 215, 211, 0.5);
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.5); 
    }
    @media (max-width: 610px) {
      width: 93%;
    }
  `
  const SubImageContainer = styled(motion.div)`
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1067px) {
      width: 4rem;
      height: 4rem;
    }
  `
  const SubImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
  const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const SubTitle = styled(motion.span)`
    font-weight: 500;
    font-size: 20px;
    @media (max-width: 1067px) {
      font-weight: 500;
      font-size: 18px;
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
          <Image src={img.Learn1}/>
          <TitleContainer>
            <Title variant={bottomIn} whileInView={bottomIn.whileInView}>Bencana Alam</Title>
          </TitleContainer>
        </ImageContainer>
      </MainContainer>
      <SubContainer1 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/kabar" className='link'>
          <SubImageContainer variant={leftIn} whileInView={leftIn.whileInView}>
            <lord-icon
              src="https://cdn.lordicon.com/wiqmayhq.json"
              trigger="loop"
              colors="outline:#121331,primary:#66dac1,secondary:#92140c"
              style={{width:"100%", height:"100%"}}>
            </lord-icon>
          </SubImageContainer>
        </Link>
        <Link to="/kabar" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={leftIn} whileInView={leftIn.whileInView}>Bencana Semua</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer1>
      <SubContainer2 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/kabar" className='link'>
          <SubImageContainer variant={rightIn} whileInView={rightIn.whileInView}>
            <lord-icon
              src="https://cdn.lordicon.com/wiqmayhq.json"
              trigger="loop"
              colors="outline:#121331,primary:#66dac1,secondary:#92140c"
              style={{width:"100%", height:"100%"}}>
            </lord-icon>
          </SubImageContainer>
        </Link>
        <Link to="/kabar" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={rightIn} whileInView={rightIn.whileInView}>Bencana Semua</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer2>
      <SubContainer3 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/kabar" className='link'>
          <SubImageContainer variant={leftIn} whileInView={leftIn.whileInView}>
            <lord-icon
              src="https://cdn.lordicon.com/wiqmayhq.json"
              trigger="loop"
              colors="outline:#121331,primary:#66dac1,secondary:#92140c"
              style={{width:"100%", height:"100%"}}>
            </lord-icon>
          </SubImageContainer>
        </Link>
        <Link to="/kabar" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={leftIn} whileInView={leftIn.whileInView}>Bencana Semua</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer3>
      <SubContainer4 variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.1 }} transition={{ duration: .4 }}>
        <Link to="/kabar" className='link'>
          <SubImageContainer variant={rightIn} whileInView={rightIn.whileInView}>
            <lord-icon
              src="https://cdn.lordicon.com/wiqmayhq.json"
              trigger="loop"
              colors="outline:#121331,primary:#66dac1,secondary:#92140c"
              style={{width:"100%", height:"100%"}}>
            </lord-icon>
          </SubImageContainer>
        </Link>
        <Link to="/kabar" className='link'>
          <SubTitleContainer>
            <SubTitle className='subtitle-hover' variant={rightIn} whileInView={rightIn.whileInView}>Bencana Semua</SubTitle>
          </SubTitleContainer>
        </Link>
      </SubContainer4>
    </Container>
  )
}

export default One