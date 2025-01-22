import "./ExtraActivitiesCard.css";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function ExtraActivitiesCard() {
  return (
    <main className="structure2">
      <section className="section2">
        <div className="eyeCatcher2">
          <h2 className="title2">Enriching Extracurricular Activities</h2>
          <p className="mainInfo2">
            At Leaders at Heart Academy, we believe that a well-rounded
            education extends beyond the classroom. Our diverse extracurricular
            offerings provide students with opportunities to explore their
            interests, develop new skills, and build meaningful connections with
            their peers.
          </p>
        </div>
        <div className="eyeCatcher3">
        <motion.div
         whileHover={{ scale: 1.2}}
         whileTap={{
            scale: 0.8,
       borderRadius: "100%"
  }}>
          <Link to='/Activities'>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            EXPLORE ACTIVITIES
          </Button></Link>
          </motion.div>
          <Link to='/Contact Us'>
          <motion.div
         whileHover={{ scale: 1.2}}
         whileTap={{
            scale: 0.8,
       borderRadius: "100%"
  }}>
          <Button
            className="btns"
            buttonStyle="btn--third"
            buttonSize="btn--large"
          >
            CONTACT US
          </Button>
          </motion.div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ExtraActivitiesCard;
