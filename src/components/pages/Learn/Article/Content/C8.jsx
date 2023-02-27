import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { vari, img } from '../../../../../constants'

function C8() {
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
        Bencana
      </ItemMiniTitle>
      <ItemTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Banjir Bandang
      </ItemTitle>
      <ItemSubTitle variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut doloremque odio architecto hic perferendis! Doloribus, sed laudantium. Enim nemo odit, temporibus non labore consectetur laudantium reprehenderit molestiae aut eum.
      </ItemSubTitle>
      <ItemImageWrapper variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        <ItemImageContainer>
          <ItemImage src={img.learn1}/>
        </ItemImageContainer>
      </ItemImageWrapper>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minima suscipit possimus rem ipsum eaque laborum labore eligendi inventore amet quibusdam molestiae omnis aliquid, deserunt dignissimos quas ex esse dolorem hic beatae adipisci qui incidunt. Sequi adipisci facilis nesciunt dignissimos dolorem quasi suscipit consequatur accusamus veritatis soluta laudantium quos beatae, eius aliquid aliquam, quisquam autem maxime, nemo provident cum. Possimus dolore fuga quaerat molestias incidunt eligendi vero excepturi facilis velit quasi quos est alias iusto, sapiente ipsa enim eos quo magni inventore amet rem iste perferendis dolor. Nulla a quae, vel deserunt, esse quaerat dolorum voluptas nemo aperiam autem iusto?
      </ItemPharagraph>
      <ItemPharagraph variant={isSmallScreen ? opacityIn : bottomIn} whileInView={isSmallScreen ? opacityIn.whileInView : bottomIn.whileInView} isSmallScreen={isSmallScreen}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minima suscipit possimus rem ipsum eaque laborum labore eligendi inventore amet quibusdam molestiae omnis aliquid, deserunt dignissimos quas ex esse dolorem hic beatae adipisci qui incidunt. Sequi adipisci facilis nesciunt dignissimos dolorem quasi suscipit consequatur accusamus veritatis soluta laudantium quos beatae, eius aliquid aliquam, quisquam autem maxime, nemo provident cum. Possimus dolore fuga quaerat molestias incidunt eligendi vero excepturi facilis velit quasi quos est alias iusto, sapiente ipsa enim eos quo magni inventore amet rem iste perferendis dolor. Nulla a quae, vel deserunt, esse quaerat dolorum voluptas nemo aperiam autem iusto?
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

export default C8