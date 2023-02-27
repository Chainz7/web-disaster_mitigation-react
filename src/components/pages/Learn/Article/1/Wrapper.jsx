import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import Top from './Top'
import Bottom from './Bottom'
import { vari, img } from '../../../../../constants'

defineElement(lottie.loadAnimation);
function Wrapper() {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    gap: 1rem;
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
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  return (
    <Container>
      <Top /> { /* Ini nanti memunculkan isi text saja, jadi nanti ubah posisinya */ }
      <Bottom /> { /* Ini nanti memunculkan isi text saja, jadi nanti ubah posisinya */ }
    </Container>
  )
}

export default Wrapper