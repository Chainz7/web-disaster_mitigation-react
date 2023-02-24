import React from 'react'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);

function animated() {
  return (
    <>
      {/* Kabar  */}
      <lord-icon
        src="https://cdn.lordicon.com/kqcykigc.json"
        trigger="loop-on-hover"
        delay="100"
        colors="outline:#121331,primary:#66dac1,secondary:#66dac1"
        style={{width:"250px", height:"250px"}}>
      </lord-icon>
      {/* Pelajari */}
      <lord-icon
        src="https://cdn.lordicon.com/ttioogfl.json"
        trigger="loop-on-hover"
        delay="100"
        colors="primary:#121331,secondary:#ebe6ef,tertiary:#66DAC1,quaternary:#92140c,quinary:#f9c9c0"
        style={{width:"250px", height:"250px"}}>
      </lord-icon>
      {/* Peta  */}
      <lord-icon
        src="https://cdn.lordicon.com/fihkmkwt.json"
        trigger="loop-on-hover"
        delay="100"
        colors="primary:#121331,secondary:#66DAC1"
        style={{width:"250px", height:"250px"}}>
      </lord-icon>
      {/* Device Small  */}
      <lord-icon
        src="https://cdn.lordicon.com/zygphpgt.json"
        trigger="loop-on-hover"
        delay="100"
        colors="primary:#121331,secondary:#66dac1,tertiary:#ffc738,quaternary:#ebe6ef"
        style={{width:"250px", height:"250px"}}>
      </lord-icon>
    </>
  )
}

export default animated