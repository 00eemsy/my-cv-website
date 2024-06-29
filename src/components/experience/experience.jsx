import { useState, useEffect } from "react";
import "../../fonts.css";
import "./experience.css";
import ReactSlider from "react-slider";
import Typewriter from "typewriter-effect";

const Experience = (() => {

    const [currIndex, setCurrIndex] = useState(0); // tracks which mark of slider we're at; starts at 0
    const [exp, setExp] = useState(0); // loads text desc. per mark

    const changeIndex = (index) => { // when slider's index changes, updates state variable
        setCurrIndex(index)
    };

    useEffect(() => {
        // defining a filler observer so calling observer.observe() outside of the if statement doesn't break the website 😭
        let observer = IntersectionObserver(entries => { 
            console.log(`entries: ${entries}`);
        });

        if (currIndex === 0) { // at start of slider!

            observer = IntersectionObserver(entries => {
                entries.forEach(entry => {

                    if (entry.isIntersecting) { // when a singular pixel of 𓏲 MY EXPERIENCE is on-screen...
                        observer.unobserve(entry.target); // ... de-init observer ...

                        const expText = ( // ... define a typewriter element ...
                            <div className="pixel">
                                <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString('tip: slide to view!');
                                            typewriter.start()
                                        }}>
                                </Typewriter>
                            </div>
                        );

                        setExp(expText); // ... and update state so it appears on-screen!

                    }
                })
            });
        }
    
        observer.observe(document.getElementById('myExperienceTitle'));

    }, [currIndex]) // runs when currIndex changes (when you slide on slider)

    useEffect(() => { // for the rest of the indices, which actually produce text descriptions
        let expText;

        if (currIndex === 1) {
            expText = ( // define text description for code coach... 
                <div className="pixel box">
                    <div className="column">
                        <h2>2023: CODE COACH</h2>
                        <p>📍 theCodeSchoolSF - san francisco, ca</p>
                    </div>

                    <ul>
                        <li>led camps for <strong>4-15 students, ages 6-13</strong>, using project-based learning, where students completed <strong>3 instructor-assigned projects per day</strong> as well as a capstone project designed by the student.</li>
                        <li><strong>worked both independently and with a team of 2-4 instructors</strong> to build a quality learning environment. collaborated with instructors to individualize student help to match their skill set and learning style, as well as maximize their learning potential.</li>
                        <li><strong>developed new curriculums</strong> for each course and tailored them to students' interests, age ranges, skill level, etc. <strong>added interactive bonus problems</strong> if students were not sufficiently challenged by a project, such as recreating the code from a demonstration, extra tasks for lesson plans, etc.</li>
                        <li>worked side-by-side with students on <strong>capstone projects</strong> to not only <strong>guide them through the brainstorming, coding, and debugging processes</strong>, but to also teach them the skills to independently build their own projects.</li>
                    </ul>
                </div>
            )
        } else if (currIndex === 2) {
            expText = ( // define text description for hackathon... 
                <div className="pixel box">
                    <div className="column">
                        <h2>2024: REED HACKATHON</h2>
                        <p>📍 Reed College, portland, or</p>
                    </div>

                    <ul>
                        <li>self-studied languages such as <strong>html, css, javascript</strong>, etc.</li>
                        <li>organized a personalized curriculum to further my understanding of <strong>front-end, back-end, server/client interactions</strong>, etc.</li>
                        <li>gained exposure to various <strong>javascript frameworks/technologies</strong>, such as <strong>node.js and socket.io</strong>.</li>
                        <li>collaboratively produced a <strong>final cumulative web application, skribbl.io</strong>.</li>
                    </ul>
                </div>
            )
        } else if (currIndex === 3) {
            expText = ( // define text description for sciquel webdev internship... 
                <div className="pixel box">
                    <div className="column">
                        <h2>2024: WEB DEVELOPMENT INTERN</h2>
                        <p>📍 SciQuel (a harvard innovation labs participant) - cambridge, ma</p>
                    </div>

                    <ul>
                        <li><strong>spearheaded the development of a new drag-and-drop feature</strong> that utilizes <strong>react.js</strong> to interact with <strong>abstract syntax trees</strong>.</li>
                    </ul>
                </div>
            )
        }
        
        setExp(expText); // ... and updates state!

    }, [currIndex]) // again only runs when currIndex changes

    return (
        <div className="experience">
            <h1 id="myExperienceTitle">
                <span className='pixel header1-pixel'>𓏲 ๋ </span><span className="cursive">M</span><span className="pixel">Y EXPERIENCE ⋆₊˚</span>
            </h1>

            <ReactSlider
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"

                marks
                markClassName="mark"
                onChange={changeIndex} // updates index so text description can update
                min={0}
                max={3} // creates 4 marks
                defaultValue={0}
                value={currIndex}
                renderMark={(props) => {
                    if (props.key < currIndex) {
                        props.className = "mark mark-completed"; // if already past this mark, then apply additional css
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