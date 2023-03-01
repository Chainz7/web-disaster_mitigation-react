import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C17() {
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
        Gunung Meletus
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Ketika terjadi bencana gunung meletus, tindakan yang paling penting adalah untuk segera mengungsi dari area yang terdampak erupsi. Pemerintah biasanya sudah memiliki rencana evakuasi dan tempat penampungan untuk warga yang terkena dampak. Jika Anda berada di daerah terdampak erupsi, hindari terkena aliran lava, abu vulkanik, dan material vulkanik lainnya yang dapat membahayakan keselamatan Anda.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src="https://img.freepik.com/free-vector/camping-place-cartoon-composition-with-yellow-tent-lamp-pot-with-dinner-fire-night-sky_1284-54945.jpg?w=740&t=st=1677675780~exp=1677676380~hmac=577a5cd026dd911bab07bc1e7fbe0016fafc356e8a8afb5ace8d36cd7e098534"/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, pastikan untuk memantau perkembangan situasi melalui informasi dari pemerintah dan media setempat. Jika Anda tinggal di daerah dekat gunung berapi, pastikan Anda telah mengetahui tanda-tanda awal erupsi seperti suara gemuruh, gempa bumi, dan perubahan pada aktivitas gunung berapi. Hal ini penting agar Anda bisa segera mengambil tindakan evakuasi dengan cepat.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selama evakuasi, pastikan Anda membawa barang-barang penting seperti makanan, air, obat-obatan, dan barang-barang berharga lainnya. Setelah bencana, pastikan untuk mengikuti petunjuk dari pemerintah setempat dalam membersihkan daerah terdampak dan kembali ke wilayah Anda jika diizinkan. Ingatlah untuk selalu memperhatikan peringatan dan tindakan yang diambil oleh pemerintah agar terhindar dari bahaya dan dapat bertindak dengan cepat dan tepat saat terjadi bencana gunung meletus.
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

export default C17