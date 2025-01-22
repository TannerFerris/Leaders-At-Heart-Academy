import { Helmet } from 'react-helmet';
import CalendarCard from '../Components/CalendarCard';

function Calendars() {
    return(
        <>
            <Helmet>
      <title>Leaders At Heart - Calendar</title>
    </Helmet>
        <CalendarCard />
        </>
    )
}


export default Calendars;