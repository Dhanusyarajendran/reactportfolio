import React, { useState } from "react";
import "./Tab.css";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <div className="container-fluid p-0 mb-2">
      <div className="tab">

        <div className="row">
          <div className="col-12">
            <div className="tab-button d-flex flex-wrap gap-3 mb-4">

              <button
                className={activeTab === "Skills" ? "active" : ""}
                onClick={() => setActiveTab("Skills")}
              >
                Skills
              </button>

              <button
                className={activeTab === "Experience" ? "active" : ""}
                onClick={() => setActiveTab("Experience")}
              >
                Experience
              </button>

              <button
                className={activeTab === "Education" ? "active" : ""}
                onClick={() => setActiveTab("Education")}
              >
                Education
              </button>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">

            {activeTab === "Skills" && (
              <div className="row">

                <div className="col-12 col-md-6 mb-3">
                  <div className="skill">
                    <h6>HTML / CSS</h6>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: "85%" }}>85%</div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <div className="skill">
                    <h6>BOOTSTRAP</h6>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: "70%" }}>70%</div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <div className="skill">
                    <h6>REACT JS</h6>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: "70%" }}>70%</div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <div className="skill">
                    <h6>JAVASCRIPT</h6>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: "60%" }}>60%</div>
                    </div>
                  </div>
                </div>

                 <div className="col-12 col-md-6 mb-3">
                  <div className="skill">
                    <h6>GIT</h6>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: "60%" }}>60%</div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <div className="skill">
                    <h6>TAILWIND CSS</h6>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: "60%" }}>60%</div>
                    </div>
                  </div>
                </div>

                 <div className="col-12 col-md-6 mb-3">
                  <div className="skill">
                    <h6>WORDPRESS</h6>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: "60%" }}>60%</div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <div className="skill">
                    <h6>SEO</h6>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: "80%" }}>80%</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* ========== EXPERIENCE ========== */}
            {activeTab === "Experience" && (
              <div className="row">
                <div className="col-12">
                  <h5 className="exp-title">
                    Web Developer Intern – Zethic Technologies (1 Year)
                  </h5>
                  <p>
                    Created 5+ websites in WordPress and developed
                    responsive mobile-friendly websites.
                  </p>
                  <p><strong>Tools:</strong> WordPress, Plugins, SEO, HTML, CSS, JS</p>

                  <h5 className="exp-title">
                    WordPress Developer – Maaya Software (4 Months)
                  </h5>
                  <p>Developed 2 WordPress websites with SEO optimization.</p>
                  <p><strong>Tools:</strong> WordPress, SEO, HTML, CSS, JS</p>
                </div>
              </div>
            )}

            {/* ========== EDUCATION ========== */}
            {activeTab === "Education" && (
              <div className="row">
                <div className="col-12">
                  <h5 className="edu-title">
                    MCA – M.Kumarasamy College (2021–2023)
                  </h5>
                  <p>Completed with 8.0 CGPA</p>

                  <h5 className="edu-title">
                    BCA – Trinity College (2018–2021)
                  </h5>
                  <p>Completed with 7.9 CGPA</p>

                  <h5 className="edu-title">
                    Higher Secondary – G.Hr.Sec School
                  </h5>
                  <p>12th – 7.0 CGPA | 10th – 8.5 CGPA</p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Tab;
