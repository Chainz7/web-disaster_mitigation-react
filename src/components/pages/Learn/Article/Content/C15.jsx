import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C15() {
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
        Saat Bencana Terjadi
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Banjir Bandang
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Saat terjadi bencana banjir bandang, langkah pertama yang harus diambil adalah untuk menjaga keselamatan diri sendiri dan keluarga. Jangan mencoba untuk bergerak ke area terendah atau dekat dengan aliran sungai, karena bisa sangat berbahaya. Jika diperlukan, segera mencari tempat yang lebih tinggi dan aman, seperti lantai atas rumah atau gedung.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/emergency-escape-cartoon-poster-with-rescue-workers-saving-man-from-water-vector-illustration_1284-77198.jpg?w=740&t=st=1677675547~exp=1677676147~hmac=2cbdbdd356e3bb8d88d60c278e652201dc4105ffa6d55d18199eaa2e9e698bd9"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah itu, pastikan untuk mengikuti instruksi dari pihak berwenang, seperti polisi atau petugas penyelamat, untuk evakuasi jika diperlukan. Jangan lupa membawa perlengkapan yang diperlukan seperti pakaian ganti, obat-obatan, makanan dan minuman serta barang berharga.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah banjir mereda, pastikan untuk membersihkan rumah dari lumpur dan kotoran yang tertinggal. Pastikan juga untuk menghindari air yang terkontaminasi, karena bisa berbahaya bagi kesehatan. Banyak organisasi atau lembaga yang memberikan bantuan dan pertolongan pada korban banjir bandang, sehingga pastikan untuk mengikuti instruksi dari pihak terkait dalam menerima bantuan tersebut.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, lakukan langkah pencegahan agar tidak terjadi bencana banjir bandang di masa depan. Salah satunya adalah dengan memastikan drainase dan saluran air bersih, serta menjaga kelestarian lingkungan seperti hutan dan sungai. Jangan lupa untuk selalu siap dan waspada pada kondisi cuaca yang ekstrem, dan selalu mengikuti instruksi pihak berwenang saat terjadi bencana.
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

export default C15