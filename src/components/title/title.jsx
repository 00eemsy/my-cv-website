import "../../fonts.css";
import "./title.css";
import Typewriter from "typewriter-effect";

const TitlePage = (() => {

    return (
        <div className='title'>

            <img src='./memoji.png'></img>

            <br></br>

            <h1 className='header1-pixel pixel'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('HI INTERNET! ');
                        typewriter.pauseFor(500);
                        typewriter.typeString("I'M<span style='font-family: england; font-size: 1.75em'>E</span>MILY YU");
                        
                        typewriter.start();

                    }}>
                </Typewriter>
            </h1>

            <h2 className="pixel">i'm a <strong>webdev and product human</strong> with a passion for all things tech & people. nice to meet you! 👋</h2>
            
            <div className="three-buttons">
                <h3 className="pixel" onClick={() => document.getElementById("elevatorPitchTitle").scrollIntoView({behavior: 'smooth'})}>ELEVATOR PITCH</h3>
                <h3 className="pixel" onClick={() => document.getElementById("experience").scrollIntoView({behavior: 'smooth'})}>MY EXPERIENCE</h3>
                <h3 className="pixel" onClick={() => document.getElementById("projects").scrollIntoView({behavior: 'smooth'})}>PROJECTS</h3>
            </div>

        </div>
    )
})

export default TitlePage;