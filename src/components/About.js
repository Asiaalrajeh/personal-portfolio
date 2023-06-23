
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
                <h5>I'm senior computer science student at Al-imam muhammed bin saud university, highly motivated who seeks new challenges and opportunities to expand my skills.  </h5>
              
            </div>

        </section>
    )
}