import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C4() {
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
        Apakah Dapat Terjadi Bersamaan?
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Ketiga bencana alam, yaitu banjir bandang, tanah longsor, dan gunung meletus, memang dapat terjadi secara bersamaan akibat berbagai faktor yang berkaitan dengan kondisi alam dan lingkungan. Salah satu faktor yang bisa memicu ketiga bencana tersebut adalah curah hujan yang tinggi, terutama pada daerah dataran tinggi yang dekat dengan sungai dan gunung berapi.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src={img.learn1}/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Pada musim kemarau, tanah yang kering akan membentuk rongga pecah yang dapat menampung air ketika musim hujan tiba. Namun, jika curah hujan terus menerus intensitasnya tinggi, air akan masuk ke dalam rongga dan meresap ke dalam tanah yang retak, sehingga terjadi pergeseran tanah dan erosi yang kemudian memicu terjadinya longsor.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, jika curah hujan terus menerus tinggi, air hujan dan tanah yang bergeser bisa masuk ke dalam sungai dan memicu terjadinya banjir bandang. Faktor curah hujan yang tinggi juga bisa memicu terjadinya gunung meletus. Air hujan yang terkumpul di puncak gunung bisa merusak batuan vulkanik dan menyebabkan abu vulkanik terkikis, sehingga beban gunung berkurang dan memicu terjadinya erupsi.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Oleh karena itu, pemerintah dan masyarakat harus lebih memperhatikan kondisi lingkungan dan menjaga kelestariannya untuk mengurangi risiko terjadinya bencana alam yang dapat terjadi secara bersamaan. Upaya pengelolaan lingkungan seperti konservasi hutan, pengelolaan sungai, dan pengurangan polusi bisa dilakukan untuk mengurangi risiko terjadinya bencana alam. Selain itu, masyarakat juga harus meningkatkan kesadaran dan pengetahuan tentang bahaya bencana alam dan bagaimana cara menghadapinya.
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

export default C4