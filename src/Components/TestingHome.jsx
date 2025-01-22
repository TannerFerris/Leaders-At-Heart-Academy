/* eslint-disable react/no-unescaped-entities */
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TestingHome.css";
import "./HeroSection.jsx";
import "./HeroSection.css";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logolah from "../assets/lionlogo.png";
import Mission from "../assets/Mission-min.png";
import Vision from "../assets/Vision-min.png";
import Values from "../assets/Values-min.png";
import { ScrollToPlugin } from "gsap/all";

function TestingHome() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    const text1 = new SplitType("#info1");
    const text2 = new SplitType("#info2");
    const text3 = new SplitType("#info3");
    const text4 = new SplitType("#info4");
    const text5 = new SplitType("#info5");
    const text6 = new SplitType("#info6");
    const text7 = new SplitType("#info7");
    const tl1 = gsap.timeline({ pause: true });
    const tl2 = gsap.timeline({ pause: true });

    tl2.progress(1).progress(0);
    tl1.progress(1).progress(0);

    tl1.to(
      ".svg-container",
      {
        scrollTrigger: {
          trigger: ".hero-container",
          start: "center center",
          end: "60% center",
          toggleActions: "restart pause reverse pause",
          markers: false,
          scrub: 0,
        },
        opacity: 1,
      }
    );
    tl1.from(
      text1.chars,
      {
        scrollTrigger: {
          trigger: "#info1",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart pause reverse pause",
          scrub: 3,
          markers: false,
        },
        opacity: 0,
        stagger: 0.2,
      },
    );
    tl1.to(
      "#Target1",
      {
        scrollTrigger: {
          trigger: "#info1",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
        opacity: 1,
      },
      
    );
    tl1.from(
        "#Learn1",
        {
                scrollTrigger: {
          trigger: "#info1",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
          width: "0%",
          delay: 3,
          duration: 1,
          ease: "none",
          opacity: 0,
        },
      );
      tl1.to(
        "#LearnText1",
        {
          scrollTrigger: {
            trigger: "#info1",
            start: "top center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            markers: false,
          },
          opacity: 1,
        }
      );

    tl1.from(
      text2.chars,
      {
        scrollTrigger: {
          trigger: "#info2",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart pause reverse pause",
          scrub: 3,
          markers: false,
        },
        opacity: 0,
        stagger: 0.2,
      },
      "<"
    );
    tl1.to(
      "#Target2",
      {
        scrollTrigger: {
          trigger: "#info2",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
        opacity: 1,
      },
      "<"
    );
    tl1.from(
        "#Learn2",
        {
          scrollTrigger: {
            trigger: "#info2",
            start: "top center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            scrub: 1,
            markers: false,
          },
          width: "0%",
          delay: 3,
          duration: 1,
          ease: "none",
          opacity: 0,
        },
      );
      tl1.to(
        "#LearnText2",
        {
          scrollTrigger: {
            trigger: "#info2",
            start: "top center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            markers: false,
          },
          opacity: 1,
        }
      );
    tl1.from(
      text3.chars,
      {
        scrollTrigger: {
          trigger: "#info3",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart pause reverse pause",
          scrub: 3,
          markers: false,
        },
        opacity: 0,
        stagger: 0.2,
      },
      "<"
    );
    tl1.to(
      "#Target3",
      {
        scrollTrigger: {
          trigger: "#info3",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
        opacity: 1,
      },
      "<"
    );
    tl1.from(
        "#Learn3",
        {
          scrollTrigger: {
            trigger: "#info3",
            start: "top center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            scrub: 1,
            markers: false,
          },
          width: "0%",
          delay: 3,
          duration: 1,
          ease: "none",
          opacity: 0,
        },
      );
      tl1.to(
        "#LearnText3",
        {
          scrollTrigger: {
            trigger: "#info3",
            start: "top center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            markers: false,
          },
          opacity: 1,
        }
      );
    tl1.from(
      text4.chars,
      {
        scrollTrigger: {
          trigger: "#info4",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart pause reverse pause",
          scrub: 3,
          markers: false,
        },
        opacity: 0,
        stagger: 0.2,
      },
      "<"
    );
    tl1.to(
      "#Target4",
      {
        scrollTrigger: {
          trigger: "#info4",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
        opacity: 1,
      },
      "<"
    );
    /*
    tl1.from(
        "#Learn4",
        {
          width: "0%",
          delay: 3,
          duration: 1,
          ease: "none",
          opacity: 0,
        },
      );
      tl1.from(
        "#LearnText4",
        {
          opacity: 0,
          delay: .5,
        }
      );
      */
    tl1.from(
      text5.chars,
      {
        scrollTrigger: {
          trigger: "#info5",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart pause reverse pause",
          scrub: 3,
          markers: false,
        },
        opacity: 0,
        stagger: 0.2,
      },
      "<"
    );
    tl1.to(
      "#Target5",
      {
        scrollTrigger: {
          trigger: "#info5",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
        opacity: 1,
      },
      "<"
    );
    tl1.from(
      "#Learn5",
      {
        scrollTrigger: {
          trigger: "#info5",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
        width: "0%",
        duration: 1,
        ease: "none",
        opacity: 0,
      },
    );
    tl1.to(
      "#LearnText5",
      {
        scrollTrigger: {
          trigger: "#info5",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          markers: false,
        },
        opacity: 1,
      }
    );
    tl1.from(
      text6.chars,
      {
        scrollTrigger: {
          trigger: "#info6",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart pause reverse pause",
          scrub: 3,
          markers: false,
        },
        opacity: 0,
        stagger: 0.2,
      },
      "<"
    );
    tl1.to(
      "#Target6",
      {
        scrollTrigger: {
          trigger: "#info6",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
        opacity: 1,
      },
      "<"
    );
    tl1.from(
        "#Learn6",
        {
          scrollTrigger: {
            trigger: "#info6",
            start: "top center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            scrub: 1,
            markers: false,
          },
          width: "0%",
          duration: 1,
          ease: "none",
          opacity: 0,
        },
      );
      tl1.to(
        "#LearnText6",
        {
          scrollTrigger: {
            trigger: "#info6",
            start: "top center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            markers: false,
          },
          opacity: 1,
        }
      );
    tl1.from(
      text7.chars,
      {
        scrollTrigger: {
          trigger: "#info7",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart pause reverse pause",
          scrub: 3,
          markers: false,
        },
        opacity: 0,
        stagger: 0.2,
      },
      "<"
    );

    
    let svg = document.querySelector(["svg"]);
    let path = svg.querySelector("path");

    const pathLength = path.getTotalLength();


    gsap.set(path, { strokeDasharray: pathLength });

    gsap.fromTo(
      path,
      {
        strokeDashoffset: pathLength,
        drawSVG: 0,
        scrub: 1,
        ease: "none,",
      },
      {
        strokeDashoffset: 0,
        scrub: true,

        ease: "none",
        scrollTrigger: {
          trigger: ".svg-container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          ease: "none,",
        },
      }
    );
    
    tl1.to(
      ".testTitleFinale",
      {
        scrollTrigger: {
          trigger: ".testTitleFinale",
          start: "top center",
          end: "top 45%",
          toggleActions: "restart pause reverse pause",
          markers: false,
          scrub: true,
        },
        borderColor: "#121f30",
        borderRadius: "10px",
        width: "60%",
        backgroundImage:
          "repeating-linear-gradient(45deg, #121f30, #121f30 120px, #7a2329 120px, #7a2329 240px)",
        ease: "none",
      },
      "<"
    );
    tl1.to(
      ".Question",
      {
        scrollTrigger: {
          trigger: ".testTitleFinale",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          markers: false,
          scrub: true,
        },
        display: "none",
        ease: "none",
      },
      "<"
    );
    tl1.to(
      ".Grabber",
      {
        scrollTrigger: {
          trigger: ".testTitleFinale",
          start: "top center",
          end: "top center",
          toggleActions: "restart pause reverse pause",
          markers: false,
          scrub: true,
        },
        display: "inline-block",
        ease: "none",
      },
      "<"
    );

    /*
    gsap.to("#Image1", {
      scrollTrigger: {
        trigger: "#info1",
        start: "top 70%",
        end: "top 60%",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        markers: false,
      },
      translateX: "0%",
    });
    
    gsap.to("#Image2", {
      scrollTrigger: {
        trigger: "#info2",
        start: "top 70%",
        end: "top 60%",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        markers: false,
      },
      translateX: "0%",
    });
    gsap.to("#Image3", {
      scrollTrigger: {
        trigger: "#info3",
        start: "top 70%",
        end: "top 60%",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        markers: false,
      },
      translateX: "0%",
    });
    gsap.to("#Image4", {
      scrollTrigger: {
        trigger: "#info4",
        start: "top 70%",
        end: "top 60%",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        markers: false,
      },
      translateX: "0%",
    });
    gsap.to("#Image5", {
      scrollTrigger: {
        trigger: "#info5",
        start: "top 70%",
        end: "top 60%",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        markers: false,
      },
      translateX: "0%",
    });
    gsap.to("#Image6", {
      scrollTrigger: {
        trigger: "#info6",
        start: "top 70%",
        end: "top 60%",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        markers: false,
      },
      translateX: "0%",
    });
    gsap.to("#Image7", {
      scrollTrigger: {
        trigger: "#info7",
        start: "top 70%",
        end: "top 60%",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
        markers: false,
      },
      translateX: "0%",
    });
    */
    

    document.querySelectorAll("#scroll1").forEach((btn) => {
      btn.addEventListener("click", () => {
         document.getElementById('test1').scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
      });
    });
    document.querySelectorAll("#scroll2").forEach((btn) => {
        btn.addEventListener("click", () => {
           document.getElementById('test2').scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
          });
        });
      });
      document.querySelectorAll("#scroll3").forEach((btn) => {
        btn.addEventListener("click", () => {
           document.getElementById('test3').scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
          });
        });
      });
      document.querySelectorAll("#scroll4").forEach((btn) => {
        btn.addEventListener("click", () => {
           document.getElementById('test4').scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
          });
        });
      });
      document.querySelectorAll("#scroll5").forEach((btn) => {
        btn.addEventListener("click", () => {
           document.getElementById('test5').scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
          });
        });
      });
      document.querySelectorAll("#scroll6").forEach((btn) => {
        btn.addEventListener("click", () => {
           document.getElementById('test6').scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
          });
        });
      });
      document.querySelectorAll("#scroll7").forEach((btn) => {
        btn.addEventListener("click", () => {
           document.getElementById('test7').scrollIntoView({
              behavior: 'auto',
              block: 'start',
              inline: 'start',
          });
        });
      });
      document.querySelectorAll("#scroll8").forEach((btn) => {
        btn.addEventListener("click", () => {
           document.getElementById('test8').scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center',
          });
        });
      });


  });

  return (
    <>
      <div className="svg-container">
        <svg viewBox="0 0 1 2911" fill="none">
          <path d="M0.5 0V2911" stroke="#121f30" strokeWidth={2} />
        </svg>
      </div>
      <main className="home">
        <main id="test1" className="mainSectionDivider">
        <section  className="testSectionLeft">
          <div className="ContentSection">
            <div className="testTitleLeft">
              <h1>Pathway+ Program</h1>
            </div>
            <div className="Rotationwrapper">
              <div className="words">
                <span className="rollerTitle">
                  &#9745; Earn College Credits
                </span>
                <span className="rollerTitle">
                  &#9745; Specialized Career Tracks
                </span>
                <span className="rollerTitle">
                  &#9745; Real-World Experience
                </span>
                <span className="rollerTitle">&#9745; Flexiable Future</span>
                <span className="rollerTitle">
                  &#9745; Earn College Credits
                </span>
              </div>
            </div>
            <div className="testInfoLeft">
              <p id="info1">
                Where education meets innovation. Our groundbreaking hybrid
                model is designed for amibitious students who want more than a
                diploma. With Pathway+, students graduate with an associate's
                degree, up to 60 college credits, and industry-recognized
                certifications in cutting-edge fields like Veterinary Tech, C++,
                Cosmetology, and Fire Safety - all while gaining hands-on
                experience through internships and real-world projects.
              </p>
            </div>
            <div className="LearnContainerLeft">
              <Link to="/Pathway+" id="Learn1" className="LearnButtons">
                <h1 id="LearnText1">Learn More</h1>
              </Link>
            </div>
          </div>
          <section id="Target1" className="targetContainer">
            <div className="Target">1/7</div>
          </section>
          <div className="OppositeSectionRight">
            <img src={logolah} id="Image1" className="HomeimagesRight"></img>
          </div>
        </section>
        </main>
        <div className="scrollContainer">
          <i className="fa-solid fa-angles-down" id="scroll2"></i>
        </div>
        <div className="testDivider"></div>
        <main id="test2" className="mainSectionDivider">
        <section  className="testSectionRight">
          <div className="ContentSection">
            <div className="testTitleRight">
              <h1>How it Works</h1>
            </div>
            <div id="info2" className="testInfoRight">
              <p>
                Students take dual-credit courses starting in high school,
                building up to an associate's degree or 60 credits that can
                transfer to a university. Students receive a comprehensive
                curriculum, including academic courses, workshops, and hands-on
                projects.
              </p>
            </div>
            <div className="LearnContainerRight">
              <Link to="/How it Works" id="Learn2" className="LearnButtons">
              <h1 id="LearnText2">Learn More</h1>
              </Link>
            </div>
          </div>
          <section id="Target2" className="targetContainer">
            <div className="Target">2/7</div>
          </section>
          <div className="OppositeSectionLeft">
          <img src={Mission} id="Image2" className="HomeimagesLeft"></img>
          </div>
        </section>
        </main>
        <div className="scrollContainer">
          <i className="fa-solid fa-angles-down" id="scroll3"></i>
        </div>
        <div className="testDivider"></div>
        <main id="test3" className="mainSectionDivider">
        <section id="test3" className="testSectionLeft">
          <div className="ContentSection">
            <div className="testTitleLeft">
              <h1>Two-Way Dual</h1>
              <h1>Language Model</h1>
            </div>
            <div id="info3" className="testInfoLeft">
              <p>
                Setting every student on the path to bilingualism and biliteracy
                - and it's mandatory for all. From kindergarten through
                highschool, every student, whether native English speaker or a
                native Spanish speaker, participates in an environment where 50%
                of instruction is in Spanish and 50% is in English. This balance
                remains consistent throughout their school experience, providing
                all students with equal exposure to both languages and ensuring
                a strong foundation in both.
              </p>
            </div>
            <div className="LearnContainerLeft">
              <Link to="/Two-Way Dual Language Model" id="Learn3" className="LearnButtons">
              <h1 id="LearnText3">Learn More</h1>
              </Link>
            </div>
          </div>
          <section id="Target3" className="targetContainer">
            <div className="Target">3/7</div>
          </section>
          <div className="OppositeSectionRight">
            <img src={Vision} id="Image3" className="HomeimagesRight"></img>
          </div>
        </section>
        </main>
        <div className="scrollContainer">
          <i className="fa-solid fa-angles-down" id="scroll4"></i>
        </div>
        <div className="testDivider"></div>
        <main id="test4" className="mainSectionDivider">
        <section className="testSectionRight">
          <div className="ContentSection">
            <div className="testTitleRight">
              <h1>Tailored Support for</h1>
              <h1>Every Learner</h1>
            </div>
            <div id="info4" className="testInfoRight">
              <p>
                Recognizing that students may enter at different stages, we
                provide customized language support. Every student receives a
                language proficiency assessment upon entering the program to
                determine their starting point. From there, we offer targeted
                interventions based on individual needs. Through language
                enrichment programs, peer mentoring, and small group
                instruction, we ensure that all students are not only
                progressing but thriving in both languages.
              </p>
            </div>
            <div className="LearnContainerRight">

            </div>
          </div>
          <section id="Target4" className="targetContainer">
            <div className="Target">4/7</div>
          </section>
          <div className="OppositeSectionLeft">
            <img src={Values} id="Image4" className="HomeimagesLeft"></img>
          </div>
        </section>
        </main>
        <div className="scrollContainer">
          <i className="fa-solid fa-angles-down" id="scroll5"></i>
        </div>
        <div className="testDivider"></div>
        <main id="test5" className="mainSectionDivider">
        <section className="testSectionLeft">
          <div className="ContentSection">
            <div className="testTitleLeft">
              <h1>Innovative Solutions for Seamless Integration</h1>
            </div>
            <div id="info5" className="testInfoLeft">
              <p>
                To support Students who join mid-way through the program, we
                have developed several innovative strategies to ensure smooth
                integration. <br />
                <br />
                - Bridge and Catch-Up Programs <br />
                - Flexible Instructional Models <br />- Technology-Enhanced
                Learning
              </p>
            </div>
            <div className="LearnContainerLeft">
              <Link to="Innovative Solutions for Seamless Integration" id="Learn5" className="LearnButtons">
              <h1 id="LearnText5">Learn More</h1>
              </Link>
            </div>
          </div>
          <section id="Target5" className="targetContainer">
            <div className="Target">5/7</div>
          </section>
          <div className="OppositeSectionRight">
        <svg width="669" height="439" viewBox="0 0 669 439" fill="none" id="Image5" className="HomeimagesRight">
<path d="M426.32 329.105V434.93H133.454C100.086 434.93 72.9373 411.193 72.9373 382.017C72.9373 352.842 100.086 329.105 133.454 329.105H426.32Z" fill="#F2F2F2"/>
<path d="M433.514 434.116C433.514 435.195 433.04 436.23 432.197 436.993C431.354 437.757 430.21 438.186 429.018 438.186H128.238C111.902 438.186 96.2349 432.311 84.6837 421.854C73.1324 411.396 66.643 397.213 66.643 382.424C66.643 367.635 73.1324 353.452 84.6837 342.995C96.2349 332.537 111.902 326.663 128.238 326.663H429.018C430.21 326.663 431.354 327.091 432.197 327.855C433.04 328.618 433.514 329.653 433.514 330.733C433.514 331.812 433.04 332.848 432.197 333.611C431.354 334.374 430.21 334.803 429.018 334.803H128.238C114.287 334.803 100.907 339.82 91.0419 348.751C81.177 357.682 75.6349 369.794 75.6349 382.424C75.6349 395.054 81.177 407.167 91.0419 416.098C100.907 425.028 114.287 430.046 128.238 430.046H429.018C430.21 430.046 431.354 430.475 432.197 431.238C433.04 432.001 433.514 433.036 433.514 434.116Z" fill="white"/>
<path d="M426.32 353.526H111.603C111.364 353.526 111.135 353.44 110.967 353.287C110.798 353.135 110.703 352.928 110.703 352.712C110.703 352.496 110.798 352.289 110.967 352.136C111.135 351.984 111.364 351.898 111.603 351.898H426.32C426.559 351.898 426.788 351.984 426.956 352.136C427.125 352.289 427.22 352.496 427.22 352.712C427.22 352.928 427.125 353.135 426.956 353.287C426.788 353.44 426.559 353.526 426.32 353.526Z" fill="#CCCCCC"/>
<path d="M426.32 373.063H111.603C111.364 373.063 111.135 372.977 110.967 372.824C110.798 372.672 110.703 372.465 110.703 372.249C110.703 372.033 110.798 371.826 110.967 371.673C111.135 371.521 111.364 371.435 111.603 371.435H426.32C426.559 371.435 426.788 371.521 426.956 371.673C427.125 371.826 427.22 372.033 427.22 372.249C427.22 372.465 427.125 372.672 426.956 372.824C426.788 372.977 426.559 373.063 426.32 373.063Z" fill="#CCCCCC"/>
<path d="M426.32 392.6H111.603C111.364 392.6 111.135 392.514 110.967 392.361C110.798 392.209 110.703 392.002 110.703 391.786C110.703 391.57 110.798 391.363 110.967 391.21C111.135 391.057 111.364 390.972 111.603 390.972H426.32C426.559 390.972 426.788 391.057 426.956 391.21C427.125 391.363 427.22 391.57 427.22 391.786C427.22 392.002 427.125 392.209 426.956 392.361C426.788 392.514 426.559 392.6 426.32 392.6Z" fill="#CCCCCC"/>
<path d="M426.32 412.137H111.603C111.364 412.137 111.135 412.051 110.967 411.898C110.798 411.746 110.703 411.539 110.703 411.323C110.703 411.107 110.798 410.9 110.967 410.747C111.135 410.594 111.364 410.509 111.603 410.509H426.32C426.559 410.509 426.788 410.594 426.956 410.747C427.125 410.9 427.22 411.107 427.22 411.323C427.22 411.539 427.125 411.746 426.956 411.898C426.788 412.051 426.559 412.137 426.32 412.137Z" fill="#CCCCCC"/>
<path d="M652.663 349.025L579.321 431.429L351.271 265.08C325.288 246.127 320.599 212.222 340.819 189.504C361.039 166.786 398.631 163.723 424.614 182.676L652.663 349.025Z" fill="#F2F2F2"/>
<path d="M585.486 434.881C584.738 435.721 583.652 436.258 582.466 436.373C581.281 436.489 580.093 436.174 579.164 435.497L344.953 264.652C332.232 255.373 324.104 241.9 322.357 227.196C320.61 212.492 325.387 197.762 335.636 186.246C345.886 174.73 360.768 167.372 377.011 165.79C393.253 164.208 409.524 168.532 422.245 177.811L656.456 348.656C656.916 348.991 657.299 349.405 657.582 349.874C657.866 350.343 658.044 350.858 658.107 351.39C658.171 351.922 658.118 352.459 657.951 352.972C657.785 353.485 657.509 353.964 657.138 354.38C656.768 354.797 656.31 355.143 655.792 355.399C655.273 355.655 654.704 355.816 654.117 355.873C653.53 355.93 652.936 355.882 652.369 355.731C651.802 355.581 651.274 355.33 650.814 354.994L416.603 184.15C411.224 180.223 405.044 177.295 398.414 175.531C391.785 173.767 384.837 173.203 377.967 173.871C371.096 174.539 364.439 176.425 358.374 179.423C352.31 182.421 346.957 186.471 342.622 191.341C338.287 196.212 335.054 201.809 333.108 207.811C331.162 213.813 330.542 220.103 331.283 226.323C332.023 232.542 334.11 238.568 337.423 244.057C340.737 249.546 345.212 254.391 350.595 258.314L584.806 429.158C585.734 429.835 586.327 430.819 586.455 431.892C586.582 432.965 586.234 434.04 585.486 434.881Z" fill="#CCCCCC"/>
<path d="M635.738 368.041L390.673 189.28C390.581 189.213 390.505 189.131 390.448 189.037C390.392 188.943 390.356 188.84 390.344 188.734C390.331 188.627 390.342 188.52 390.375 188.417C390.408 188.315 390.463 188.219 390.537 188.136C390.611 188.053 390.703 187.983 390.807 187.932C390.91 187.881 391.024 187.849 391.141 187.837C391.259 187.826 391.378 187.835 391.491 187.865C391.604 187.896 391.71 187.946 391.802 188.013L636.866 366.774C636.958 366.841 637.035 366.923 637.092 367.017C637.148 367.111 637.184 367.214 637.197 367.32C637.21 367.427 637.199 367.534 637.166 367.637C637.133 367.74 637.077 367.836 637.003 367.919C636.929 368.002 636.837 368.071 636.734 368.123C636.63 368.174 636.516 368.206 636.399 368.217C636.281 368.229 636.162 368.219 636.049 368.189C635.935 368.159 635.83 368.108 635.738 368.041Z" fill="#CCCCCC"/>
<path d="M622.198 383.254L377.133 204.493C376.948 204.358 376.83 204.161 376.804 203.947C376.779 203.732 376.849 203.517 376.998 203.349C377.148 203.181 377.365 203.074 377.602 203.051C377.838 203.028 378.076 203.091 378.262 203.226L623.326 381.987C623.418 382.054 623.495 382.136 623.552 382.23C623.608 382.324 623.644 382.427 623.657 382.534C623.669 382.64 623.659 382.747 623.626 382.85C623.592 382.953 623.537 383.049 623.463 383.132C623.389 383.215 623.297 383.284 623.194 383.336C623.09 383.387 622.976 383.419 622.858 383.431C622.741 383.442 622.622 383.432 622.509 383.402C622.395 383.372 622.29 383.322 622.198 383.254Z" fill="#CCCCCC"/>
<path d="M608.658 398.467L363.593 219.706C363.407 219.571 363.289 219.374 363.263 219.16C363.238 218.945 363.307 218.73 363.457 218.562C363.607 218.394 363.824 218.286 364.061 218.263C364.298 218.24 364.536 218.303 364.721 218.439L609.786 397.2C609.878 397.267 609.954 397.35 610.011 397.443C610.068 397.537 610.103 397.64 610.116 397.746C610.128 397.853 610.118 397.96 610.085 398.063C610.051 398.165 609.996 398.261 609.922 398.344C609.848 398.427 609.756 398.497 609.653 398.548C609.549 398.599 609.435 398.631 609.318 398.643C609.201 398.654 609.082 398.645 608.968 398.615C608.855 398.584 608.75 398.534 608.658 398.467Z" fill="#CCCCCC"/>
<path d="M595.117 413.68L350.053 234.92C349.961 234.852 349.885 234.77 349.828 234.676C349.771 234.582 349.736 234.479 349.723 234.373C349.71 234.266 349.721 234.159 349.754 234.056C349.788 233.954 349.843 233.858 349.917 233.775C349.991 233.692 350.083 233.622 350.186 233.571C350.29 233.52 350.404 233.488 350.521 233.476C350.638 233.465 350.757 233.474 350.87 233.505C350.984 233.535 351.089 233.585 351.181 233.652L596.246 412.413C596.338 412.48 596.414 412.562 596.471 412.656C596.528 412.75 596.564 412.853 596.576 412.96C596.589 413.066 596.579 413.174 596.545 413.276C596.512 413.379 596.457 413.475 596.383 413.558C596.308 413.641 596.217 413.71 596.113 413.762C596.009 413.813 595.896 413.845 595.778 413.857C595.661 413.868 595.542 413.858 595.428 413.828C595.315 413.798 595.209 413.748 595.117 413.68Z" fill="#CCCCCC"/>
<path d="M304 317.982L293.721 317.981L288.832 282.085L304.004 282.087L304 317.982Z" fill="#FFB8B8"/>
<path d="M286.377 315.322H306.203V326.622H273.895C273.895 325.138 274.218 323.669 274.845 322.298C275.472 320.927 276.392 319.681 277.551 318.632C278.71 317.582 280.086 316.75 281.6 316.182C283.115 315.614 284.738 315.322 286.377 315.322Z" fill="#2F2E41"/>
<path d="M198.979 317.982L188.699 317.981L183.81 282.085L198.983 282.087L198.979 317.982Z" fill="#FFB8B8"/>
<path d="M181.356 315.322H201.182V326.622H168.874C168.874 325.138 169.197 323.669 169.824 322.298C170.451 320.927 171.371 319.681 172.53 318.632C173.689 317.582 175.065 316.75 176.58 316.182C178.094 315.614 179.717 315.322 181.356 315.322Z" fill="#2F2E41"/>
<path d="M233.315 51.7184V47.6482C233.315 40.6855 236.37 34.008 241.808 29.0847C247.246 24.1613 254.622 21.3954 262.313 21.3954C270.004 21.3954 277.381 24.1613 282.819 29.0847C288.257 34.008 291.313 40.6855 291.313 47.6482V51.7184C291.313 56.738 289.11 61.552 285.189 65.1014C281.269 68.6508 275.951 70.6448 270.406 70.6448H254.221C251.475 70.6448 248.757 70.1553 246.22 69.2041C243.684 68.253 241.379 66.8589 239.438 65.1014C237.496 63.3439 235.957 61.2575 234.906 58.9612C233.855 56.665 233.315 54.2039 233.315 51.7184Z" fill="#2F2E41"/>
<path d="M262.314 72.0453C274.511 72.0453 284.399 63.0939 284.399 52.0517C284.399 41.0095 274.511 32.0581 262.314 32.0581C250.116 32.0581 240.228 41.0095 240.228 52.0517C240.228 63.0939 250.116 72.0453 262.314 72.0453Z" fill="#FFB8B8"/>
<path d="M142.185 120.767C143.081 120.001 144.152 119.422 145.322 119.071C146.492 118.72 147.733 118.606 148.957 118.736C150.181 118.866 151.359 119.238 152.408 119.825C153.456 120.412 154.35 121.199 155.025 122.133L173.958 118.891L178.94 128.826L152.133 133.064C150.326 133.988 148.207 134.279 146.178 133.883C144.15 133.488 142.352 132.432 141.126 130.916C139.899 129.4 139.33 127.53 139.525 125.659C139.72 123.789 140.666 122.048 142.185 120.767Z" fill="#FFB8B8"/>
<path d="M245.343 84.9763L214.298 103.491L161.912 118.635C161.218 118.837 160.622 119.251 160.227 119.805C159.831 120.36 159.66 121.022 159.743 121.678L160.886 130.589C160.937 130.983 161.078 131.364 161.301 131.706C161.523 132.048 161.822 132.344 162.179 132.576C162.535 132.807 162.941 132.968 163.37 133.049C163.8 133.13 164.243 133.129 164.672 133.046L213.974 123.479C216.36 123.019 218.617 122.119 220.603 120.837L255.481 98.372C256.745 97.5532 257.754 96.4521 258.409 95.1758C259.064 93.8995 259.344 92.4914 259.22 91.0884C259.092 89.6836 258.562 88.3331 257.683 87.1697C256.804 86.0064 255.605 85.0704 254.205 84.4537C252.805 83.837 251.251 83.5608 249.697 83.6525C248.144 83.7441 246.643 84.2003 245.343 84.9763Z" fill="#CCCCCC"/>
<path d="M293.904 307.795C293.115 307.795 292.343 307.588 291.683 307.197C291.022 306.807 290.501 306.25 290.184 305.596L243.057 200.178C242.947 199.949 242.762 199.756 242.528 199.626C242.293 199.495 242.02 199.432 241.745 199.446C241.47 199.46 241.206 199.55 240.989 199.704C240.772 199.858 240.613 200.068 240.532 200.306L202.084 302.935C201.921 303.413 201.653 303.855 201.295 304.236C200.936 304.616 200.496 304.926 200.001 305.146C199.505 305.367 198.965 305.493 198.414 305.517C197.863 305.542 197.312 305.464 196.795 305.289L183.902 300.912C183.202 300.676 182.588 300.27 182.128 299.737C181.668 299.205 181.381 298.568 181.297 297.896C175.497 252.153 226.077 136.692 226.589 135.531L226.73 135.21L272.838 144.443L272.934 144.538C291.33 162.706 306.45 277.293 309.295 300.079C309.401 300.903 309.194 301.734 308.708 302.436C308.222 303.138 307.487 303.67 306.623 303.943L295.243 307.587C294.813 307.725 294.36 307.795 293.904 307.795Z" fill="#2F2E41"/>
<path d="M254.177 148.16C243.006 148.16 230.552 146.143 226.718 137.821L226.63 137.63L226.749 137.452C229.775 132.958 233.774 125.29 231.625 123.851C227.39 121.017 225.335 116.354 225.518 109.992C225.914 96.1809 236.308 83.919 251.384 79.4796C255.592 78.2604 259.874 77.2623 264.209 76.4901C267.369 75.9128 270.632 75.9763 273.762 76.6761C276.892 77.3758 279.812 78.6945 282.312 80.5373C284.844 82.3922 286.89 84.7316 288.304 87.3877C289.719 90.0437 290.465 92.9503 290.491 95.8987C290.649 110.658 288.139 131.214 275.284 145.327C274.681 145.982 273.843 146.424 272.916 146.574C266.732 147.587 260.462 148.117 254.177 148.16Z" fill="#CCCCCC"/>
<path d="M250.022 147.607C250.63 145.633 252.074 143.956 254.04 142.94C256.006 141.924 258.336 141.652 260.523 142.182C260.969 142.295 261.405 142.441 261.825 142.619L276.2 130.775L286.197 136.873L265.64 153.342C264.712 154.857 263.25 156.047 261.488 156.724C259.727 157.4 257.765 157.524 255.917 157.075C254.84 156.808 253.832 156.351 252.952 155.73C252.072 155.108 251.336 154.335 250.788 153.454C250.24 152.574 249.89 151.604 249.758 150.6C249.627 149.597 249.716 148.579 250.022 147.607Z" fill="#FFB8B8"/>
<path d="M273.923 147.758C272.99 147.758 272.086 147.466 271.364 146.931L265.695 142.737C265.223 142.388 264.844 141.946 264.587 141.445C264.329 140.944 264.201 140.397 264.21 139.844C264.219 139.292 264.367 138.749 264.641 138.255C264.915 137.761 265.309 137.33 265.794 136.994L289.57 120.486C289.852 120.289 290.036 120 290.084 119.68C290.132 119.361 290.039 119.038 289.825 118.78L275.149 101.217C273.444 99.1828 272.589 96.6684 272.735 94.1187C272.881 91.5689 274.019 89.1481 275.947 87.2849C277.978 85.2993 280.759 84.0775 283.739 83.8617C286.718 83.646 289.678 84.4521 292.032 86.1202L292.125 86.2089L307.449 106.073C309.106 107.25 310.44 108.757 311.348 110.477C312.255 112.197 312.711 114.084 312.679 115.99C312.648 117.896 312.13 119.77 311.167 121.465C310.203 123.16 308.82 124.63 307.125 125.761L276.332 147.039C275.634 147.506 274.79 147.758 273.923 147.758Z" fill="#CCCCCC"/>
<path d="M242.751 46.4271V36.5071L262.313 28.7738L280.967 36.5071V46.4271C280.967 46.8589 280.777 47.273 280.44 47.5784C280.103 47.8837 279.645 48.0552 279.168 48.0552H244.549C244.072 48.0552 243.615 47.8837 243.278 47.5784C242.94 47.273 242.751 46.8589 242.751 46.4271Z" fill="#2F2E41"/>
<path d="M261.415 22.7114C258.539 14.3769 264.58 4.82507 273.51 1.52604C282.441 -1.773 293.125 0.53313 300.66 5.98363C308.196 11.4341 312.871 19.5979 315.348 28.0369C317.826 36.4759 318.296 45.2757 318.753 53.9977C329.725 55.8223 337.189 67.6038 333.388 77.0988C329.587 86.5938 315.519 91.3109 305.803 86.3482C296.087 81.3854 293.273 68.0448 300.285 60.1901C303.603 56.4734 305.456 51.8608 305.552 47.0829C305.647 42.3049 303.979 37.6347 300.811 33.812C297.644 29.9892 293.158 27.2325 288.065 25.9783C282.971 24.7241 277.561 25.0443 272.691 26.888C267.283 28.9352 260.498 23.616 261.415 22.7114Z" fill="#2F2E41"/>
<path d="M138.129 82.2854C124.992 82.2073 112.02 79.6352 100.05 74.7352C99.3371 74.4478 98.7323 73.9789 98.309 73.3857C97.8856 72.7925 97.6619 72.1007 97.6652 71.3944V41.7488C97.6664 40.7776 98.0931 39.8465 98.8516 39.1597C99.6102 38.473 100.639 38.0867 101.712 38.0856H174.546C175.619 38.0867 176.648 38.473 177.406 39.1597C178.165 39.8465 178.591 40.7776 178.593 41.7488V71.3945C178.596 72.1007 178.372 72.7925 177.949 73.3857C177.525 73.9789 176.921 74.4478 176.208 74.7353C164.238 79.6352 151.266 82.2073 138.129 82.2854Z" fill="white"/>
<path d="M138.119 58.2688C137.579 58.2693 137.044 58.172 136.546 57.9826L78.7896 35.9225C78.0447 35.638 77.4111 35.1581 76.9704 34.5446C76.5296 33.9312 76.302 33.2122 76.3168 32.4805C76.3316 31.7488 76.5882 31.0379 77.0535 30.4394C77.5188 29.841 78.1714 29.3824 78.9272 29.1228L136.685 9.28653C137.615 8.96557 138.644 8.96755 139.572 9.2921L196.556 29.1283C197.308 29.39 197.956 29.8487 198.418 30.4457C198.88 31.0428 199.135 31.751 199.15 32.4798C199.164 33.2086 198.939 33.9249 198.502 34.537C198.064 35.1491 197.435 35.6291 196.695 35.9157L139.71 57.9755C139.207 58.1695 138.666 58.2693 138.119 58.2688Z" fill="white"/>
<path d="M104.409 76.7525C107.389 76.7525 109.804 74.5657 109.804 71.8682C109.804 69.1707 107.389 66.984 104.409 66.984C101.429 66.984 99.0139 69.1707 99.0139 71.8682C99.0139 74.5657 101.429 76.7525 104.409 76.7525Z" fill="#3F3D56"/>
<path opacity="0.2" d="M196.892 32.7844L139.907 54.8442C139.463 55.0162 138.985 55.1054 138.502 55.1065C138.018 55.1075 137.54 55.0204 137.095 54.8504L79.3379 32.7909C78.6126 32.5205 78.0075 32.039 77.6181 31.4224C77.3635 31.8222 77.2057 32.2665 77.1552 32.7257C77.1047 33.185 77.1627 33.6487 77.3254 34.0861C77.488 34.5235 77.7516 34.9245 78.0986 35.2626C78.4456 35.6007 78.868 35.8681 79.3379 36.0471L137.095 58.1066C137.54 58.2766 138.018 58.3637 138.502 58.3626C138.985 58.3616 139.463 58.2724 139.907 58.1004L196.892 36.0406C197.359 35.8601 197.779 35.5918 198.124 35.2536C198.468 34.9153 198.73 34.5148 198.891 34.0783C199.052 33.6419 199.109 33.1795 199.058 32.7217C199.007 32.2638 198.849 31.821 198.595 31.4224C198.209 32.034 197.61 32.5128 196.892 32.7844Z" fill="black"/>
<path d="M104.862 71.8491C105.101 71.8491 105.33 71.7634 105.498 71.6107C105.667 71.458 105.762 71.251 105.762 71.0351V43.7962L135.418 34.0154C135.657 34.0186 135.887 33.9359 136.058 33.7855C136.229 33.6351 136.327 33.4294 136.331 33.2135C136.334 32.9976 136.243 32.7892 136.077 32.6343C135.911 32.4794 135.683 32.3905 135.445 32.3873L105.788 42.1681C105.55 42.1631 105.312 42.2021 105.091 42.2825C104.869 42.363 104.668 42.4834 104.5 42.6363C104.329 42.7874 104.194 42.9679 104.102 43.1671C104.01 43.3663 103.963 43.5802 103.963 43.7962V71.0351C103.963 71.251 104.058 71.458 104.227 71.6107C104.395 71.7633 104.624 71.8491 104.862 71.8491Z" fill="#3F3D56"/>
</svg>
          </div>
        </section>
        </main>
        <div className="scrollContainer">
          <i className="fa-solid fa-angles-down" id="scroll6"></i>
        </div>
        <div className="testDivider"></div>
        <main id="test6" className="mainSectionDivider">
        <section className="testSectionRight">
          <div className="ContentSection">
            <div className="testTitleRight">
              <h1>Why Leaders at Heart?</h1>
            </div>
            <div id="info6" className="testInfoRight">
              <p>
                Our program isn't just about preparing students to meet the
                challenges of tomorrow; it's about empowering them to redefine
                what's possible. We are setting the stage for a generation of
                bilingual leaders, academic trailblazers, and industry
                innovators who won't just meet the demands of the future -
                they'll shape it.
              </p>
            </div>
            <div className="LearnContainerRight">
              <Link to="/Why Leaders at Heart?" id="Learn6" className="LearnButtons">
              <h1 id="LearnText6">Learn More</h1>
              </Link>
            </div>
          </div>
          <section id="Target6" className="targetContainer">
            <div className="Target">6/7</div>
          </section>
          <div className="OppositeSectionLeft">
           
            <svg  id="Image6" className="HomeimagesLeft" width="851.034" height="557.34684" viewBox="0 0 851.034 557.34684" ><path d="M785.20402,269.12891H95.10929c-9.25,0-16.77539-7.52539-16.77539-16.77637V16.77539c0-9.25,7.52539-16.77539,16.77539-16.77539H785.20402c9.25,0,16.77539,7.52539,16.77539,16.77539V252.35254c0,9.25098-7.52539,16.77637-16.77539,16.77637ZM95.10929,2c-8.14697,0-14.77539,6.62842-14.77539,14.77539V252.35254c0,8.14746,6.62842,14.77637,14.77539,14.77637H785.20402c8.14697,0,14.77539-6.62891,14.77539-14.77637V16.77539c0-8.14697-6.62842-14.77539-14.77539-14.77539H95.10929Z" fill="#3f3d56"/><rect id="uuid-dac6dc9f-03bc-4283-a90c-97bcdcbf45dc" y="550.55711" width="851.034" height="1.683" fill="#e6e6e6"/><rect id="uuid-2f9646f7-bb94-4523-8d2e-fd8f0877664c" y="464.55711" width="851.034" height="1.683" fill="#e6e6e6"/><g><path id="uuid-bb35f39c-94aa-41c4-b5d9-34ca9a9e88f1-314" d="M387.84012,277.7924c.6111,7.67992,5.06908,13.58982,9.95656,13.20011,4.88749-.38971,8.35284-6.93077,7.7405-14.61335-.20251-3.07223-1.13781-6.05129-2.72768-8.68793l-3.00018-32.50744-15.22478,1.73305,4.57404,31.86258c-1.15299,2.85593-1.6051,5.94649-1.31846,9.01298Z" fill="#ffb6b6"/><path d="M369.65265,126.13324s14.23183-7.53394,21.44832,3.72455c7.21649,11.25849,12.19715,133.02108,12.19715,133.02108l-20.0018,2.13549-3.79168-85.80267-9.85198-53.07844Z" fill="#e6e6e6"/><g><polygon points="340.11391 458.20431 351.70127 458.20318 357.21344 413.50859 340.11158 413.50978 340.11391 458.20431" fill="#ffb6b6"/><path d="M379.81365,457.94146h0c.36079,.60764,.55116,2.56882,.55116,3.27545h0c0,2.172-1.76073,3.9328-3.9328,3.9328h-35.88469c-1.48173,0-2.68297-1.20117-2.68297-2.68297v-1.49399s-1.77518-4.49023,1.8796-10.02469c0,0,4.54241,4.33356,11.32993-2.45396l2.00158-3.62601,14.48869,10.59629,8.03086,.98852c1.75699,.21625,3.31472-.03356,4.21849,1.48856h.00014Z" fill="#2f2e41"/></g><g><polygon points="407.16841 456.28595 418.39497 453.41695 412.67359 408.74865 396.10412 412.98257 407.16841 456.28595" fill="#ffb6b6"/><path d="M445.56792,446.20546h0c.49996,.49944,1.1698,2.35248,1.3447,3.03713h0c.53758,2.10442-.73257,4.24622-2.83706,4.78381l-34.76822,8.88157c-1.43562,.36673-2.89679-.49976-3.26354-1.93545l-.36977-1.44751s-2.83129-3.91116-.66002-10.178c0,0,5.47365,3.07447,10.37006-5.1818l1.04186-4.0086,16.66052,6.68062,8.02566-1.0299c1.75585-.22534,3.20328-.85292,4.45567,.39816l.00014-.00003Z" fill="#2f2e41"/></g><polygon points="330.5274 116.5252 329.97801 112.53821 336.50788 96.59024 354.44935 94.59675 358.32324 117.42831 330.5274 116.5252" fill="#ffb6b6"/><polygon points="330.5274 116.5252 329.97801 112.53821 336.50788 96.59024 354.44935 94.59675 358.32324 117.42831 330.5274 116.5252" opacity=".1"/><polygon points="309.59569 229.15772 301.6217 251.08618 307.60219 263.04715 337.50463 436.4813 357.38465 436.4813 353.4526 282.98211 399.30301 436.4813 418.97897 436.4813 403.15657 332.81951 391.32902 237.13171 384.15521 232.6999 349.46561 213.20976 309.59569 229.15772" fill="#2f2e41"/><polygon points="360.42983 244.10894 348.46886 246.10244 332.52089 208.22602 368.40382 208.22602 360.42983 244.10894" fill="#e6e6e6"/><polygon points="384.35179 234.14146 360.42983 244.10894 352.45585 226.16748 348.46886 246.10244 306.60544 232.62639 312.58593 208.22602 306.60544 128.48618 327.71662 114.41198 330.5274 112.53821 356.44284 114.53171 358.71546 115.76767 374.38431 124.49919 378.3713 190.28455 384.35179 234.14146" fill="#2f2e41"/><polygon points="358.71546 115.76767 347.47211 163.37236 327.71662 114.41198 330.5274 112.53821 356.44284 114.53171 358.71546 115.76767" fill="#e6e6e6"/><polygon points="339.49813 112.53821 335.51114 119.4047 339.49813 121.69353 337.50463 163.49619 345.47862 174.33659 353.4526 158.31478 347.47211 121.69353 349.46561 112.53821 339.49813 112.53821" fill="#2f2e41"/><circle cx="345.47862" cy="89.61301" r="18.93821" fill="#ffb6b6"/><path d="M333.37575,91.27425l4.09196,1.78584,1.78584-10.71504s7.14336-3.57168,12.50088-1.78584,14.28672,0,14.28672,0c0,0,0-17.8584-12.50088-17.8584s-25.00176,1.78584-25.00176,7.14336-5.35752,10.71504-5.35752,10.71504c0,0-7.14336,10.71504,0,17.8584,7.14336,7.14336,10.71504,7.14336,10.71504,7.14336l-.52028-14.28672Z" fill="#2f2e41"/><path id="uuid-97233535-ec91-4408-928f-bf1e5273ca3e-315" d="M296.62879,277.23211c-.20767,7.7014,3.59771,14.05116,8.49895,14.18252s9.04142-6.00486,9.24813-13.70902c.12478-3.07637-.48897-6.13789-1.78994-8.92841l.46781-32.64224-15.32272,.10697,1.16561,32.1681c-1.44966,2.71738-2.22731,5.74249-2.26784,8.82207Z" fill="#ffb6b6"/><path d="M315.58593,124.46179s-12.95772-3.98699-18.93821,7.97398c-5.98049,11.96098,1.9935,133.56423,1.9935,133.56423h20.11547l-5.33868-85.72033,2.16793-55.81789Z" fill="#e6e6e6"/></g><g><path d="M812.65719,351.00821l-48.32166-14.79238c-1.06882-.32716-2.19038-.4466-3.30415-.3518l-244.90187,20.84269c-3.49184,.29715-4.36942,5.00693-1.21895,6.54176l7.84468,3.82176h-.20917v182.95168h7.39199v-179.45234l24.58572,11.97763c1.88116,.91644,3.98046,1.29052,6.06233,1.08022l2.61589-.26422v166.65871h7.39199v-167.4054l189.41967-19.13326v186.53866h7.39199v-187.28535l31.41595-3.17331v190.45866h7.39199v-191.20535l5.7314-.57891c4.0236-.40645,4.57916-6.04575,.71223-7.22945Z" fill="#3f3d56"/><path d="M587.22595,355.98226c4.61999,0,72.99587-8.31599,72.99587-8.31599l10.16398,13.85998-71.14788,13.85998-12.01198-19.40397Z" fill="#fff"/><g><polygon points="662.26939 542.91667 650.39 542.89512 644.81757 497.06436 662.35045 497.09569 662.26939 542.91667" fill="#a0616a"/><path d="M621.56955,542.57731h0c-.37095,.62232-.56957,2.63259-.57082,3.35703h0c-.00382,2.22674,1.79818,4.03501,4.02499,4.03884l36.78911,.06316c1.51907,.00261,2.7527-1.22673,2.75531-2.74587l.00263-1.53165s1.82782-4.60028-1.90933-10.28065c0,0-4.66452,4.43479-11.61116-2.53575l-2.04565-3.72093-14.87251,10.83785-8.23501,.9993c-1.80165,.21861-3.39821-.04024-4.32743,1.51866h-.00014Z" fill="#2f2e41"/></g><g><polygon points="726.02735 521.60456 716.65452 528.67376 684.92538 495.88695 698.75852 485.45309 726.02735 521.60456" fill="#a0616a"/><path d="M693.75683,545.61506h0c.07894,.71161,1.12159,2.41402,1.55275,2.98556h0c1.32526,1.75677,3.82374,2.10662,5.58057,.78132l29.02444-21.89533c1.19846-.90409,1.43715-2.60858,.53302-3.80709l-.91157-1.20838s-1.30394-4.71495-7.63691-6.96136c0,0-1.02986,6.27668-10.66123,4.92822l-3.83137-1.71153-5.2534,17.41094-5.89241,5.69963c-1.28915,1.24695-2.70151,1.99536-2.50376,3.77794l-.00011,.00009Z" fill="#2f2e41"/></g><path d="M701.20012,284.7398c0,10.95483-8.88064,19.83547-19.83547,19.83547-10.95483,0-19.83547-8.88064-19.83547-19.83547s8.88064-19.83547,19.83547-19.83547,19.83547,8.88064,19.83547,19.83547Z" fill="#a0616a"/><path d="M699.33129,399.1067s-73.0319-4.13388-77.16578,4.13388,22.34833,121.83338,22.34833,121.83338l23.62655-4.95175-11.52587-79.6767s60.94342,16.14005,69.21118-3.1514c8.26776-19.29144,5.88766-26.47475,5.88766-26.47475l-32.38207-11.71266Z" fill="#2f2e41"/><path d="M718.04278,385.22869s-71.52378,15.33281-73.3233,24.3996,53.78128,111.58133,53.78128,111.58133l21.47498-11.02537-32.19248-73.78934s63.04198-.55653,65.91197-21.34785c2.86999-20.79132-1.32556-27.08911-1.32556-27.08911l-34.3269-2.72925Z" fill="#2f2e41"/><path d="M726.20152,307.47234h-34.36221l-23.51213,38.58289s-5.51184,24.93349,0,27.62431c5.51184,2.69082,5.51184,31.62799,5.51184,31.62799l57.87433,5.51184s8.26776-86.8115,5.51184-95.07926c-2.75592-8.26776-11.02368-8.26776-11.02368-8.26776Z" fill="#6c63ff"/><path d="M671.77208,332.96463l-3.44492,40.71481-38.74748-16.44473-9.24771-4.6509c-1.81128-2.36188-4.16183-4.25556-6.85504-5.52279-6.69735-3.264-13.80747-2.4555-15.8841,1.80514-2.07668,4.26063,1.66736,10.35956,8.36279,13.62153,2.6583,1.34088,5.59915,2.02531,8.57642,1.99632l27.05797,15.36813,.03186-.06012,.11996,.21419,42.43185,17.72245,9.76312-53.44911-22.16474-11.31492Z" fill="#a0616a"/><path d="M667.63821,287.49192s-20.6694,2.75592-12.40164-15.15756c0,0-1.2606-9.71082,4.88154-10.36725s14.4099-11.68011,14.4099-11.68011c0,0,18.95509-9.64572,28.76899,0,9.8139,9.64572,38.75106,66.14209,38.75106,66.14209l-19.29144,20.6694s-11.59783-30.48873-25.09036-26.95703c-13.49253,3.5317-25.89417,14.06171-25.89417,14.06171,0,0-13.6928-6.8525-7.53538-12.82513,6.15742-5.97263,3.4015-23.88612,3.4015-23.88612Z" fill="#2f2e41"/><path d="M695.19741,317.80704s-9.64572-12.40164-16.53552-2.75592c-6.8898,9.64572-12.40164,22.04736-12.40164,22.04736l27.55921,9.64572,1.37796-28.93717Z" fill="#6c63ff"/><path d="M799.83575,547.27902l-32.01899-101.77021,.00468-.00034h.07394l-.12937-.16637-.00282-.00361-2.28061-7.24885,.00113-.0009c3.47424-2.99375,5.83968-7.27186,6.31092-12.19685l-14.63616-80.49862c1.00718-10.5706-7.0963-19.81058-17.71303-20.18945l-33.02369-.08313c-9.3878-.33263-17.51903,6.44949-18.88653,15.74497l-.72994,4.93412-10.11779,68.82863c-.36962,2.47625-.22175,4.91573,.36037,7.19798l-7.28111,.95175-2.20837,.29563-8.7318,1.1365-.02769,.00925-1.09031,.13862h-1.18275v29.56795h.07394v94.50658c0,.60976,.49894,1.10875,1.10881,1.10875,.61906,0,1.118-.499,1.118-1.10875v-94.50658h12.95448l12.92673,94.39559c.08318,.55449,.55438,.96099,1.10881,.96099,.04619,0,.10163,0,.14781-.00925,.60987-.08313,1.03487-.64675,.95175-1.25662l-12.88054-94.09072h62.15733c6.17174,0,11.89073-1.95853,16.54743-5.31209l24.64454,99.53455c.12825,.50373,.58088,.83839,1.07785,.83839,.09074,0,.18312-.01083,.27527-.03418,.59555-.15159,.95558-.75752,.80421-1.35306l-24.88288-100.49712c.33093-.27589,.66192-.57005,.97453-.87347l9.89305-.58179,32.1857,102.30011c.14939,.47497,.58821,.77929,1.06127,.77929,.11059,0,.22305-.01681,.3342-.05166,.58635-.18475,.9121-.80974,.72763-1.39604Zm-36.46799-107.61017c.08313-.04625,.15706-.10174,.231-.14798l.00056-.00045,.23777,.75571-.46933-.60728Z" fill="#e6e6e6"/></g><g><g><polygon points="171.56525 374.77477 193.11428 361.07087 201.87509 366.35537 171.56525 401.18319 171.56525 374.77477" fill="#ffb6b6"/><path d="M142.09734,321.73254s-14.31298,3.36776-7.57746,22.73238,28.62597,59.77775,35.36149,57.25193c6.73552-2.52582,7.57746-27.78403,7.57746-27.78403,0,0-.84194,.84194-4.2097-2.52582-3.36776-3.36776-3.36776-1.82973-3.36776-5.54554s-2.75454-6.47034-2.75454-6.47034l-3.13904-6.50681s0-30.30985-12.6291-31.99373c-12.6291-1.68388-9.26134,.84194-9.26134,.84194Z" fill="#e6e6e6"/><ellipse cx="202.71703" cy="359.19888" rx="14.31298" ry="8.84037" transform="translate(-194.61752 248.54951) rotate(-45)" fill="#ffb6b6"/></g><g><polygon points="86.34807 433.29001 101.05215 457.62779 186.74142 452.55742 163.92475 423.14927 86.34807 433.29001" fill="#e6e6e6"/><path d="M111.95221,547.11985c-.49911,0-.93386-.36839-1.00343-.87642l-25.60538-187.00708c-.07601-.55507,.31219-1.06656,.86701-1.14232,.55457-.08021,1.06607,.31195,1.14232,.86701l25.60538,187.00708c.07601,.55507-.31219,1.06656-.86701,1.14232-.04679,.00644-.09309,.00941-.13889,.00941Z" fill="#e6e6e6"/><path d="M86.34807,547.35752c-.56002,0-1.01407-.45406-1.01407-1.01407v-187.20861c0-.56002,.45406-1.01407,1.01407-1.01407,.56002,0,1.01407,.45406,1.01407,1.01407v187.20861c0,.56002-.45406,1.01407-1.01407,1.01407Z" fill="#e6e6e6"/><path d="M214.88174,546.61331c-.43103,0-.83087-.27729-.96703-.71005l-60.59094-192.58449c-.1681-.53427,.12874-1.1037,.66301-1.27205,.53402-.16736,1.1037,.12924,1.27155,.66301l60.59094,192.58449c.1681,.53427-.12874,1.1037-.66301,1.27205-.10126,.03169-.20376,.04704-.30452,.04704Z" fill="#e6e6e6"/><path d="M196.37439,546.85049c-.45282,0-.86528-.30501-.98214-.76402l-42.08408-169.96935c-.1379-.54269,.19014-1.09478,.73283-1.23293,.54442-.13716,1.09478,.19014,1.23293,.73283l42.08408,169.96935c.1379,.54269-.19014,1.09478-.73283,1.23293-.08393,.02129-.1681,.03119-.2508,.03119Z" fill="#e6e6e6"/><polygon points="86.34807 362.11717 156.57271 361.03722 169.50216 434.81112 87.36214 434.81112 86.34807 362.11717" fill="#e6e6e6"/></g><g><polygon points="194.26591 470.59655 176.56797 501.75497 197.11665 506.27891 205.68358 484.11776 194.26591 470.59655" fill="#ffb6b6"/><path d="M182.92462,495.87253s-.68769-5.08127-4.73068-3.46879-15.71126,7.60503-15.71126,7.60503c0,0,30.43363,49.4508,36.20933,47.14726,5.7757-2.30353-1.13827-16.28208-1.13827-16.28208l1.52597-24.70853-16.1551-10.29289Z" fill="#2f2e41"/><path d="M115.9972,410.13626s-6.31455,29.04694,13.05007,39.15022c19.36462,10.10328,85.45693-14.73395,85.45693-14.73395l-30.30985,45.41505,21.0485,8.46912s47.99059-63.14551,44.62283-73.24879c-3.36776-10.10328-26.10015-10.94522-26.10015-10.94522l-51.35835,2.52582-13.47104-4.2097-42.93895,7.57746Z" fill="#2f2e41"/></g><g><polygon points="168.08352 484.4253 140.26086 507.00768 157.75463 518.69879 173.79831 501.17426 168.08352 484.4253" fill="#ffb6b6"/><path d="M148.32224,503.84158s1.20844-4.98316-3.14413-4.9524-17.40151,1.36661-17.40151,1.36661c0,0,10.35295,57.13496,16.57091,57.09102,6.21796-.04394,4.86453-15.58006,4.86453-15.58006l10.41237-22.45936-11.30217-15.46582Z" fill="#2f2e41"/><path d="M117.181,399.62925s-16.45134,24.75786-2.09067,41.21496c14.36067,16.4571,84.95984,17.37244,84.95984,17.37244l-44.7577,31.27238,16.52375,15.54771s67.67815-41.35361,68.21767-51.98973c.53953-10.63612-20.32807-19.69226-20.32807-19.69226l-48.75657-16.33576-11.01569-8.82298-42.75257-8.56676Z" fill="#2f2e41"/></g><path d="M159.4433,342.28438s-15.99686-5.89358-23.57432-5.89358c-.72406,0-1.43974,.08417-2.15536,.23572-4.84958,1.02719-9.31186,5.19481-11.45037,7.46801-.83356,.89245-1.31342,1.49025-1.31342,1.49025,0,0,.05051-.58094,.15154-1.59971,.49672-5.35473,2.33214-22.92601,5.62415-34.17432,1.17869-4.01607,2.53425-7.22386,4.09182-8.78143,3.62876-3.63719,5.30421-7.99843,6.07878-11.24831,.65674-2.78687,.65674-4.74855,.65674-4.74855l-6.13773-2.6437-1.13665-7.42592c-.20206,.8756-1.1366,2.58476-4.27702,5.85992-.26943,.2778-.56414,.51357-.87565,.71563-4.52964,2.84576-13.7657-2.10485-18.7416-5.22004,2.07119-7.19858,5.82626-13.78256,12.64596-14.86021,15.99686-2.52582,15.99686-11.78716,26.10015-1.68388,.83351,.83351,1.67545,1.63337,2.51739,2.40794,3.23307,6.17986,4.41176,14.46453,4.83273,20.22342,.30314,4.03287,.22734,6.83655,.22734,6.83655,0,0,4.2097,25.25821,10.94522,30.30985,6.73552,5.05164-4.2097,22.73238-4.2097,22.73238Z" fill="#2f2e41"/><polygon points="128.29151 301.87125 116.91538 318.55786 142.6045 325.44557 142.6045 301.87125 128.29151 301.87125" fill="#ffb6b6"/><polygon points="128.29151 301.87125 116.91538 318.55786 142.6045 325.44557 142.6045 301.87125 128.29151 301.87125" opacity=".1"/><path d="M144.20219,317.94381l-24.41626-10.10328s-32.83567,14.31298-30.30985,42.09701c2.52582,27.78403,26.10015,75.77462,26.10015,75.77462l47.14865-20.20656-5.05164-53.88417-13.47104-33.67761Z" fill="#e6e6e6"/><circle cx="133.73351" cy="287.78009" r="21.54104" fill="#ffb6b6"/><path d="M162.81106,279.9808c-4.2097,4.2097-7.57746,8.4194-7.57746,8.4194l-1.68388-6.73552s-.38731,.28623-1.06928,.74091c-2.66894,1.81857-9.83386,6.3903-15.58432,7.3754-2.55948,.43777-4.83273,.15992-6.31455-1.38079-3.14042-3.27516-4.07496-4.98432-4.27702-5.85992l-1.13665,7.42592-6.13773,2.6437s0,9.24449,6.73552,15.99686c.32837,.32837,.64831,.73248,.95982,1.20397,3.21622,4.84958,5.52313,16.72092,6.98809,26.81577,1.29657,8.97511,1.9196,16.53572,1.9196,16.53572,0,0-6.37344-7.98158-13.36996-9.06771-.38731-.05894-.77462-.10103-1.16188-.10946-.12631-.0168-.261-.0168-.38731-.0168-7.57746,0-23.57432,5.89358-23.57432,5.89358,0,0-10.94522-17.68074-4.2097-22.73238,6.73552-5.05164,10.94522-30.30985,10.94522-30.30985,0,0-.27785-10.81053,2.50897-20.50127,2.07119-7.19858,5.82626-13.78256,12.64596-14.86021,15.99686-2.52582,15.99686-11.78716,26.10015-1.68388,.83351,.83351,1.67545,1.63337,2.51739,2.40794,9.41288,8.65517,19.02788,13.9341,15.16335,17.79863Z" fill="#2f2e41"/><rect x="60.3339" y="393" width="8" height="158" fill="#3f3d56"/><rect x="254.3339" y="393" width="8" height="158" fill="#3f3d56"/><rect x="158.3339" y="326" width="53" height="53" fill="#6c63ff"/><g><polygon points="127.78436 382.35224 149.33339 368.64833 158.09421 373.93283 127.78436 408.76065 127.78436 382.35224" fill="#ffb6b6"/><path d="M98.31645,329.31001s-14.31298,3.36776-7.57746,22.73238c6.73552,19.36462,28.62597,59.77775,35.36149,57.25193,6.73552-2.52582,7.57746-27.78403,7.57746-27.78403,0,0-.84194,.84194-4.2097-2.52582-3.36776-3.36776-3.36776-1.82973-3.36776-5.54554s-2.75454-6.47034-2.75454-6.47034l-3.13904-6.50681s0-30.30985-12.6291-31.99373c-12.6291-1.68388-9.26134,.84194-9.26134,.84194Z" fill="#e6e6e6"/><ellipse cx="158.93615" cy="366.77634" rx="14.31298" ry="8.84037" transform="translate(-212.79872 219.81113) rotate(-45)" fill="#ffb6b6"/></g><rect x="36.3339" y="387" width="242" height="18" fill="#3f3d56"/></g><rect x="483.3339" y="243" width="46" height="25" rx="5.12992" ry="5.12992" fill="#3f3d56"/><rect x="558.3339" y="257.74015" width="46" height="10.25985" rx="5.12992" ry="5.12992" fill="#6c63ff"/></svg>
          </div>
        </section>
        </main>
        <div className="scrollContainer">
          <i className="fa-solid fa-angles-down" id="scroll7"></i>
        </div>
        <div className="testDivider"></div>
        <main id="test7" className="mainSectionDivider">
        <section className="testSectionCenter">
          <div className="testTitleCenter">
            <h1>This is Leaders At Heart Academy</h1>
          </div>
          <div id="info7" className="testInfoCenter">
            <p>
              We're not just a school, but a launchpad for tomorrow's leaders.
              Here, no child's future is bound by circumstances. Every student
              is given the tools, knowledge, and confidence to lead at the
              highest levels. <br /> <br /> This is more than an education. It's
              a transformation.
            </p>
          </div>
          <div className="scrollContainer">
          <i className="fa-solid fa-flag-checkered" id="scroll8"></i>
          </div>
        </section>
        </main>
        <div className="testDividerFinale"></div>
        <section className="testSectionFinale">
          <Link to="/Apply" id="test8" className="testTitleFinale">
            <h1 className="Question">Are You Ready to Change Everything?</h1>
            <h1 className="Grabber">APPLY NOW</h1>
          </Link>
          <div className="Finalebottom"></div>
        </section>
        </main>

    </>
  );
}

export default TestingHome;


/*<Link to="/Tailored Support for Every Learner" id="Learn4" className="LearnButtons">
<h1 id="LearnText4">Learn More</h1>
</Link>*/