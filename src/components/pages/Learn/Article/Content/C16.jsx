import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C16() {
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
        Tanah Longsor
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Bencana tanah longsor dapat terjadi dengan cepat dan menyebabkan kerusakan yang besar. Ketika terjadi bencana tanah longsor, hal pertama yang harus dilakukan adalah mencari tempat yang aman. Jangan berada di dekat area yang rawan longsor atau di bawah lereng yang curam. Jika Anda tinggal di daerah yang rawan longsor, pastikan untuk memiliki rencana evakuasi darurat dan mengetahui rute yang aman untuk keluar dari daerah tersebut.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/urgency-rescuer-help-ambulance-lifeguard-uniform-assisting-first-aid-injured-person-finding-people-operation-isolated-flat-vector-illustration_613284-1420.jpg?w=740&t=st=1677675662~exp=1677676262~hmac=0844fc83c5d9df96974a2358e0d206a0c611570e48bbc5ed45babb5a70394b85"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah mencari tempat yang aman, segera lakukan penilaian awal terhadap kerusakan yang terjadi dan mencari tahu apakah ada korban atau orang yang terperangkap di dalam reruntuhan. Jangan mencoba untuk membersihkan reruntuhan atau mengambil risiko yang tidak perlu jika tidak terlatih atau tidak memiliki peralatan yang sesuai.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Langkah selanjutnya adalah memberitahu petugas penanggulangan bencana setempat dan mengikuti instruksi mereka. Petugas penanggulangan bencana akan membantu untuk mengevaluasi situasi, memberikan bantuan medis dan logistik, serta membantu evakuasi penduduk yang terkena dampak bencana.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Setelah bencana tanah longsor berakhir, penting untuk memantau kondisi daerah sekitar. Jangan mencoba untuk kembali ke rumah atau daerah yang terkena dampak bencana tanah longsor sebelum mendapatkan informasi dari pihak berwenang bahwa daerah tersebut aman dan layak dihuni kembali. Pastikan juga untuk mengikuti arahan dari pihak berwenang terkait perbaikan infrastruktur dan perumahan.
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

export default C16