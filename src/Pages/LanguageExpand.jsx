import './pages.css';
import PageTemplate from '../Components/PageTemplate';
import gsap from 'gsap';
import { useEffect } from 'react';

function LanguageExpand() {


   
   useEffect(() => {
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
        duration: 50,
        ease: "none",
      }
    );
    
   });


    return(
        <>
                              <div className="svg-container2">
                              <svg fill="none">
<path d="M86 12C593.5 -39 1565.1 68.7 1391.5 907.5C1217.9 1746.3 414.5 1404.33 34.5 1128.5C294.833 636 926 -237.6 1368 208C1810 653.6 697.5 1455 86 1800C424.167 2404.5 1158.7 3397.2 1391.5 2532C1624.3 1666.8 618.167 1518.83 86 1553C242.167 2050.83 479.9 2986.9 181.5 2748.5C-116.9 2510.1 19.8334 1664.17 125.5 1271C557.5 1150.67 1410.8 1072.2 1368 1721C1325.2 2369.8 699.167 2805.33 391.5 2942C192.667 2432.17 -135.1 1262 144.5 660C424.1 58 1044 17.8333 1319 73C793 311.333 -182.1 677.1 125.5 233.5C433.1 -210.1 1068 731 1347 1257C922.511 1200.83 155.227 1034.5 482 818.5C808.773 602.5 898.155 1643.83 902 2191.5C852.333 2489.67 629.9 3046 137.5 2886C-354.9 2726 721.667 1770.67 1321.5 1313C1369 888.833 1206.6 47 177 73C129.833 740.167 300.8 2244.3 1362 2923.5C876.833 2370 -61.7 1128.8 65.5 592C192.7 55.2 535.5 368.333 691 592" stroke="white"/>
</svg>
      </div>
        <div className="LanguageBanner">Two-Way Dual Language Model</div>
        <PageTemplate text='Picture a 3rd-grade student from Mexico joining Leaders at Heart,
         already fluent in Spanish. In our 50/50 model, they’ll receive half of their instruction
          in Spanish, which nurtures their native language, while also building English proficiency.
           A native English-speaking peer in the same grade would be equally immersed in Spanish, 
           with tailored support to build their bilingual skills. Both students benefit from a balanced, 
           rigorous language environment, becoming fluent, confident bilinguals ready for global opportunities.'/>

        <PageTemplate text='Our 50/50 Two-Way Dual Language Model isn’t just a program—it’s a core part of our mission. Every student participates, 
           and every student benefits, regardless of when they enter. Through equal exposure to both languages, combined with intensive 
           support, we ensure that all students graduate as globally-minded, bilingual leaders, equipped to excel in both college and career.'/>
        
        <PageTemplate text='At Leaders at Heart, we are more than just teaching languages—we are preparing students to lead in two languages and succeed 
           in a rapidly evolving world.'/>
        </>
    )
}

export default LanguageExpand;