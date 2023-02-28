import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../constants'
import { Link } from 'react-router-dom'

function Left() {
    const opacityIn = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: .7,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <Container>
      <ItemContainer>
        <ItemImageContainer className='link' to="https://www.malangtimes.com/baca/36067/20190214/172000/bencana-besar-guncang-coban-talun-tewaskan-4-orang" target="_blank">
          <ItemImage src="http://risetcdn.jatimtimes.com/images/2019/02/14/20190214T17261812b082bc1128865f.md.jpg?quality=50" variant={opacityIn} whileInView={opacityIn.whileInView} whileHover={{ scale: 1.02 }} transition={{ duration: .4 }}/> 
        </ItemImageContainer>
        <ItemTextContainer>
          <ItemTextTop>
            <ItemDateTitle variant={opacityIn} whileInView={opacityIn.whileInView}>14 Jan 2023 | Kegiatan </ItemDateTitle>
            <Link className='link' to="https://www.malangtimes.com/baca/36067/20190214/172000/bencana-besar-guncang-coban-talun-tewaskan-4-orang" target="_blank">
              <ItemTitle variant={opacityIn} whileInView={opacityIn.whileInView}>“Gambut di Kala Senja”, Upaya Pantau Gambut Serukan Pentingnya Perlindungan Ekosistem Gambut</ItemTitle>
            </Link>
          </ItemTextTop>
          <ItemSubtitle variant={opacityIn} whileInView={opacityIn.whileInView}>Pantau Gambut menyerukan seluruh pemangku kepentingan agar bersungguh-sungguh melakukan aksi nyata dalam upaya melindungi...</ItemSubtitle>
        </ItemTextContainer>
      </ItemContainer>
    </Container>
  )
}
const Container = styled.div`
  width: 50%;
  display: grid;
  justify-items: start;
  align-items: start;
  gap: 1rem;
  padding-bottom: 2rem;
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 440px) {
    width: 90%;
  }
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 475px) {
    justify-content: center;
    align-items: center;
  }
`
const ItemImageContainer = styled(Link)`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ItemImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const ItemTextContainer = styled.div`
  display: grid;
  justify-items: start;
  align-items: start;
`
const ItemTextTop = styled.div`
  display: grid;
  margin-bottom: 1rem;
`
const ItemDateTitle = styled(motion.span)`
  font-weight: 300;
  font-size: 14px;
  color: ${vari.quartery};
`
const ItemTitle = styled(motion.span)`
  font-weight: 600;
  font-size: 26px;
  text-decoration: underline;
  text-decoration-color: ${vari.quartery};
  text-decoration-thickness: .1rem;
  &:hover {
    color: ${vari.primary};
    text-decoration-color: ${vari.primary};
    transition: all 0.4s ease-in-out;  
  }
  @media (max-width: 510px) {
    font-size: 22px;
  }
  @media (max-width: 440px) {
    font-size: 18px;
  }
`
const ItemSubtitle = styled(motion.span)`
  font-weight: 300;
  font-size: 16px;
  color: ${vari.quartery};
  @media (max-width: 440px) {
    display: none;
  }
`

export default Left