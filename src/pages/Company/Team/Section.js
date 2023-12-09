import React from "react";
import heroimage from "../../../assets/images/hero.png"

const Section = () => {
  const sectionStyle = {
    backgroundImage: `url(${heroimage})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
    height: '300px', // Set a specific height for the section
    position: 'relative', // Ensure positioning for the text

  };
  
  const TextOverlay = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };
  return (
    <React.Fragment>
     <section className="w-100 p-3 bg-primary z-1" style={sectionStyle} >
      
              <div className="text-center text-white z-3" style={TextOverlay}>
                <h1 className="mb-4">Team Code Canva </h1>
              </div>
              </section>
      
    </React.Fragment>
  );
};

export default Section;
