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
    const [exp, setExp] = useState(0);

    const changeIndex = (index) => {
        setCurrIndex(index)
    };

    useEffect(() => {
        let expText;
        if (currIndex == 0) {
            expText = (
                <div className="pixel">
                    <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('tip: slide to view!');
                                typewriter.start()
                            }}>
                    </Typewriter>
                </div>
            )

        } else if (currIndex == 1) {
            expText = (
                <div className="pixel box">
                    <div className="column">
                        <h2>2023: CODE COACH</h2>
                        <p>📍 theCodeSchoolSF - san francisco, ca</p>
                    </div>

                    <ul>
                        <li>led camps for 4-15 students, ages 6-13, using project-based learning, where students completed 3 instructor-assigned projects per day as well as a capstone project designed by the student.</li>
                        <li>worked both independently and with a team of 2-4 instructors to build a quality learning environment. collaborated with instructors to individualize student help to match their skill set and learning style, as well as maximize their learning potential.</li>
                        <li>developed new curriculums for each course and tailored them to students' interests, age ranges, skill level, etc. if students were not sufficiently challenged by a project, added interactive bonus problems such as recreating the code from a demonstration, extra tasks for lesson plans, etc.</li>
                        <li>worked side-by-side with students on capstone projects to not only guide them through the brainstorming, coding, and debugging processes, but to also teach them the skills to independently build their own projects.</li>
                    </ul>
                </div>
            )
        } else if (currIndex == 2) {
            expText = (
                <div className="pixel box">
                    <div className="column">
                        <h2>2024: REED HACKATHON</h2>
                        <p>📍 remote</p>
                    </div>

                    <ul>
                        <li>self-studied languages such as html, css, javascript, etc.</li>
                        <li>organized a personalized curriculum to further my understanding of front-end, back-end, server/client interactions.</li>
                        <li>gained exposure to various javascript frameworks/technologies, such as node.js and socket.io.</li>
                        <li>collaboratively produced a final cumulative web platform, skribbl.io</li>
                    </ul>
                </div>
            )
        } else if (currIndex == 3) {
            expText = (
                <div className="pixel box">
                    <div className="column">
                        <h2>2024: WEB DEVELOPMENT INTERN</h2>
                        <p>📍 SciQuel (a harvard innovation labs participant) - cambridge, ma</p>
                    </div>

                    <ul>
                        <li>spearheaded the development of a new editor dashboard drag-and-drop feature that utilizes react.js to interact with abstract syntax trees.</li>
                    </ul>
                </div>
            )
        }

        setExp(expText);

    }, [currIndex])

    return (
        <div className="experience">
            <h1>
                <span className="cursive">M</span><span className="pixel">Y EXPERIENCE</span>
            </h1>

            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"

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

            {exp}

        </div>
    )
});

export default Experience;