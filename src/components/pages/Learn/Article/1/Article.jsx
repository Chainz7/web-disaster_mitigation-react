import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { vari, img } from '../../../../../constants'

defineElement(lottie.loadAnimation);
function Article() {
  const Container = styled(motion.div)`

  `
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
  return (
    <Container>
      Article1
    </Container>
  )
}

export default Article