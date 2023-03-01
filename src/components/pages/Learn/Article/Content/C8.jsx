import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C8() {
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
        Edukasi Masyarakat
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Masyarakat Desa
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Kesadaran akan mitigasi bencana yang semakin tinggi di masyarakat merupakan suatu hal yang positif. Hal ini menunjukkan bahwa upaya-upaya yang dilakukan oleh pihak-pihak terkait seperti petugas penanggulangan bencana dan perusahaan asuransi mulai membuahkan hasil.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/gardening-farm-works-garden-people-working_107791-9667.jpg?w=826&t=st=1677674867~exp=1677675467~hmac=2479574c4b0db8cf4eb9e668af0143aa135034e01b0a81dc5e7a4c91dbc31989"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Kasus yang terjadi di mana petugas penanggulangan bencana yang berhasil mengirimkan kabar tentang potensi bencana kepada petugas wisata sehingga wisata tersebut langsung ditutup merupakan suatu tindakan yang sangat tepat. Hal ini menunjukkan bahwa koordinasi antarlembaga dan keberadaan sistem peringatan dini yang efektif sangatlah penting dalam mengurangi risiko bencana
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, pemberian simulasi bencana kepada masyarakat di berbagai tempat seperti perkumpulan RT dan edukasi tentang bencana dari pihak Perhutani juga merupakan suatu langkah yang baik untuk meningkatkan kesadaran masyarakat. Hal ini membantu masyarakat untuk memahami potensi bencana yang bisa terjadi dan mengambil tindakan yang tepat ketika terjadi bencana.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Pemberian asuransi oleh perusahaan asuransi dan keberadaan PKS (Program Keluarga Sejahtera) juga sangat membantu masyarakat dalam mengatasi dampak bencana yang terjadi. Dengan adanya asuransi, masyarakat dapat mendapatkan perlindungan finansial dalam menghadapi dampak bencana. Sementara itu, PKS dapat membantu masyarakat untuk meningkatkan kualitas hidupnya secara ekonomi sehingga mampu mengurangi dampak sosial dan ekonomi akibat bencana.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Secara keseluruhan, upaya-upaya tersebut merupakan langkah-langkah yang penting dalam mengurangi risiko bencana dan meningkatkan kesiapsiagaan masyarakat. Diharapkan bahwa upaya-upaya tersebut terus dikembangkan dan dijalankan secara konsisten untuk mencapai tujuan yang lebih baik dalam mengurangi risiko bencana di masa depan.    
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

export default C8