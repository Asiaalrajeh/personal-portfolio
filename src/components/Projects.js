import github from '../assets/img/icongithub.svg';
import tic from '../assets/img/tictactoe.png';
import css from '../assets/img/css.svg';
import js from '../assets/img/js.webp';
import html from '../assets/img/html.svg';
import php from '../assets/img/php.svg';
import kiki from '../assets/img/kiki.png';
import react from '../assets/img/react.svg';
import owl from '../assets/img/owl.png';

export const Projects = () => {
    return(
        
        <section className="proSec" id="projects">
            <h2> Projects</h2>

            <div className="projects">

            <div className="project">
                {/* <div className="gitLogo">
                <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
                </div> */}
                <a href='https://asiaalrajeh.github.io/Tic-Tac-Toe/'><img src={tic} alt="project" id='proImg'/> </a>
                <h5>Tic Tac Toe game</h5>
                <p>Develop a game with the option of one player vs the computer or two players, with light and dark modes.</p>
                <div className='lang'>
                <img src={html} alt="html" id='lanImg'/>
                <img src={css} alt="css" id='lanImg'/>
                <img src={js} alt="js" id='lanImg'/>
                </div>
            </div>

            <div className="project">
                {/* <div className="gitLogo">
                <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
                </div> */}
                <img src={owl} alt="project image" id='proImg'/>
                <h5>Night Owl</h5>
                <p>Movies website</p>
                <div className='lang'>
               <img src={html} alt="project image" id='lanImg'/>
                <img src={css} alt="project image" id='lanImg'/>
                <img src={js} alt="project image" id='lanImg'/>
                <img src={react} alt="project image" id='lanImg'/>
                </div>
            </div>
            <div className="project">
                {/* <div className="gitLogo">
                <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
                </div> */}
                 <a href='https://asiaalrajeh.github.io/the-dinosaur-game-CS346/index.html'><img src={kiki} alt="project image" id='proImg'/></a>
                <h5>Kiki's delivery servies game</h5>
                <p> Web game where the player controls the main character to avoid obstacles to achieve a higher score.</p>
                <div className='lang'>
                <img src={html} alt="project image" id='lanImg'/>
                <img src={css} alt="project image" id='lanImg'/>
                <img src={js} alt="project image" id='lanImg'/>
                <img src={php} alt="project image" id='lanImg'/>
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