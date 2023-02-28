import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C13() {
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
        Tanah Longsor
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Tanah longsor merupakan salah satu bencana alam yang sering terjadi di daerah yang memiliki lereng curam. Bencana ini dapat menimbulkan kerugian yang besar baik dari segi ekonomi, sosial, maupun lingkungan. Namun, bencana ini sebenarnya dapat dihindari atau setidaknya dapat diminimalisir dampaknya jika kita menerapkan beberapa langkah pencegahan.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src={img.learn1}/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Salah satu hal yang dapat dilakukan adalah dengan tidak menebang pohon secara tegak lurus. Pohon memiliki peran penting dalam menjaga daya tahan lereng. Jika pohon-pohon di sekitar lereng di tebang secara sembarangan, maka daya tahan tanah terhadap erosi dan tanah longsor akan menurun drastis. Oleh karena itu, kita harus menghindari menebang pohon secara langsung pada badan lereng yang curam.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Selain itu, jika kita ingin mengali tanah dalam jumlah besar untuk keperluan tambang atau lainnya, maka sebaiknya jangan langsung memotong badan lereng secara tegak lurus. Kita dapat memotong badan lereng secara bertahap atau secara terasiring untuk mengurangi dampak yang ditimbulkan terhadap daya tahan tanah.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Jika suatu lahan miring terpaksa digunakan untuk membuat sawah atau ladang, maka kita dapat membuat sistem bertingkat. Sistem ini akan memperlambat aliran permukaan ketika hujan sehingga dapat mengurangi potensi terjadinya tanah longsor. Selain itu, perlu juga diatur sistem drainase agar tidak ada air yang tergenang di lereng.
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
      Dalam rangka mencegah terjadinya bencana tanah longsor, penting bagi kita untuk memperhatikan faktor-faktor yang dapat mempengaruhi daya tahan tanah terhadap erosi dan tanah longsor. Dengan menerapkan beberapa langkah pencegahan seperti yang telah disebutkan di atas, kita dapat meminimalisir dampak bencana tanah longsor dan menjaga kelestarian lingkungan di sekitar kita.
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

export default C13