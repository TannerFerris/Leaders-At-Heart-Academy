import { Helmet } from "react-helmet";
import StaffCard from "../Components/StaffCard";
import './pages.css';

function Staff() {
    return(
        <>
            <Helmet>
      <title>Leaders At Heart - About us</title>
    </Helmet>
        <div className="Banner">WHO WE ARE</div>
        <StaffCard/>
        </>
    )
}

export default Staff;