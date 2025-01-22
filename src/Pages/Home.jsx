import { Helmet } from 'react-helmet';
import HeroSection from '../Components/HeroSection';
import TestingHome from '../Components/TestingHome';
import './pages.css';

/*
import AcademicsCard from '../Components/AcademicsCard';
import ExtraActivitiesCard from '../Components/ExtraActivitiesCard';
import StaffCard from '../Components/StaffCard';
*/


function Home() {
  


  return (
    <>
    <Helmet>
      <title>Leaders At Heart - Home</title>
    </Helmet>
    <HeroSection />
    <TestingHome />
    </>
  )
}

export default Home;
