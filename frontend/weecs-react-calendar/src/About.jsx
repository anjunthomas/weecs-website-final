import React, { useState, useEffect } from 'react';
import './styles/About.css';
import './styles/LightningBolt.css';



function About(){
    const [isBlinking, setIsBlinking] = useState(false);
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 200); // Blink for 200ms
        }, 4000); // Blink every 4 seconds

        return () => clearInterval(blinkInterval);
    }, []);

    return(
        <section id="about-route" className="about-card"> {/* id is necessary to make the page scroll to "about" from the navbar*/}
            <div className="about-section">
                <h1 className="about-header">Hello and Welcome</h1>
                {/* <h3 className="about-header-3">Hello and Welcome</h3> */}
                <p className="about-body">
                    Women in Electrical Engineering and Computer Science (WEECS) aims to empower women with resources and support as they strive in their academic careers at UCF. <br></br>
                    Our members have access to hands-on hardware and software projects, workshops, professional development events, and fun social events! <br></br>
                    If any of these interests you, WEECS is the place for you! 
                    <br></br>Check out upcoming events in the calendar above and join us for our next meeting. We can't wait to see you!
                </p>
                <img 
                    src={isBlinking ? "/static/react/assets/ChameleonBlink.png" : "/static/react/assets/Chameleon.png"} 
                    alt="Weecs Chameleon" 
                    className="chameleon" 
                /> 
            </div>     
        </section>
        
       
    );
}

export default About;