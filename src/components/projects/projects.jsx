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

        }

    }, [buttonPressed]);

    return (
        <div className="projects">
            <h1>
                <span className="cursive">P</span> <span className="pixel"> ROJECTS</span>
            </h1>

            <div className="flexy">
                <div className="buttons">
                        <h2>⌕ <u className="pixel" 
                            onClick={() => setButtonPressed("skribblio")}>SKRIBBL.IO</u></h2>
                        <h2>⌕ <u className="pixel" 
                        // onClick={setButtonPressed("feud")}
                        >GOOGLE FEUD</u></h2>
                        <h2>⌕ <u className="pixel" 
                        // onClick={setButtonPressed("grimtern")}
                        >GRIMTERN</u></h2>
                        <h2>⌕ <u className="pixel" 
                        // onClick={setButtonPressed("stats")}
                        >STATS & CHATS</u></h2>
                </div>

                {/* {readMe} */}
                <div dangerouslySetInnerHTML={{__html: readMe}}
                    className="pixel"></div>
            </div>

        </div>
    )
});

export default Projects;