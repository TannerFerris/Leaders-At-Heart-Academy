/* eslint-disable react/no-unescaped-entities */
import "./CalendarCard.css";
import TJevent from '../assets/events1.jpg';


function CalendarCard() {
  return (
    <main className="main">
        <section className="Eventsection">
            <div className="Eventcontainer">
                <img src={TJevent} alt="Event" />
                    </div>
            </section>
    </main>
  );
}

export default CalendarCard;
