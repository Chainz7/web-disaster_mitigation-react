import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C19() {
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
        Tanah Longsor
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah bencana tanah longsor terjadi, langkah pertama yang harus dilakukan adalah memastikan keselamatan warga yang terdampak. Hal ini dapat dilakukan dengan evakuasi warga ke tempat yang lebih aman, seperti pusat evakuasi atau rumah-rumah keluarga atau kerabat terdekat yang berada di lokasi yang lebih tinggi.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/household-renovation-professions-illustration_23-2148676924.jpg?t=st=1677676819~exp=1677677419~hmac=2c175ab996d02c4bdec2c0d1b14371490a6378b048fab6315b6605a4dcb4f2b7"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selanjutnya, perlu dilakukan pemantauan dan evaluasi terhadap kondisi lingkungan sekitar, termasuk kemungkinan terjadinya longsor susulan dan dampak lain yang dapat terjadi seperti banjir atau kerusakan jalan. Jika diperlukan, dapat dilakukan tindakan pencegahan seperti pembuatan tanggul atau pengalihan aliran sungai.
            </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah situasi stabil, dapat dilakukan pendistribusian bantuan dan perlengkapan yang dibutuhkan oleh warga terdampak seperti makanan, air bersih, pakaian, dan obat-obatan. Bantuan dapat didistribusikan melalui lembaga pemerintah, organisasi masyarakat, atau relawan
            </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, perlu dilakukan tindakan rehabilitasi dan rekonstruksi untuk memulihkan kondisi lingkungan dan infrastruktur yang rusak akibat bencana. Hal ini dapat dilakukan melalui perbaikan jalan, perbaikan bangunan yang rusak, dan penanaman kembali vegetasi di daerah-daerah yang rawan longsor.
            </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Langkah-langkah tersebut di atas dapat dilakukan dengan koordinasi yang baik antara pihak-pihak terkait, termasuk pemerintah, lembaga swadaya masyarakat, dan relawan.
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

export default C19