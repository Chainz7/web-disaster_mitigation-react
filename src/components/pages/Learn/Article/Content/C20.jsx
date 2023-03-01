import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C20() {
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
        Setelah Bencana Terjadi
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Gunung Meletus
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah bencana gunung meletus terjadi, langkah-langkah penting yang harus segera dilakukan adalah evakuasi penduduk di daerah yang terdampak dan penyelamatan orang yang terperangkap atau terluka. Tim pemulihan bencana seperti Tim SAR (Search and Rescue) harus segera dipanggil untuk melakukan penyelamatan dan membantu orang yang membutuhkan pertolongan.
            </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/volcanology-abstract-concept-illustration-volcanic-eruption-study-volcanology-discipline-university-study-post-graduate-education-scientific-research-prediction_335657-1146.jpg?w=740&t=st=1677677337~exp=1677677937~hmac=7ee2e83a868a868cb3dae5ff2a8a9604b4d7fb816aa3b66ba16bf9db42fa2a60"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, tim ahli vulkanologi harus dipanggil untuk memantau kondisi gunung dan memprediksi kemungkinan terjadinya erupsi selanjutnya. Sistem peringatan dini dan evakuasi juga harus disiapkan untuk mengurangi dampak bencana pada masa depan.
            </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Pihak berwenang harus segera mengevaluasi dampak bencana dan memberikan bantuan darurat seperti makanan, air, dan perlindungan bagi korban yang kehilangan rumah dan harta benda mereka. Kesehatan dan sanitasi juga harus menjadi prioritas untuk mencegah penyebaran penyakit akibat bencana.
            </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selanjutnya, pemulihan dan rekonstruksi daerah terdampak harus dilakukan dengan perencanaan yang matang dan partisipasi masyarakat setempat. Hal ini meliputi pembangunan kembali infrastruktur, rumah, dan kegiatan ekonomi yang terdampak oleh bencana.
            </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Dalam jangka panjang, pencegahan bencana harus menjadi fokus utama dengan upaya pengurangan risiko bencana dan peningkatan kesadaran masyarakat akan bahaya bencana. Hal ini dapat dilakukan melalui pendidikan, simulasi, dan penguatan infrastruktur untuk mengurangi risiko bencana pada masa depan.
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

export default C20