import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C3() {
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
        Gunung Meletus
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Gunung meletus merupakan salah satu fenomena alam yang sangat berbahaya dan dapat mengakibatkan kerusakan yang besar bagi lingkungan sekitarnya dan masyarakat yang berada di dekatnya. Aktivitas vulkanik yang terjadi pada gunung meletus dapat berupa awan panas, lontaran material (pijar), hujan abu lebat, lava, gas racun, tsunami, dan banjir lahar.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src={img.learn1}/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Awan panas adalah aliran panas yang bergerak dengan cepat dari gunung meletus. Ini adalah bahaya paling mematikan karena suhu dapat mencapai ribuan derajat Celcius. Lontaran material seperti batu dan pasir panas dapat menyebabkan kerusakan pada bangunan dan bahkan menyebabkan kematian. Hujan abu lebat dapat menyebabkan kerusakan pada pertanian dan sistem pernapasan manusia.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Lava adalah aliran magma yang keluar dari gunung meletus dan dapat menghancurkan segala yang ada di jalurnya. Gas racun seperti sulfur dioksida dan karbon monoksida dapat membahayakan kesehatan manusia. Tsunami dan banjir lahar dapat terjadi jika letusan terjadi di daerah pesisir atau di daerah yang memiliki banyak sungai dan aliran air.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Oleh karena itu, BNPB dan pemerintah daerah harus selalu siap menghadapi bencana gunung meletus dan menyediakan rencana tanggap darurat yang tepat. Masyarakat yang tinggal di daerah rawan bencana juga harus mengetahui tanda-tanda awal letusan gunung dan mengikuti prosedur evakuasi yang telah ditetapkan. Pencegahan dini dan penanganan cepat dapat mengurangi dampak bencana gunung meletus dan menyelamatkan banyak nyawa.
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

export default C3