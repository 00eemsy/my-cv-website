import { useEffect, useState } from "react";
import "../../fonts.css";
import "./title.css";
import Typewriter from "typewriter-effect";

function TitlePage() {

    // const [twoStar, setTwoStar] = useState(null);
    // const [plus, setPlus] = useState(null);
    // const [loopy, setLoopy] = useState(null);
    // const [poof, setPoof] = useState(null);

    // const screenWidth = window.innerWidth;
    // const screenHeight = window.innerHeight;
    
    // useEffect(() => {
    //     const emilyRect = getRect();

    //     positionTwoStar(emilyRect);
    //     positionPlus(emilyRect);
    //     positionLoopy(emilyRect);
    //     positionPoof(emilyRect);

    // }, []);

    // function getRect() {
    //     const emily = document.getElementById('emily');
    //     const emilyRect = emily.getBoundingClientRect(); 

    //     return emilyRect;
    // }

    // // function getLowerRect() {
    // //     const lower = document.getElementById('bottom-subtext');
    // //     const lowerRect = lower.getBoundingClientRect();

    // //     return lowerRect;
    // // }

    // function positionTwoStar(emilyRect) {

    //     let twoStarStyle = {
    //         top: emilyRect.top - .1 * screenHeight,
    //         left: emilyRect.left + .05 * screenWidth,
    //     }

    //     const twoStarImg = (
    //         <img src="./sparkles/2 stars.png" 
    //             alt="two pixelated 'x' shaped stars, the larger one being a '+' sign and the smaller one being a 'x'"
    //             style={twoStarStyle}
    //             id='Ttwo-star'
    //             ></img>
    //     );

    //     setTwoStar(twoStarImg);
    // }

    // function positionPlus(emilyRect) {

    //     let plusStyle = {
    //         top: emilyRect.bottom + .05 * screenHeight,
    //         left: emilyRect.right - .3 * screenWidth,
    //     }

    //     const plusImg = (
    //         <img src="./sparkles/+.png"
    //             alt="a pixelated '+' shaped star"
    //             style={plusStyle}
    //             id='Tplus'
    //             ></img>
    //     );

    //     setPlus(plusImg);
    // }

    // function positionLoopy(emilyRect) {

    //     let loopyStyle = {
    //         top: emilyRect.top - .025 * screenHeight,
    //         left: emilyRect.right - .15 * screenWidth,
    //     }

    //     const loopyImg = (
    //         <img src="./sparkles/loopy.png"
    //             alt="a pixelated loose spiral with three revolutions"
    //             style={loopyStyle}
    //             id='Tloopy'
    //             ></img>
    //     );

    //     setLoopy(loopyImg);
    // }

    // function positionPoof(emilyRect) {

    //     let poofStyle = {
    //         top: emilyRect.bottom - .05 * screenHeight,
    //         left: emilyRect.left + .1 * screenWidth,
    //     }

    //     const poofImg = (
    //         <img src="./sparkles/poof.png"
    //             alt="a pixelated gust of wind"
    //             style={poofStyle}
    //             id='Tpoof'
    //             ></img> 
    //     )

    //     setPoof(poofImg);
    // }
 
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

            <h1 id='emily'>
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

            {/* {twoStar}
            {plus}
            {loopy}
            {poof} */}

        </div>
    )
}

export default TitlePage;