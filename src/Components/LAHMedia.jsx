/* eslint-disable react/no-unescaped-entities */
import './LAHMedia.css';
import MediaPic1 from '../assets/FerrisMedia1.jpg';
import MediaPic2 from '../assets/FerrisMedia2.jpg';
import MediaPic3 from '../assets/FerrisMedia3.webp';
import MediaPic4 from '../assets/FerrisMedia4.webp';
import MediaPic5 from '../assets/FerrisMedia5.jpg';
import MediaPic6 from '../assets/FerrisMedia6.jpg';
import MediaPic7 from '../assets/FerrisMedia7.jpg';
import Fox4Logo from '../assets/Fox4.svg';
import KeraNewsLogo from '../assets/KeraNews.webp';
import YahooNewsLogo from '../assets/Yahoo_News_Logo2.png';
import NewsBreakLogo from '../assets/NewsBreakLogo.webp';
import PedagogueLogo from '../assets/pedagoguelogo.png';
import EllisNewsLogo from '../assets/EllisNewsLogo.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function LAHMedia () {

    //<button className="submit" type="submit">Book Tour</button>

    
    return(
        <>
        <main className="mediaMain">
           <section className="mediaImageSection">
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={MediaPic1} alt="Leaders at Heart Media Page Hero Image"/></SwiperSlide>
        <SwiperSlide><img src={MediaPic2} alt="Leaders at Heart Media Page Hero Image"/></SwiperSlide>
        <SwiperSlide><img src={MediaPic3} alt="Leaders at Heart Media Page Hero Image"/></SwiperSlide>
        <SwiperSlide><img src={MediaPic4} alt="Leaders at Heart Media Page Hero Image"/></SwiperSlide>
        <SwiperSlide><img src={MediaPic5} alt="Leaders at Heart Media Page Hero Image"/></SwiperSlide>
        <SwiperSlide><img src={MediaPic6} alt="Leaders at Heart Media Page Hero Image"/></SwiperSlide>
        <SwiperSlide><img src={MediaPic7} alt="Leaders at Heart Media Page Hero Image"/></SwiperSlide>
      </Swiper>
            </section> 
            <section className="mediaRollerSection">
                <div className="Medialogos">
                    <div className="MedialogosSlide">
                        <img className="Fox" src={Fox4Logo} alt="Fox 4 Logo"/>
                        <img className="Kera" src={KeraNewsLogo} alt="Kera NewsLogo"/>
                        <img className="Yahoo" src={YahooNewsLogo} alt="Yahoo News Logo"/>
                        <img className="NewsBreak" src={NewsBreakLogo} alt="News Break Logo"/>
                        <img className="Ellis" src={EllisNewsLogo} alt="Ellis News Logo"/>
                        <img className="Kera" src={PedagogueLogo} alt="Pedagogue Logo"/>
                        <img className="Fox" src={Fox4Logo} alt="Fox 4 Logo"/>
                        <img className="Kera" src={KeraNewsLogo} alt="Kera NewsLogo"/>
                        <img className="Yahoo" src={YahooNewsLogo} alt="Yahoo News Logo"/>
                        <img className="NewsBreak" src={NewsBreakLogo} alt="News Break Logo"/>
                        <img className="Kera" src={PedagogueLogo} alt="Pedagogue Logo"/>
                        <img className="Fox" src={Fox4Logo} alt="Fox 4 Logo"/>
                        <img className="Kera" src={KeraNewsLogo} alt="Kera NewsLogo"/>
                        <img className="Yahoo" src={YahooNewsLogo} alt="Yahoo News Logo"/>
                        <img className="NewsBreak" src={NewsBreakLogo} alt="News Break Logo"/>
                        <img className="Kera" src={PedagogueLogo} alt="Pedagogue Logo"/>
                        <img className="Fox" src={Fox4Logo} alt="Fox 4 Logo"/>
                        <img className="Kera" src={KeraNewsLogo} alt="Kera NewsLogo"/>
                        <img className="Yahoo" src={YahooNewsLogo} alt="Yahoo News Logo"/>
                        <img className="NewsBreak" src={NewsBreakLogo} alt="News Break Logo"/>
                        <img className="Kera" src={PedagogueLogo} alt="Pedagogue Logo"/>
                        <img className="Fox" src={Fox4Logo} alt="Fox 4 Logo"/>
                        <img className="Kera" src={KeraNewsLogo} alt="Kera NewsLogo"/>
                        <img className="Yahoo" src={YahooNewsLogo} alt="Yahoo News Logo"/>
                        <img className="NewsBreak" src={NewsBreakLogo} alt="News Break Logo"/>
                        <img className="Kera" src={PedagogueLogo} alt="Pedagogue Logo"/>
                        <img className="Fox" src={Fox4Logo} alt="Fox 4 Logo"/>
                        <img className="Kera" src={KeraNewsLogo} alt="Kera NewsLogo"/>
                        <img className="Yahoo" src={YahooNewsLogo} alt="Yahoo News Logo"/>
                        <img className="NewsBreak" src={NewsBreakLogo} alt="News Break Logo"/>
                        <img className="Kera" src={PedagogueLogo} alt="Pedagogue Logo"/>
                    </div>
                </div>
            </section>
            <section className="mediaCardsSection">
                <div className="mediaCardsContainer">
                    <a href="https://www.fox4news.com/news/ferris-municipal-charter-school-partnership" target='_blank' className="mediaCardsImageDiv">
                        <img src={MediaPic2} alt="Fox 4 Logo"/>
                    </a>
                    <div className="mediaCardsInfoDiv">
                    <h1>Ferris hopes to partner with charter school for unique educational opportunity</h1>
                    <h2>"If the proposal gets a passing grade from the Texas Education Agency, 
                        it would be only the second city government charter school union in Texas.
                        The new school is being called a municipal charter school with educators on 
                        the classroom curriculum side and the city supporting the effort with its resources. 
                        "One of the things that has revealed itself recently to us is that we have a gap that 
                        needs to be addressed for our young people," said Ferris City Manager Brooks Williams."
                        <br/> <a href="https://www.fox4news.com/news/ferris-municipal-charter-school-partnership" target='_blank'>Read More... (Source: Fox 4 News)</a></h2>
                    </div>
                </div>
                <div className="mediaCardsContainer">
                    <a href="https://www.keranews.org/news/2024-11-14/new-charter-school-ferris-texas" target='_blank' className="mediaCardsImageDiv">
                        <img src={MediaPic3} alt="Fox 4 Logo"/>
                    </a>
                    <div className="mediaCardsInfoDiv">
                    <h1>A new charter school wants to open in Ferris – with the city’s help</h1>
                    <h2>"In an unusual partnership, the City of Ferris plans to help operate a proposed new charter school.
                        Leaders at Heart Academy calls itself a “public municipal charter school.” Ferris — about 20 miles 
                        south of downtown Dallas — intends to provide existing city services for the fledgling school, said 
                        City Manager Brooks Williams, saving the school money so Leaders at Heart Academy can focus on innovative academics.
                        “The school doesn’t have to go out and get a finance department. The school doesn’t have to go out and get an 
                        IT department,” Williams told KERA. “They don’t have to have maintenance and operations. They get the benefit of 
                        shared services and they’re able to drive educational dollars into the classroom.”'
                        <br/> <a href="https://www.keranews.org/news/2024-11-14/new-charter-school-ferris-texas" target='_blank'>Read More... (Source: Kera News)</a></h2>
                    </div>
                </div>
                <div className="mediaCardsContainer">
                    <a href="https://www.foxnews.com/politics/charter-schools-outperform-public-schools-report" target='_blank' className="mediaCardsImageDiv">
                        <img src={MediaPic5} alt="Fox 4 Logo"/>
                    </a>
                    <div className="mediaCardsInfoDiv">
                        <h1>Ferris hopes to partner with charter school for unique educational opportunity</h1>
                        <h2>'"We get to drive dollars into the classroom. They don't have to have a finance department. 
                            That exists in the city. They don't have to have an IT department. That exists in the city. 
                            They do not have to have a police department for their school resource officers. That exists 
                            in the city. So, what we're doing is really maximizing tax dollars that our residents are paying 
                            and providing that shared efficiency so that our school can get down to the business of educating 
                            children," Williams said." 
                            <br/> <a href="https://www.yahoo.com/news/ferris-hopes-partner-charter-school-230129958.html" target='_blank'>Read More... (Source: Yahoo News)</a></h2>
                    </div>
                </div>
                <div className="mediaCardsContainer">
                    <a href="https://www.foxnews.com/politics/charter-schools-outperform-public-schools-report" target='_blank' className="mediaCardsImageDiv">
                        <img src={MediaPic6} alt="Fox 4 Logo"/>
                    </a>
                    <div className="mediaCardsInfoDiv">
                        <h1>New Charter School Partnership in Ferris</h1>
                        <h2>"In an innovative partnership, the City of Ferris plans to help operate a new charter school, Leaders 
                            at Heart Academy. The city will provide existing services to the school, allowing it to focus on academic 
                            innovation. The charter school aims to offer dual language programs, industry certifications, and college 
                            courses for high school students. The partnership is expected to save costs and enhance educational 
                            opportunities for the community." 
                            <br/> <a href="https://pedagogue.app/new-charter-school-partnership-in-ferris/" target='_blank'>Read More... (Source: Pedagogue App)</a></h2>
                    </div>
                </div>
                <div className="mediaCardsContainer">
                    <a href="https://www.foxnews.com/politics/charter-schools-outperform-public-schools-report" target='_blank' className="mediaCardsImageDiv">
                        <img src={MediaPic7} alt="Fox 4 Logo"/>
                    </a>
                    <div className="mediaCardsInfoDiv">
                        <h1>FERRIS OFFERS A BOLD NEW VISION FOR EDUCATION</h1>
                        <h2>"FERRIS – It was a first-of-its-kind when Leaders at Heart Academy recently proposed a pioneering public 
                            municipal charter school in Texas. The school is set to offer a transformative educational experience that 
                            will combine language immersion, career readiness, and college credit pathways from the earliest grade levels. 
                            The charter school’s mark is, “Individually Tailored and Intentionally Unique,” thereby presenting an educational 
                            model that the school hopes will be designed to meet the needs of 21st-century students and to set a new benchmark 
                            for public education in Texas." 
                            <br/> <a href="https://www.elliscountypress.com/news/ferris-offers-bold-new-vision-education" target='_blank'>Read More... (Source: Ellis County Press)</a></h2>
                    </div>
                </div>
                <div className="mediaCardsContainer">
                    <a href="https://www.foxnews.com/politics/charter-schools-outperform-public-schools-report" target='_blank' className="mediaCardsImageDiv">
                        <img src={MediaPic4} alt="Fox 4 Logo"/>
                    </a>
                    <div className="mediaCardsInfoDiv">
                        <h1>Charter schools outperform public schools: report</h1>
                        <h2>"The latest progress report on our nation's schools shows that charter schools are outperforming when compared 
                            with their public school counterparts. The non-partisan, a-political study from the Center for Research on 
                            Education Outcomes at Stanford University has compared standardized state math and reading test results between 
                            the two types of schools since 2009. That first study found that public district schools outperformed charter 
                            schools, four years later they tied but now, academically, charter school students do better." 
                            <br/> <a href="https://www.foxnews.com/politics/charter-schools-outperform-public-schools-report" target='_blank'>Read More... (Source: Fox 4 News)</a></h2>
                    </div>
                </div>
            </section>
            
        </main>
        </>
    )
}

export default LAHMedia;