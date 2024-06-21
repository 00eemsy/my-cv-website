import React from 'react';
import "../../fonts.css";
import "./title.css";

const TitlePage = (() => {
    return (
        <div className='title'>

            <div className='two-column top-two-column'>

                <div>
                </div>

                <div className='two-row'>

                    <h3 className='pixel'>
                        hello, world!
                    </h3>
                    <h3 className='pixel'>
                        welcome to my world. my name is: 
                    </h3>

                </div>

            </div>

            <h1>
                <span className='cursive header1-cursive'>E</span><span className='pixel header1-pixel'>MILY YU</span>
            </h1>

            <div className='two-column bottom-two-column'>

                <div className='two-row'>

                    {/* <div className='spacer'>
                    </div> */}

                    <h3 className='pixel'>
                        a.k.a.
                    </h3>
                    <h2>
                        <span className='cursive header2-cursive'>S</span>    <span className='pixel header2-pixel'>HAN-YI</span>
                    </h2>

                </div>

                <div>
                </div>

            </div>
        </div>
    )
});

export default TitlePage;