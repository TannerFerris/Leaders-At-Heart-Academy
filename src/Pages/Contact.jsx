import { Helmet } from "react-helmet";
import ContactUscard from "../Components/ContactUsCard";

function Contact() {
    return(
        <>
            <Helmet>
      <title>Leaders At Heart - Contact Us</title>
    </Helmet>
        <div className="Banner">CONTACT US</div>
        <ContactUscard/>
        </>
    )
}

export default Contact;