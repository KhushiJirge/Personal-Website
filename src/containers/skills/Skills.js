import React, {useContext} from "react";
import "./Skills.scss";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                    style={{
                      display: 'flex',
                      flexDirection: 'column', // Align children vertically
                      alignItems: 'flex-start', // Align items to the left
                      gap: '20px', // Space between the title and images
                      marginBottom: 50
                    }}
                  >
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'left', // Align the title to the left
                      }}
                    >
                      {skills.title}
                    </span>

                    {/* Image Container */}
                    <div style={{
                      display: 'flex', 
                      alignItems: 'flex-start', // Align images to the left
                      gap: '30px', // Space between images
                      flexWrap: 'wrap' // Allows images to wrap to the next line if needed
                    }}>
                      {skills.imageUrl.map((image, index) => (
                        <div key={index} className="image-container" style={{ textAlign: 'center' }}>
                          <img
                            src={image.imageUrl}
                            alt={image.name}
                            className="software-skill-image"
                            style={{ width: '40px', height: '40px' }}
                          />
                          <p style={{ marginTop: '5px', fontSize: '15px' }}>{image.name}</p>
                        </div>
                      ))}
                    </div>
                  </p>

                  
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
