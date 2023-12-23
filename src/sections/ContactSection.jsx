import React from 'react'
import Contact from '../components/contact/Contact'

export const ContactSection = () => {
  return (
    <section id="Contact"  className="contactSection">
      <h1 style={{color:"#ffc436",textAlign:"center",marginBottom:"1rem",fontSize:"clamp(4vw,56px,2rem)"}}>Contact Me</h1>
      <Contact/>
    </section>
  )
}

