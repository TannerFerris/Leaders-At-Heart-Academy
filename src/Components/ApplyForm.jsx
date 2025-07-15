import { Link } from 'react-router-dom';
import './ApplyForm.css';
import { motion } from "framer-motion";


function ApplyForm () {
    return(
        <>
        <main className="Applymain">
            <div className="ApplyButtonSection">
                <div className="OptionButtoncontainer">
                <h1 className="OptionTitle">Student Enrollment</h1>
                <motion.div
         whileHover={{ scale: 1.2}}
         whileTap={{
            scale: 0.8,
       borderRadius: "100%"
  }}>
                <Link to='/Apply/Express-Interest' className="OptionButton">Express Interest</Link>
                </motion.div>
                </div>
                <div className="OptionButtoncontainer">
                <h1 className="OptionTitle">Change the World With Us</h1>
                <motion.div
         whileHover={{ scale: 1.2}}
         whileTap={{
            scale: 0.8,
       borderRadius: "100%"
  }}>
                <Link to='/Apply/Career-Opportunities' className="OptionButton">Career Opportunities</Link>
                </motion.div>
                </div>
            </div>
        </main>
        </>
    )
}

export default ApplyForm;

