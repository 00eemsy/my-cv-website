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
        let observer = new IntersectionObserver(entries => { 
            console.log(`entries: ${entries}`);
        });

        if (currIndex === 0) { // at start of slider!

            observer = new IntersectionObserver(entries => {
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
                        <h2>2023: CODE COACH 👩🏻‍🏫</h2>
                        <p>📍 theCodeSchoolSF - San Francisco, CA</p>
                    </div>

                    <ul>
                        <li>led camps for <strong>4-15 students, ages 6-13</strong>, using project-based learning, where students completed <strong>3 instructor-assigned projects per day</strong> as well as a capstone project designed by the student.</li>
                        <li><strong>developed new products/curriculums</strong> from <strong>conception to launch</strong> that tailored lessons to <strong>education market standards</strong>.</li>
                        <li>worked both <strong>independently and with a team of 2-4 instructors</strong> when <strong>coordinating product development and fulfilling customer/student needs</strong>.</li>
                        <li>demonstrated <strong>strong foundational coding principles</strong> and <strong>strong communication skills</strong> via live coding lessons and individualized student help.</li>
                    </ul>
                </div>
            )
        } else if (currIndex === 2) {
            expText = ( // define text description for hackathon... 
                <div className="pixel box">
                    <div className="column">
                        <h2>2024: REED HACKATHON 🤖</h2>
                        <p>📍 Reed College - Portland, OR</p>
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
                        <h2>2024: WEB DEVELOPMENT INTERN 💻</h2>
                        <p>📍 SciQuel (A Harvard Innovation Labs Participant) - Cambridge, MA</p>
                    </div>

                    <ul>
                        <li>showcased problem-solving ability as a <strong>frontend developer</strong> in <strong>react, typescript, and javascript</strong> and <strong>produced weekly deliverables</strong>.</li>
                        <li><strong>collaborated cross-functionally</strong> with the UI/UX design team, frontend development team, and backend development team to <strong>coordinate product development</strong>, showcasing strong <strong>organizational and interpersonal communication skills</strong>.</li>
                        <li><strong>analyzed the science education market trends, competitors, and customers</strong> to define a <strong>product vision and strategy</strong> for SciQuel’s web platform.</li>
                    </ul>
                </div>
            )
        } else if (currIndex === 4) {
            expText = (
                <div className="pixel box">
                    <div className="column">
                        <h2>2025: PRODUCTION TECHNOLOGY/SWE INTERN 🐭</h2>
                        <p>📍 Disney/Walt Disney Animation Studios - Burbank, CA</p>
                    </div>
                </div>
            )
        }
        
        setExp(expText); // ... and updates state!

    }, [currIndex]) // again only runs when currIndex changes

    return (
        <div className="experience" id="experience">
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
                max={4} // creates 4 marks
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