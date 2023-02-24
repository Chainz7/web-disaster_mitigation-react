import React from 'react'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);
function Left() {
  return (
    <div>
      <lord-icon
        src="https://cdn.lordicon.com/pqxdilfs.json"
        trigger="loop-on-hover"
        delay="0"
        colors="outline:#131432,primary:#606874,secondary:#f16521,tertiary:#ebe6ef"
        style={{width:"250px", height:"250px"}}>
      </lord-icon>
    </div>
  )
}

export default Left