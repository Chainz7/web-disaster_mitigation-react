import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C14() {
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
        Gunung Meletus
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Gunung meletus adalah bencana alam yang sangat berbahaya dan dapat menimbulkan kerugian yang besar bagi kehidupan manusia, lingkungan dan ekonomi. Namun, walaupun kejadian meletusnya gunung tidak bisa diprediksi dengan pasti, kita dapat melakukan beberapa tindakan pencegahan dan persiapan untuk mengurangi dampak bencana tersebut.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/fire-emergency-evacuation-office-building_107791-15267.jpg?w=826&t=st=1677675322~exp=1677675922~hmac=03f60fa0fdb8bbc7f3f1a1ab7323246f8396d05d29cf07f81ee5a22e5119e089"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Salah satu tindakan yang dapat dilakukan adalah dengan memetakan wilayah rawan bencana gunung meletus. Hal ini penting untuk memberikan informasi kepada masyarakat yang tinggal di wilayah tersebut tentang risiko yang mereka hadapi dan juga memudahkan proses evakuasi apabila terjadi bencana.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, pendidikan kepada masyarakat yang berada di dekat gunung berapi juga sangat penting dilakukan. Pendidikan ini dapat berupa pengetahuan tentang tanda-tanda awal meletusnya gunung, bagaimana menghadapi situasi darurat, dan tindakan evakuasi yang harus dilakukan. Dengan pendidikan yang tepat, masyarakat dapat lebih siap menghadapi bencana alam dan mengurangi risiko cedera dan kehilangan nyawa.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Kita juga dapat melakukan persiapan fisik dan logistik, seperti menyediakan tempat evakuasi yang aman, menyimpan persediaan makanan dan air bersih, dan menjaga alat komunikasi agar tetap dapat diakses. Dalam situasi darurat, persiapan yang baik dapat membantu masyarakat bertahan dalam jangka waktu yang lebih lama dan meminimalkan risiko keselamatan.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Dalam kesimpulannya, meskipun kita tidak dapat memprediksi dengan pasti kapan gunung meletus akan terjadi, tindakan pencegahan dan persiapan dapat membantu kita mengurangi risiko dan meminimalkan dampak bencana alam tersebut. Dengan melakukan tindakan-tindakan ini, kita dapat membangun masyarakat yang lebih siap dan tangguh menghadapi ancaman bencana gunung meletus.
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

export default C14