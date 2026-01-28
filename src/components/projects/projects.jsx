import "./projects.css";
import { useEffect, useState } from "react";
import Showdown from "showdown";

const Projects = (() => {

    const [buttonPressed, setButtonPressed] = useState(null); // to track what project we're looking at
    const [readMe, setReadMe] = useState(null); // to track what readme to load
    const [link, setLink] = useState(null); // to track what hyperlink to load

    useEffect(() => { // onLoad set readme to skribblio's
        setButtonPressed("thes");
        setLink("https://github.com/00eemsy/thes");
    }, [])

    useEffect(() => {

        let currReadMe;

        if (buttonPressed == "cvweb") {
            fetch("./readMes/cvweb.md")
                .then(cvweb => cvweb.text())
                .then(md => {
                    const converter = new Showdown.Converter();
                    currReadMe = converter.makeHtml(md);
                    setReadMe(currReadMe);

                    setLink("https://github.com/00eemsy/my-cv-website");
                })
                .catch(error => {
                    console.error(`error fetching readme: ${error}`);
                })
        } else if (buttonPressed === "skribblio") {
            fetch("./readMes/skribblio.md") // fetches skribblio project's readme from public folder...
                .then(skribblio => skribblio.text()) // ... md file ➡️ md text/raw md ... 
                .then(md => {
                    const converter = new Showdown.Converter(); // ... uses Showdown to convert raw md ➡️ raw html ... 
                    currReadMe = converter.makeHtml(md);
                    setReadMe(currReadMe); // ... and then updates the state variable with the raw html!
                    
                    setLink("https://github.com/ycheuk/skribblio");
                })
                .catch(error => { // just in case
                    console.error(`error fetching readme: ${error}`);
                })
        } else if (buttonPressed === "feud") {
            fetch("./readMes/feud.md")
                .then(feud => feud.text())
                .then(md => {
                    const converter = new Showdown.Converter();
                    currReadMe =  converter.makeHtml(md);
                    setReadMe(currReadMe);
                    
                    setLink("https://github.com/00eemsy/google-feud");
                })
                .catch(error => {
                    console.error(`error fetching readme: ${error}`);
                })
        } else if (buttonPressed === "grimtern") {
            fetch("./readMes/grimtern.md")
                .then(grimtern => grimtern.text())
                .then(md => {
                    const converter = new Showdown.Converter();
                    currReadMe =  converter.makeHtml(md);
                    setReadMe(currReadMe);
                    
                    setLink("https://github.com/00eemsy/csci-121-projects/tree/main/adventure");
                })
                .catch(error => {
                    console.error(`error fetching readme: ${error}`);
                })
        } else if (buttonPressed === "stats") {
            fetch("./readMes/stats.md")
                .then(stats => stats.text())
                .then(md => {
                    const converter = new Showdown.Converter();
                    currReadMe =  converter.makeHtml(md);
                    setReadMe(currReadMe);
                    
                    setLink("https://github.com/00eemsy/csci-121-projects/tree/main/stats%20and%20chats");
                })
                .catch(error => {
                    console.error(`error fetching readme: ${error}`);
                })
        } else if (buttonPressed === "thes") {
            fetch("./readMes/thes.md")
                .then(thes => thes.text())
                .then(md => {
                    const converter = new Showdown.Converter();
                    currReadMe =  converter.makeHtml(md);
                    setReadMe(currReadMe);
                    
                    setLink("https://github.com/00eemsy/thes");
                })
                .catch(error => {
                    console.error(`error fetching readme: ${error}`);
                })
        }

    }, [buttonPressed]); // only runs when the button is clicked

    return (
        <div className="projects" id="projects">
            <h1>
                <span className="pixel">*ੈ₊˚</span><span className="cursive">P</span> <span className="pixel"> ROJECTS</span>
            </h1>

            <div className="flexy"> 
                <div className="buttons">
                        {/* when clicked, updates state variable to the appropriate value */}
                        <h2 onClick={() =>
                            setButtonPressed("thes")}>⌕ <u className="pixel">HCI/UX RESEARCH</u></h2>
                        <h2 onClick={() =>
                            setButtonPressed("cvweb")}>⌕ <u className="pixel">MY CV WEBSITE</u></h2>
                        <h2 onClick={() =>
                            setButtonPressed("skribblio")}>⌕ <u className="pixel">SKRIBBL.IO</u></h2>
                        <h2 onClick={() => 
                            setButtonPressed("feud")}>⌕ <u className="pixel">GOOGLE FEUD</u></h2>
                        <h2 onClick={() =>
                            setButtonPressed("grimtern")}>⌕ <u className="pixel">GRIMTERN</u></h2>
                        <h2 onClick={() => 
                            setButtonPressed("stats")}>⌕ <u className="pixel">STATS & CHATS</u></h2>
                </div>

                <div className="column">
                    <a href={link}
                        className="pixel">🔗 link to this project's github repository!</a>
                    <br></br>

                    {/* parses the raw html and applies css stylization */}
                    <div dangerouslySetInnerHTML={{__html: readMe}}
                        className="pixel scroll-box"></div>
                </div>

            </div>

        </div>
    )
});

export default Projects;