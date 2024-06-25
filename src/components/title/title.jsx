import "../../fonts.css";
import "./title.css";
import Typewriter from "typewriter-effect";

const TitlePage = (() => {

    return (
        <div className='title'>
            {/* <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script> */}

            {/* <div className='two-column top-two-column'>

                <div>
                </div> */}

                    <h3 className='pixel'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('hello, world!');
                                typewriter.pauseFor(1000);
                                typewriter.deleteAll();

                                typewriter.typeString('welcome to my virtual universe. ');
                                typewriter.pauseFor(500);
                                typewriter.deleteChars(('virtual universe. ').length);
                                typewriter.pauseFor(500);
                                typewriter.typeString('digital portfolio. ')

                                typewriter.pauseFor(500);
                                typewriter.typeString('my name is: ');
                                
                                typewriter.start();

                            }}>
                        </Typewriter>
                        
                    </h3>

            {/* </div> */}

            <h1>
                <span className='cursive header1-cursive'>E</span><span className='pixel header1-pixel'>MILY YU</span>
            </h1>

            {/* <div className='two-column bottom-two-column'> */}

                <div className='two-row'>

                    <h3 className='pixel'>
                        a.k.a.
                    </h3>
                    <h2>
                        <span className='cursive header2-cursive'>S</span>    <span className='pixel header2-pixel'>HAN-YI</span>
                    </h2>

                </div>

                {/* <div>
                </div> */}

            {/* </div> */}

            <img src="./sparkles/2 stars.png" 
                alt="two pixelated 'x' shaped stars, the larger one being a '+' sign and the smaller one being a 'x'"
                className='two-star'></img>

            <img src="./sparkles/+.png"
                alt="a pixelated '+' shaped star"
                className='plus'></img>

            <img src="./sparkles/loopy.png"
                alt="a pixelated loose spiral with three revolutions"
                className='loopy'></img>

            <img src="./sparkles/poof.png"
                alt="a pixelated gust of wind"
                className='poof'></img>

        </div>
    )
});

export default TitlePage;