import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C12() {
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
        Sebelum Bencana
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Banjir Bandang
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Bencana banjir bandang merupakan bencana alam yang merusak dan berdampak besar pada lingkungan serta kehidupan manusia. Untuk mencegah terjadinya bencana banjir bandang, salah satu upaya yang dapat dilakukan adalah dengan melakukan reboisasi tanaman dan pepohonan yang dapat menyerap air dengan cepat. Tanaman seperti pohon jati, akasia, atau mahoni dapat menyerap air dengan baik, sehingga dapat membantu mengurangi jumlah air yang mengalir ke sungai.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/flat-design-tree-planting-illustration_23-2149195039.jpg?w=740&t=st=1677675177~exp=1677675777~hmac=e4351ad9403fbe3f7bee94d5ad86f9736d40b236b4f0f9d1d2a1bf4d59b05b95"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, perlu juga memperbanyak dan menyediakan lahan terbuka untuk membuat lahan hijau yang dapat menyerap air. Hal ini dapat dilakukan dengan membuat taman kota, taman lingkungan, atau bahkan taman sekolah. Dengan adanya lahan hijau yang luas, air hujan dapat terserap dan tidak langsung mengalir ke sungai.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selanjutnya, perlu juga untuk menghentikan pembangunan perumahan di tepi sungai. Hal ini dapat mempersempit sungai dan menyebabkan sampah rumah masuk ke sungai. Selain itu, penting untuk membuang sampah pada tempatnya agar tidak menghambat aliran air di sungai.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Dalam rangka mengurangi risiko terjadinya bencana banjir bandang, perlu adanya kerjasama antara pemerintah, masyarakat, dan pemangku kepentingan lainnya. Selain itu, edukasi dan sosialisasi kepada masyarakat tentang pentingnya menjaga lingkungan dan memelihara tanaman juga perlu dilakukan secara terus menerus. Dengan demikian, diharapkan bencana banjir bandang dapat diminimalisir dan lingkungan tetap terjaga dengan baik.
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

export default C12