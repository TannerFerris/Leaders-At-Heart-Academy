import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Navbar2 from './Components/Navbar2';
import Contact from './Pages/Contact';
import ScrollToTop from './Components/ScrollToTop';
import Academics from './Pages/Academics';
import Calendars from './Pages/Calendars';
import Staff from './Pages/Staff';
import Apply from './Pages/Apply';
import BookATour from './Pages/BookATour';
import Activities from './Pages/Activites';
import InvitationCard from './Components/InvitationCard';
import ActivityDetails from './Pages/ActivityDetails';
import Footer from './Components/Footer';
import PathwayExpand from './Pages/PathwayExpand';
import HowitWorksExpand from './Pages/HowitWorksExpand';
import LanguageExpand from './Pages/LanguageExpand';
import TailoredSupportExpand from './Pages/TailoredSupportExpand';
import SolutionsExpand from './Pages/SolutionsExpand';
import WhyLAHExpand from './Pages/WhyLAHExpand';
import { Helmet } from 'react-helmet';
import ExpressInterest from './Pages/ExpressInterest';
import CareerOpportunities from './Pages/Career Opportunities';
import LAHintheMedia from './Pages/LAHintheMedia';
import AdvisoryBoard from './Pages/AdvisoryBoard';

function App() {

  return (
    <>
        <Helmet>
          <title>Leaders At Heart</title>
        </Helmet>
    <Router>
      <ScrollToTop/>
      <Navbar2/>
      <Routes>    
      <Route path="/" element={<Home />}></Route>
      <Route path="/Contact Us" element={<Contact />}></Route>
      <Route path="/Academics" element={<Academics />}></Route>
      <Route path="/Calendars" element={<Calendars />}></Route>
      <Route path="/Staff" element={<Staff />}></Route>
      <Route path="/Apply" element={<Apply />}></Route>
      <Route path="/BookATour" element={<BookATour />}></Route>
      <Route path="/Activities" element={<Activities />}></Route>
      <Route path="/Activity Details" element={<ActivityDetails />}></Route>
      <Route path="/Pathway+" element={<PathwayExpand />}></Route>
      <Route path="/How it Works" element={<HowitWorksExpand />}></Route>
      <Route path="/Two-Way Dual Language Model" element={<LanguageExpand />}></Route>
      <Route path="/Tailored Support for Every Learner" element={<TailoredSupportExpand />}></Route>
      <Route path="/Innovative Solutions for Seamless Integration" element={<SolutionsExpand />}></Route>
      <Route path="/Why Leaders at Heart?" element={<WhyLAHExpand />}></Route>
      <Route path="/Apply/Express-Interest" element={<ExpressInterest />}></Route>
      <Route path="/Apply/Career-Opportunities" element={<CareerOpportunities />}></Route>
      <Route path="/LAH-in-the-Media" element={<LAHintheMedia />}></Route>
      <Route path="/AboutUs/AdvisoryBoard" element={<AdvisoryBoard />}></Route>
      </Routes>
      <InvitationCard/>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
