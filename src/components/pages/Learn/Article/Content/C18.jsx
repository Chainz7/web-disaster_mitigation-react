import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C18() {
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
        Banjir Bandang
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah terjadinya bencana banjir bandang, langkah-langkah yang dilakukan dapat bervariasi tergantung pada skala dan tingkat kerusakan yang terjadi. Secara umum, tindakan pertama yang harus dilakukan adalah memastikan keselamatan dan kesehatan masyarakat. Tim darurat harus segera merespon dengan menyediakan bantuan kesehatan, air bersih, makanan, pakaian, dan tempat perlindungan bagi korban.
            </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg?t=st=1677676415~exp=1677677015~hmac=7b644cf2a54c7a97ac7abe33fa9d52ea2406a59cd1ac619ccfe4c1a0ece6ed5f"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah itu, pihak berwenang harus mengevaluasi kerusakan dan memulai upaya pemulihan. Tim pemulihan harus mengidentifikasi area yang paling terdampak dan memprioritaskan tindakan untuk memulihkan layanan penting seperti listrik, air bersih, sanitasi, dan infrastruktur jalan raya
            </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Langkah selanjutnya adalah membersihkan sisa-sisa lumpur dan sampah yang terbawa banjir. Tim pembersihan harus membantu korban membersihkan dan merestorasi rumah mereka, termasuk membersihkan bangunan, mengeringkan wilayah yang terkena dampak, dan memperbaiki fasilitas yang rusak.
            </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, penting untuk melakukan evaluasi risiko untuk mencegah kejadian serupa di masa depan. Hal ini dapat mencakup peninjauan kembali infrastruktur dan kebijakan pengembangan wilayah. Selain itu, edukasi publik tentang pengurangan risiko bencana dan pentingnya persiapan sebelumnya juga sangat penting untuk mengurangi dampak bencana banjir bandang di masa depan.
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

export default C18