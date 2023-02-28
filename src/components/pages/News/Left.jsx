import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../constants'

function Left() {
  return (
    <Container>
      <ItemContainer>
        <ItemImageContainer>
          <ItemImage src={img.learn1}/>
        </ItemImageContainer>
        <ItemDateTitle> Si Miskin Hara yang Kaya ManfaatTitle 14 Jan 2023 | Kegiatan</ItemDateTitle>
        <ItemTitle>Gambut: Si Miskin Hara yang Kaya Manfaat</ItemTitle>
        <ItemSubtitle>Pantau Gambut menyerukan seluruh pemangku kepentingan agar bersungguh-sungguh melakukan aksi nyata dalam upaya melindungi...</ItemSubtitle>
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
  background-color: blue;
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  background-color: green;
  @media (max-width: 475px) {
    justify-content: center;
    align-items: center;
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
const ItemDateTitle = styled(motion.span)`
  
`
const ItemTitle = styled(motion.span)`
  
`
const ItemSubtitle = styled(motion.span)`
  
`

export default Left