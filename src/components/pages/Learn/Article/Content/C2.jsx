import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C2() {
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
    <>
      <ItemMiniTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Bencana
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Tanah Longsor
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Tanah longsor adalah fenomena alamiah yang terjadi ketika kestabilan lereng terganggu, sehingga menyebabkan tanah, batuan, atau campuran keduanya, menuruni atau keluar dari lereng. Hal ini dapat terjadi karena berbagai faktor seperti curah hujan yang tinggi, perubahan suhu yang drastis, gempa bumi, erosi, penggundulan hutan, atau aktivitas manusia seperti pembangunan yang tidak terkontrol.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src={img.learn1}/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Dampak dari tanah longsor bisa sangat merusak, mengancam keselamatan manusia dan merusak properti, infrastruktur, dan lingkungan sekitar. BNPB dan pihak terkait melakukan berbagai upaya untuk meminimalkan risiko tanah longsor, seperti melakukan pengamatan dan pemantauan kondisi lereng yang rawan, pengelolaan lahan yang baik, dan edukasi dan sosialisasi kepada masyarakat tentang bahaya dan cara mengurangi risiko tanah longsor.      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Penting bagi masyarakat untuk memahami bahaya tanah longsor dan bagaimana mengurangi risiko terjadinya. Beberapa tindakan yang dapat dilakukan antara lain menjaga kelestarian lingkungan, menghindari membangun di lereng yang rawan, melakukan penahanan dan pengalihan air, serta membangun dinding penahan atau struktur pendukung pada lereng yang berisiko. Dengan kesadaran dan tindakan yang tepat, risiko terjadinya tanah longsor dapat diminimalkan sehingga keamanan dan kesejahteraan masyarakat dapat terjaga.    
      </ItemPharagraph>
    </>
  )
}
const ItemMiniTitle = styled(motion.span)`
  font-weight: 500;
  font-size: 16px;
`
const ItemTitle = styled(motion.span)`
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 36px;
  text-decoration: underline;
  text-decoration-color: ${vari.quartery};
  text-decoration-thickness: .1rem;
`
const ItemSubTitle = styled(motion.span)`
  text-align: justify;
  font-style: italic;
  font-size: 20px;
  margin-bottom: 1rem;
`
const ItemImageWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  @media (max-width: 745px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`
const ItemImageContainer = styled(motion.div)`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const ItemPharagraph = styled(motion.span)`
  text-align: justify;
  font-weight: 300;
`

export default C2