
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
                <h5> Computer Science fresh graduate with a passion for front-end development, the desire to create visually appealing,user-friendly,and efficient web experiences, and the ambition to continuously learn and embrace new challenges.  </h5>
              
            </div>

        </section>
    )
}