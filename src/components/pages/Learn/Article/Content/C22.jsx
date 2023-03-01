import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C22() {
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
        Mitigasi Bencana
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Manfaat
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Mitigasi bencana merupakan upaya untuk mengurangi dampak buruk dari bencana alam atau buatan manusia. Manfaat dari mitigasi bencana sangat penting untuk meningkatkan kesiapsiagaan dan mengurangi kerugian akibat bencana. Berikut adalah beberapa manfaat dari mitigasi bencana      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/home-car-travel-health-insurance-flat-family-with-safety-shield-happy-parents-with-children-protection-property-life-characters-coverage-accident-assurance-plan-concept_88138-652.jpg?w=740&t=st=1677678227~exp=1677678827~hmac=121ba0ec96e61de3bb05e5afdf72af8ad9e5f6e1f01509279b098eb630fff610"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      1. Meningkatkan keselamatan dan kesehatan masyarakat: Dengan melakukan mitigasi bencana, kita dapat meminimalkan risiko cedera, kerugian harta benda, dan hilangnya nyawa selama bencana terjadi.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      2. Mengurangi biaya pemulihan: Tindakan mitigasi bencana membantu mengurangi biaya pemulihan akibat bencana dengan mengurangi kerusakan yang terjadi.      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      3. Menjaga lingkungan: Mitigasi bencana membantu mengurangi dampak lingkungan akibat bencana seperti kerusakan habitat, tercemarnya air, dan kerusakan ekosistem.      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      4. Meningkatkan kesiapsiagaan masyarakat: Dengan melakukan mitigasi bencana, masyarakat dapat mempersiapkan diri secara fisik dan mental serta memahami cara mengatasi bencana.      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      5. Meningkatkan ketahanan komunitas: Mitigasi bencana membantu komunitas menjadi lebih tangguh dan dapat bertahan dalam menghadapi bencana.      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Dalam keseluruhan, mitigasi bencana penting untuk melindungi keselamatan dan kesejahteraan masyarakat serta lingkungan. Mitigasi bencana juga membantu meningkatkan kesiapsiagaan dan ketahanan komunitas dalam menghadapi bencana      </ItemPharagraph>
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

export default C22