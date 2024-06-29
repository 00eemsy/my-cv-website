import "./projects.css";
import { useEffect, useState } from "react";
import Showdown from "showdown";

const Projects = (() => {

    const [buttonPressed, setButtonPressed] = useState(null);
    const [readMe, setReadMe] = useState(null);

    useEffect(() => {
        setButtonPressed("skribblio");
    }, [])

    useEffect(() => {

        let currReadMe;

        // console.log(`buttonPressed val: ${buttonPressed}`)

        if (buttonPressed === "skribblio") {
            fetch("./readMes/skribblio.md")
                .then(skribblio => skribblio.text())
                .then(md => {
                    const converter = new Showdown.Converter();
                    currReadMe =  converter.makeHtml(md);
                    setReadMe(currReadMe);
                    // console.log(currReadMe);
                })
                .catch(error => {
                    console.error(`error fetching readme: ${error}`);
                })
        } else if (buttonPressed === "feud") {
            fetch("./readMes/feud.md")
                .then(feud => feud.text())
                .then(md => {
                    const converter = new Showdown.Converter();
                    currReadMe =  converter.makeHtml(md);
                    setReadMe(currReadMe);
                    // console.log(currReadMe);
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
                    // console.log(currReadMe);
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
                    // console.log(currReadMe);
                })
                .catch(error => {
                    console.error(`error fetching readme: ${error}`);
                })
        }

    }, [buttonPressed]);

    return (
        <div className="projects">
            <h1>
                <span className="cursive">P</span> <span className="pixel"> ROJECTS</span>
            </h1>

            <div className="flexy">
                <div className="buttons">
                        <h2 onClick={() =>
                            setButtonPressed("skribblio")}>⌕ <u className="pixel">SKRIBBL.IO</u></h2>
                        <h2 onClick={() => 
                            setButtonPressed("feud")}>⌕ <u className="pixel">GOOGLE FEUD</u></h2>
                        <h2 onClick={() =>
                            setButtonPressed("grimtern")}>⌕ <u className="pixel">GRIMTERN</u></h2>
                        <h2 onClick={() => 
                            setButtonPressed("stats")}>⌕ <u className="pixel">STATS & CHATS</u></h2>
                </div>

                {/* {readMe} */}
                <div dangerouslySetInnerHTML={{__html: readMe}}
                    className="pixel scroll-box"></div>
            </div>

        </div>
    )
});

export default Projects;