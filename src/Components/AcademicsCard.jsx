/* eslint-disable react/no-unescaped-entities */
import "./AcademicsCard.css";
import logolah from "../assets/lionlogo.png";

function AcademicsCard() {
  return (
    <main className="Academicsmain">
        <div className="gridSection">
          <img
            src={logolah}
            alt="Leaders at Heart Academy Logo"
            className="logo"
          />
            <ul className="infoList">
              <li className="list1">
                <h3 className="listTitle">Earn College Credits</h3>
                <p className="itemInfo">
                  Students take dual-credit courses starting in high school, building up to an associate's
                   degree or 60 credits that can transfer to a university.
                </p>
              </li>
              <li className="list1">
                <h3 className="listTitle">Specialized Career Tracks</h3>
                <p className="itemInfo">
                  We offer career-focused pathways with certifications in high-demand industries, 
                  making students job-ready by graduation.
                </p>
              </li>
              <li className="list1">
                <h3 className="listTitle">Real-World Experience</h3>
                <p className="itemInfo">
                  Through mentorships and internships with industry leaders, students work 
                  on real-world projects that prepare them for the workforce. 
                </p>
              </li>
              <li className="list1">
                <h3 className="listTitle">Flexible Future</h3>
                <p className="itemInfo">
                  Whether heading straight into the workforce or transferring to a university, students
                  graduate equipped with the tools and skills to succeed in any path they choose.
                </p>
              </li>
            </ul>
        </div>
    </main>
  );
}

export default AcademicsCard;
