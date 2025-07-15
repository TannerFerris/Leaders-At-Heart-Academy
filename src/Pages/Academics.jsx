import { Helmet } from 'react-helmet';
import AcademicsCard from '../Components/AcademicsCard';

function Academics() {
    return(
        <>
            <Helmet>
      <title>Leaders At Heart - Academics</title>
    </Helmet>
        <div className="Banner">ACADEMICS</div>
        <AcademicsCard />
        </>
    )
}

export default Academics;