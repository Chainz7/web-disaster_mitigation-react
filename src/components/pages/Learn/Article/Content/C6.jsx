import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C6() {
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
        Kapan Bencana Terjadi
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Tanah Longsor
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Bencana tanah longsor memang merupakan bencana yang sangat sulit diprediksi kapan akan terjadi. Namun, ada beberapa faktor yang dapat meminimalkan terjadinya bencana tersebut, salah satunya adalah pengelolaan hutan yang baik dan edukasi kepada masyarakat terkait bencana alam yang bisa terjadi di daerah mereka. Desa Tulungrejo merupakan salah satu daerah yang memiliki keuntungan karena masih memiliki banyak hutan dan alam yang di kelola oleh perhutani, sehingga risiko terjadinya bencana tanah longsor dapat diminimalkan.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src={img.learn1}/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Namun demikian, musim kemarau panjang dan curah hujan yang tinggi serta angin kencang tetap dapat memicu terjadinya bencana tanah longsor. Oleh karena itu, sangat penting bagi masyarakat setempat untuk diberi edukasi terkait bencana alam dan bagaimana cara menghadapinya. Selain itu, perlu juga dilakukan penandaan dan pemasangan rambu-rambu yang menunjukkan daerah-daerah yang rawan terkena bencana tanah longsor, seperti yang sudah dilakukan di akses jalan menuju air terjun.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Sejarah bencana tanah longsor yang terjadi di Coban Talun dan menewaskan empat orang menjadi pelajaran berharga bagi masyarakat Tulungrejo untuk selalu waspada terhadap kemungkinan terjadinya bencana serupa. Dalam menghadapi bencana tanah longsor, koordinasi antar instansi terkait dan pemenuhan kebutuhan darurat bagi korban harus menjadi prioritas. Dengan upaya yang terus-menerus untuk meningkatkan kewaspadaan dan kesiapsiagaan, diharapkan bencana tanah longsor dapat diminimalkan dan kerugian yang ditimbulkan dapat dihindari.
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

export default C6