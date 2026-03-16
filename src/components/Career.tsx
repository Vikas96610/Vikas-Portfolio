import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>Sri Jayachamarajendra College Of Engineering,Mysore</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <h4>
              CGPA : 7.51
            </h4>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>11th & 12th</h4>
                <h5>Vijaya Vittala PU College </h5>
              </div>
              <h3>2022</h3>
            </div>
            <h4>
              Percentage : 89.33%
            </h4>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th</h4>
                <h5>Manasarowar Pushkarini Vidyashrama School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <h4>
              Percentage : 70%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
