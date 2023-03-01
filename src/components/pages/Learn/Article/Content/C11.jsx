import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C11() {
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
        Dampak Bencana Alam
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Bagi Pengunjung
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Coban Talun merupakan salah satu tempat wisata yang terkenal dengan keindahan alamnya, namun saat terjadi bencana, pengunjung tentu saja akan merasakan dampak yang cukup signifikan. Pertama-tama, pengunjung tidak dapat menikmati keindahan alam di sekitar Coban Talun karena tempat wisata harus ditutup untuk sementara waktu demi keamanan pengunjung.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/tourists-travel-group-people-excursion_107791-14067.jpg?w=826&t=st=1677674938~exp=1677675538~hmac=4de7f253d93277594b8197bd3e70c544d1cea5f0c96997264463fc85e05d5fa7"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, terjadinya bencana di Coban Talun dapat membahayakan keselamatan pengunjung jika mereka masih berada di tempat wisata saat bencana terjadi. Namun, para petugas yang telah dilatih dengan baik siap untuk mengevakuasi pengunjung dari tempat wisata dengan cepat dan aman. Hal ini tentu saja dapat memberikan rasa aman bagi pengunjung yang mengunjungi Coban Talun saat terjadi bencana.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain dampak yang dirasakan oleh pengunjung, terjadinya bencana di Coban Talun juga dapat berdampak pada keberlangsungan bisnis di sekitar area wisata. Para pedagang dan pengusaha yang mengandalkan kunjungan wisatawan dapat mengalami penurunan pendapatan karena tutupnya tempat wisata.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Oleh karena itu, penting bagi para pengunjung untuk selalu memperhatikan kondisi cuaca dan keadaan sekitar sebelum berkunjung ke Coban Talun, serta mengikuti instruksi dari petugas jika terjadi bencana di area wisata. Hal ini dapat membantu mengurangi dampak yang dirasakan oleh pengunjung dan membantu mempertahankan keberlangsungan bisnis di sekitar area wisata.
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

export default C11