import { useState, useEffect } from "react";
import "../../fonts.css";
import "./experience.css";
// import ReactSlider from "react-slider";
import Slider from "./slider"

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

    // const changeIndex = (index) => {
    //     setCurrIndex(index)
    // };

    return (
        <div className="experience">
            <h1>
                <span className="cursive">M</span><span className="pixel">Y EXPERIENCE</span>
            </h1>

            {/* {slide} */}
            <Slider 
                onChange={(index) => {
                    setCurrIndex(index)
                }}
                currentIndex={currIndex}
                />

        </div>
    )
});

export default Experience;