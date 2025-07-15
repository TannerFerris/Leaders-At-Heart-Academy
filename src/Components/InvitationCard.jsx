/* eslint-disable react/no-unescaped-entities */
import './InvitationCard.css';
import { motion } from "framer-motion"
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
function InvitationCard() {

    return(
    <main className='invitationMain'>
        <section className='invitationSection'>
            <h2 className='InvitationTitle'>Join Our Community</h2>
            <motion.div
         whileHover={{ scale: 1.2}}
         whileTap={{
            scale: 0.8,
       borderRadius: "100%"
  }}>
            <Link to='/Apply'>
            <Button
            className='btn'
            buttonStyle="btn--third"
            buttonSize="btn--large">Apply</Button></Link>
            </motion.div>
        </section>
        <section className='visitSection'>
            <h2 className='InvitationTitle'>COME VISIT US</h2>
            <p className='invitationInfo'>Ferris, TX</p>
        </section>
        
    </main>
    );
}

export default InvitationCard;