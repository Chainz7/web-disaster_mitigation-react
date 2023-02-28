import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari } from '../../../constants'
import { Link } from 'react-router-dom'

function Right() {
    const opacityIn = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: .7,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <Container>
      { /* ITEM 1 */}
      <Wrapper>
        <Left>
          <ItemTextTop>
            <DateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>14 Jan 2023 | Lowongan</DateTitle>
            <Link className='link' to="https://www.beritasatu.com/nasional/527522/korban-ketiga-tragedi-coban-talun-ditemukan-di-dasar-sungai">
              <Title variant={opacityIn} whileInView={opacityIn.whileInView}>Analis Sistem Informasi Geografis (GIS Analyst)</Title>
            </Link>
          </ItemTextTop>
          <SubTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Pantau Gambut agar bersungguh-sungguh melakukan aksi nyata dalam upaya... </SubTitle>
        </Left>
          <ImageContainer>
            <Image src="https://img2.beritasatu.com/cache/beritasatu/910x580-2/631455676123.jpg.webp" variant={opacityIn} whileInView={opacityIn.whileInView} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.02 }} transition={{ duration: .4 }}/>
          </ImageContainer>

      </Wrapper>
      { /* ITEM 1 */}
      <Wrapper>
        <Left>
          <ItemTextTop>
            <DateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>14 Jan 2023 | Lowongan</DateTitle>
            <Link className='link' to="https://www.beritasatu.com/nasional/527522/korban-ketiga-tragedi-coban-talun-ditemukan-di-dasar-sungai">
              <Title variant={opacityIn} whileInView={opacityIn.whileInView}>Analis Sistem Informasi Geografis (GIS Analyst)</Title>
            </Link>
          </ItemTextTop>
          <SubTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Pantau Gambut agar bersungguh-sungguh melakukan aksi nyata dalam upaya... </SubTitle>
        </Left>
          <ImageContainer>
            <Image src="https://img2.beritasatu.com/cache/beritasatu/910x580-2/631455676123.jpg.webp" variant={opacityIn} whileInView={opacityIn.whileInView} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.02 }} transition={{ duration: .4 }}/>
          </ImageContainer>

      </Wrapper>
      { /* ITEM 1 */}
      <Wrapper>
        <Left>
          <ItemTextTop>
            <DateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>14 Jan 2023 | Lowongan</DateTitle>
            <Link className='link' to="https://www.beritasatu.com/nasional/527522/korban-ketiga-tragedi-coban-talun-ditemukan-di-dasar-sungai">
              <Title variant={opacityIn} whileInView={opacityIn.whileInView}>Analis Sistem Informasi Geografis (GIS Analyst)</Title>
            </Link>
          </ItemTextTop>
          <SubTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Pantau Gambut agar bersungguh-sungguh melakukan aksi nyata dalam upaya... </SubTitle>
        </Left>
          <ImageContainer>
            <Image src="https://img2.beritasatu.com/cache/beritasatu/910x580-2/631455676123.jpg.webp" variant={opacityIn} whileInView={opacityIn.whileInView} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.02 }} transition={{ duration: .4 }}/>
          </ImageContainer>

      </Wrapper>
      { /* ITEM 1 */}
      <Wrapper>
        <Left>
          <ItemTextTop>
            <DateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>14 Jan 2023 | Lowongan</DateTitle>
            <Link className='link' to="https://www.beritasatu.com/nasional/527522/korban-ketiga-tragedi-coban-talun-ditemukan-di-dasar-sungai">
              <Title variant={opacityIn} whileInView={opacityIn.whileInView}>Analis Sistem Informasi Geografis (GIS Analyst)</Title>
            </Link>
          </ItemTextTop>
          <SubTitle variant={opacityIn} whileInView={opacityIn.whileInView}>Pantau Gambut agar bersungguh-sungguh melakukan aksi nyata dalam upaya... </SubTitle>
        </Left>
        <ImageContainer>
          <Image src="https://img2.beritasatu.com/cache/beritasatu/910x580-2/631455676123.jpg.webp" variant={opacityIn} whileInView={opacityIn.whileInView} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.02 }} transition={{ duration: .4 }}/>
        </ImageContainer>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  width: 50%;
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 440px) {
    width: 90%;
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 2rem;
  @media (max-width: 1080px) {
    padding-left: 0;
    justify-content: flex-start;
    gap: 0;
  }
`
const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const ItemTextTop = styled.div`
  display: grid;
  margin-bottom: 1.5rem;
`
const DateTitle = styled(motion.span)`
  font-weight: 300;
  font-size: 13px;
  color: ${vari.quartery};
`
const Title = styled(motion.span)`
  font-weight: 600;
  font-size: 18px;
  text-decoration: underline;
  text-decoration-color: ${vari.quartery};
  text-decoration-thickness: .1rem;
  &:hover {
    color: ${vari.primary};
    text-decoration-color: ${vari.primary};
    transition: all 0.4s ease-in-out;  
  }
  @media (max-width: 440px) {
    font-size: 14px;
  }
`
const SubTitle = styled(motion.span)`
  font-weight: 300;
  font-size: 13px;
  color: ${vari.quartery};
  @media (max-width: 440px) {
    font-size: 11px;
  }
  @media (max-width: 440px) {
    display: none;
  }
`
const ImageContainer = styled(Link)`
  width: 13rem;
  height: 8.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 1230px) {
    width: 12rem;
  }
  @media (max-width: 1160px) {
    width: 11rem;
  }
  @media (max-width: 1080px) {
    width: 20rem;
    height: 6rem;
    margin-right: 0;
  }
  @media (max-width: 902px) {
    height: 6.8rem;
  }
  @media (max-width: 690px) {
    height: 8.8rem;
  }
  @media (max-width: 506px) {
    height: 10rem;
  }
  @media (max-width: 440px) {
    width: 12rem;
    height: 6rem;
  }
`
const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default Right