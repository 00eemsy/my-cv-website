import { useState, useEffect } from "react";
import "../../fonts.css";
import "./experience.css";
import ReactSlider from "react-slider";
import Typewriter from "typewriter-effect";

const Experience = (() => {

    // function renderSlider() {
    //     const slider = (({currentIndex}) => {
    //         (
    //             <ReactSlider
    //                 className="horizontal-slider"
    //                 thumbClassName="example-thumb"
    //                 trackClassName="example-track"
    
    //                 marks
    //                 markClassName="example-mark"
    //                 // onChange={onChange}
    //                 min={0}
    //                 man={4}
    //                 defaultValue={0}
    //                 value={currentIndex}
    //                 renderMark={(props) => {
    //                     if (props.key < currentIndex) {
    //                         props.className = "example-mark example-mark-completed";
    //                     } else {
    //                         props.className = "example-mark example-mark-active";
    //                     }
    
    //                     return <span {...props}/>;
    //                 }}
    //                 >
    //             </ReactSlider>
    //         )
    //     });

    //     setSlide(slider);
    // }

    const [currIndex, setCurrIndex] = useState(0);

    const changeIndex = (index) => {
        setCurrIndex(index)
    };

    return (
        <div className="experience">
            <h1>
                <span className="cursive">M</span><span className="pixel">Y EXPERIENCE</span>
            </h1>

            {/* {slide} */}
            {/* <Slider 
                onChange={(index) => {
                    setCurrIndex(index)
                }}
                currentIndex={currIndex}
                /> */}

        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"

            // step={10}

            marks
            markClassName="example-mark"
            onChange={changeIndex}
            min={0}
            max={3}
            defaultValue={0}
            value={currIndex}
            renderMark={(props) => {
                if (props.key < currIndex) {
                    props.className = "example-mark example-mark-completed";
                } else {
                    props.className = "example-mark example-mark-active";
                }

                return <span {...props}/>;
            }}
            >
        </ReactSlider>
        
        <div className="pixel">
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('tip: slide to view!');
                        typewriter.start()
                    }}>
            </Typewriter>
        </div>

        </div>
    )
});

export default Experience;