/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import image from '../assets/school.jpg';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

function HeroSection() {

  gsap.registerPlugin(useGSAP,ScrollTrigger);

  useEffect(() => {
    const mainLAHTitle = new SplitType('#mainLAHTitle');
    const tl = gsap.timeline({ pause: true, delay: 0.5 });

    gsap.from('#heroLine',{ 
      x: "1000px",
      ease: 'power3.out',
      duration: 2,
  })
    gsap.from('.Herovideoplaceholder',{ 
      x: "-2000px",
      ease: 'power3.out', 
      duration: 2,
  })
    gsap.from('#mainLAHTitle',{ 
      x: "2000px",
      ease: 'power3.out',
      duration: 2,
    })
    gsap.from('.hero-btns',{ 
      y: "-2000px",
      ease: 'power3.out',
      duration: 2,
    })
    
    tl
    .to('.char', { y:0, stagger: .05,})
    .to('.hero-container', { 
      scrollTrigger: {
      trigger:".hero-container",
      start: "center center",
      end: "60% center",
      toggleActions: "restart pause reverse pause",
      markers: false,
      scrub: true
      },
      backgroundColor: '#7a2329', boxShadow: 'none'
    })
    .to('.backg',{ 
        scrollTrigger: {
        trigger:".hero-container",
        start: "center center",
        end: "60% center",
        toggleActions: "restart pause reverse pause",
        markers: false,
        scrub: true
        },
        scale: 1.5,
    }, "<")
    .to('#mainLAHTitle', {
      scrollTrigger: {
        trigger:".hero-container",
        start: "center center",
        end: "60% center",
        toggleActions: "restart pause reverse pause",
        markers: false,
        scrub: 0
        },
        opacity: 0
    }, "<")
    .to('#heroLine', {
      scrollTrigger: {
        trigger:".hero-container",
        start: "center center",
        end: "60% center",
        toggleActions: "restart pause reverse pause",
        markers: false,
        scrub: 0
        },
        opacity: 0
    }, "<")
    .to('.hero-btns', {
      scrollTrigger: {
        trigger:".hero-container",
        start: "center center",
        end: "60% center",
        toggleActions: "restart pause reverse pause",
        markers: false,
        scrub: 0
        },
        opacity: 0
    }, "<")
    .to('#scroll1', {
      scrollTrigger: {
        trigger:".hero-container",
        start: "center center",
        end: "60% center",
        toggleActions: "restart pause reverse pause",
        markers: false,
        scrub: 0
        },
        opacity: 0
    }, "<");

  });

  return (
    <>
    <div className='hero-container'>
      <img className='backg' src={image} />
      <h2 id="mainLAHTitle">LEADERS AT HEART ACADEMY</h2>
      <iframe  className="Herovideoplaceholder" src="https://www.youtube.com/embed/6X9EldUKpig?si=efFp2a_l9H4MdAwd&rel=0&controls=0" title="YouTube video player" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      <p id="heroLine">The Academy That Will Change Everything</p>
      <div className='hero-btns'>
      
        <motion.div
         whileHover={{ scale: 1.2}}
         whileTap={{
            scale: 0.8,
       borderRadius: "100%"
  }}>
        <Link to='/Staff'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WHO WE ARE
        </Button></Link>
        </motion.div>

        </div>
        <div className="scrollSection">
      <i className="fa-solid fa-angles-down" id="scroll1"></i>
      </div>
    </div>
    </>
  );
}

export default HeroSection;