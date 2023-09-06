// import github from '../assets/img/icongithub.svg';
import tic from '../assets/img/tictactoe.png';
import css from '../assets/img/css.svg';
import js from '../assets/img/js.webp';
import html from '../assets/img/html.svg';
import php from '../assets/img/php.svg';
import kiki from '../assets/img/kiki.png';
import react from '../assets/img/react.svg';
import owl from '../assets/img/owl.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
       },[]);
    return(
        
        <section className="proSec" id="projects">
            <h2> Projects</h2>

            <div className="projects">

            <div data-aos="flip-left" className="project">
                {/* <div className="gitLogo">
                <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
                </div> */}
                <a href='https://asiaalrajeh.github.io/Tic-Tac-Toe/'><img src={tic} alt="project" id='proImg'/> </a>
                <h5>Tic Tac Toe game</h5>
                <p> A game with the option of 1 player or 2 players, and choice of light or dark mode</p>
                <div className='lang'>
                <img src={html} alt="html" id='lanImg'/>
                <img src={css} alt="css" id='lanImg'/>
                <img src={js} alt="js" id='lanImg'/>
                </div>
            </div>

            <div data-aos="flip-left" className="project">
                {/* <div className="gitLogo">
                <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
                </div> */}
               <a href='https://github.com/Asiaalrajeh/Movies-Website'><img src={owl} alt="night owl website" id='proImg'/></a> 
                <h5>Night Owl</h5>
                <p>Movies library website taht uses API to get movies data</p>
                <div className='lang'>
               <img src={html} alt="html" id='lanImg'/>
                <img src={css} alt="css" id='lanImg'/>
                <img src={js} alt="javascript" id='lanImg'/>
                <img src={react} alt="react" id='lanImg'/>
                </div>
            </div>
            <div data-aos="flip-left" className="project">
                {/* <div className="gitLogo">
                <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
                </div> */}
                 <a href='https://asiaalrajeh.github.io/the-dinosaur-game-CS346/index.html'><img src={kiki} alt="kiki game website" id='proImg'/></a>
                <h5>Kiki's delivery servies game</h5>
                <p> Help kiki to avoid the obstecals by pressing Tab or saying the word "UP"</p>
                <p className='disclaimer'>For best experience open it in your PC</p>
                <div className='lang'>
                <img src={html} alt="html" id='lanImg'/>
                <img src={css} alt="css" id='lanImg'/>
                <img src={js} alt="javascript" id='lanImg'/>
                <img src={php} alt="php" id='lanImg'/>
                </div>
            </div>
            {/* <div className="project">
                 <div className="gitLogo">
                <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
                </div> 
                <img src={tic} alt="project image" id='proImg'/>
                <h5>Tic Tac Toe game</h5>
                <p>Develope a game with a chose of one player vers the computer or two players, it has light and dark mode.</p>
                <div className='lang'>
                <img src={html} alt="project image" id='lanImg'/>
                <img src={css} alt="project image" id='lanImg'/>
                <img src={js} alt="project image" id='lanImg'/>
                </div>
            </div> */}
            </div>
            
        </section>

    )
}