
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
    useEffect(() => {
     Aos.init({ duration: 2000});
    },[]);
    return(
        <section className="about" id="about">
            <div data-aos="fade-up" className="box">
                <h2>About</h2>
                <h5> Innovative software engineer with passion for continuous learning and creativity.I have honed my skills in various technologies to deliver responsive, reliable, and user-friendly solutions.  </h5>
              
            </div>

        </section>
    )
}