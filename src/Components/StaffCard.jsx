import "./StaffCard.css";
import TJPicture from "../assets/TJpicture.png";
import PressReleasePicture from "../assets/PressReleasepicture.png";
import tjUpdate from "../assets/tj_update.png";
import OrgChartPicture from "../assets/OrgChartpicture-CH63W14l.jpg";

/*
                <ul>
                    <li><p>&#9734; 4-Day School Week</p></li>
                    <div className="salarydiv">
                    <h1>&#9734; $71,000 Salary</h1> <a href='https://www.dallasnews.com/news/education/2024/11/12/how-much-do-teachers-make-in-north-texas/#:~:text=The%20average%20base%20pay%20for,rather%20than%20years%20of%20experience. 'target="_blank" className="salaryLink">What do teachers make in North Texas?</a>
                    </div>
                    <li>&#9734; Maximum Classroom Size of 18</li>
                    <li>&#9734; Teacher Contracts = 167 Days</li>
                </ul>
                */

function StaffCard() {
  return (
    <main className="AboutUsmain">
      <section className="AboutUssection1">
        <div className="FAQcontainer">
          <iframe
            className="FAQvideoplaceholder"
            src="https://www.youtube.com/embed/6X9EldUKpig?si=_u1-1pVCMTBoAvib&rel=0&controls=0"
            title="YouTube video player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className="AnnouncementVideocontainer">
          <iframe
            className="videoplaceholder"
            src="https://www.youtube.com/embed/XMOIdfwfrqA?si=_ob8T-VWZDZOAzPJ&rel=0&controls=0"
            title="YouTube video player"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>{" "}
        </div>
      </section>
      <section className="AboutUssection1">
        <div className="FAQcontainer">
          <iframe
            className="FAQvideoplaceholder"
            src="https://www.youtube.com/embed/0istRnnb3F0?si=PyVf_x8-MKtHxyRC&rel=0&controls=0"
            title="YouTube video player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className="AnnouncementVideocontainer">
          <iframe
            className="videoplaceholder"
            src="https://www.youtube.com/embed/I2ccTT7YTE0?si=AcZ1tns_xCxEOdEA&rel=0&controls=0"
            title="YouTube video player"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>{" "}
        </div>
      </section>
      <section className="AboutUssection1">
        <div className="TJInfocontainer">
          <div className="TJInfo">
            <h1>TJ Knight</h1>
            <h2>Superintendent</h2>
          </div>
          <div className="TJPicture">
            <img src={TJPicture} alt="TJ Knight" />
          </div>
        </div>
        <div className="BioInfocontainer">
          <p>
            Born in Beaumont, Texas, T.J. Knight grew up in a close-knit family
            with four brothers, raised by loving parents who exemplified hard
            work, dedication, and integrity. His father worked in a chemical
            plant, and his mother was an elementary school teacher, both of whom
            instilled in him a strong work ethic, unwavering values, and a
            commitment to excellence that have guided him throughout his life.
            <br />
            <br />
            T.J.’s career in education began humbly as a substitute teacher in
            the Lubbock area during the fall of 1999. From there, he went on to
            teach at South Oak Cliff High School and Dr. Ralph H. Poteet High
            School, where he discovered his passion for empowering students and
            shaping their futures.
            <br />
            <br />
            With 25 years of experience in education, including 18 years in
            Ferris ISD, T.J. has served in a variety of leadership roles that
            have left an indelible mark on the district and the community. His
            roles in Ferris ISD include Junior High Assistant Principal, Junior
            High Principal, Director of Assessment & Operations, Assistant
            Superintendent, Deputy Superintendent, and Interim Superintendent.
            These positions allowed him to build deep and lasting relationships
            with coworkers, students, families, and the broader Ferris
            community.<br></br>
            <br></br>
            T.J.’s nearly two decades of servant leadership have been marked by
            a steadfast passion for leading and serving his community. His
            dedication has been evident in countless initiatives and examples of
            innovative leadership that have positively impacted the lives of
            those he has worked with and served.<br></br>
            <br></br>
            Now, as the Superintendent of Leaders at Heart Academy, T.J. brings
            his vision, experience, and heartfelt commitment to setting a new
            standard in education. As a true “Leader at Heart,” his journey
            comes full circle as he leads this groundbreaking charter school
            with the same passion, integrity, and dedication that have defined
            his career.
          </p>
        </div>
      </section>

      <section className="AboutUssection">
        <div className="PressReleasecontainer">
          <img src={tjUpdate} alt="Superintendent Update" />
        </div>
      </section>

      <section className="AboutUssection1">
        <div className="BulletInfocontainer">
          <section className="StaffRollerSection">
            <div className="StaffInfoPoints">
              <div className="StaffInfoPointsSlide">
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
                <h1>4-Day School Week</h1>
                <h1>$71,000 Salary</h1>
                <h1>Maximum Classroom Size of 18</h1>
                <h1>Teacher Contracts = 167 Days</h1>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="AboutUssection">
        <div className="FAQcontainer2">
          <iframe
            className="FAQ2videoplaceholder"
            src="https://www.youtube.com/embed/0istRnnb3F0?si=PyVf_x8-MKtHxyRC&rel=0&controls=0"
            title="YouTube video player"
            frameBorder="1"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>

      <section className="AboutUssection">
        <div className="PressReleasecontainer">
          <img src={PressReleasePicture} alt="Press Release" />
        </div>
      </section>
      <section className="AboutUssection">
        <div className="PressReleasecontainer">
          <img src={OrgChartPicture} alt="Press Release" />
        </div>
      </section>
    </main>
  );
}

export default StaffCard;
