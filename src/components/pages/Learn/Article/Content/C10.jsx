import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C10() {
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
        Bagi Masyarakat Desa
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Warga sekitar yang mayoritas berkebun akan merasakan dampak yang signifikan saat terjadi bencana alam seperti tanah longsor atau banjir bandang. Salah satu dampak yang dirasakan adalah terputusnya jalur yang biasa dilewati untuk pergi ke kebun. Hal ini tentu sangat mengganggu aktivitas mereka sebagai petani.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/gardening-farm-works-garden-people-working_107791-9667.jpg?w=826&t=st=1677674867~exp=1677675467~hmac=2479574c4b0db8cf4eb9e668af0143aa135034e01b0a81dc5e7a4c91dbc31989"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, terputusnya jalur menuju ke kebun juga dapat menghambat akses pasokan pangan bagi warga sekitar. Tanaman yang sudah siap panen mungkin tidak dapat diambil tepat waktu karena sulitnya akses ke kebun. Selain itu, akses untuk membawa bahan pertanian seperti pupuk dan benih ke kebun juga menjadi sulit.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Dampak lain yang dirasakan oleh warga sekitar adalah hilangnya sumber penghasilan mereka. Tanaman yang sudah matang mungkin rusak karena tidak dapat diambil tepat waktu, sehingga mereka kehilangan potensi pendapatan dari panen tersebut. Selain itu, jika akses ke kebun terputus untuk waktu yang lama, warga juga mungkin kehilangan penghasilan dari pekerjaan mereka sebagai petani.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Oleh karena itu, perlu ada upaya untuk mengurangi dampak bencana alam pada petani dan warga sekitar. Upaya ini bisa dilakukan dengan mengembangkan sistem peringatan dini dan juga infrastruktur yang lebih tangguh. Selain itu, pendidikan dan pelatihan tentang cara menghadapi bencana alam juga perlu diberikan kepada warga agar mereka lebih siap dalam menghadapi situasi tersebut.
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

export default C10