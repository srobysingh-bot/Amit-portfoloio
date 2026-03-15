import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>BCA</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Completed a Bachelor of Computer Applications, building a
              strong foundation in programming, data structures, databases,
              and web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>Chandigarh University (Online)</h5>
              </div>
              <h3>Pursuing</h3>
            </div>
            <p>
              Currently pursuing an MCA in online mode from Chandigarh
              University, focusing on advanced software development,
              system design, and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
