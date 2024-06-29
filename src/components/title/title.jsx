import "../../fonts.css";
import "./title.css";
import Typewriter from "typewriter-effect";

const TitlePage = (() => {

    return (
        <div className='title'>

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


            <h1 id='emily'>
                <span className='pixel header1-pixel'>𓏲 ๋</span><span className='cursive header1-cursive'>E</span><span className='pixel header1-pixel'>MILY YU ⋆₊˚</span>
            </h1>

            <img src="./memoji.png"></img>

            <div className='two-row'>

                <h3 className='pixel'>
                    a.k.a.
                </h3>
                <h2>
                    {/* 善宜, my chinese name/middle name!*/}
                    <span className='cursive header2-cursive'>S</span>    <span className='pixel header2-pixel'>HAN-YI</span>
                </h2>

            </div>

        </div>
    )
})

export default TitlePage;