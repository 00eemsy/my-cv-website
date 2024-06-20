import React from 'react';
import "../../fonts.css";
import "./title.css";

const TitlePage = (() => {
    return (
        <div className='title'>
            <div className='two-column'>
                <div>
                </div>

                <div className='two-row'>

                    <h3 className='pixel'>
                        hello, world!
                    </h3>
                    <h3 className='pixel'>
                        welcome to my world! my name is: 
                    </h3>
                    
                </div>
                
            </div>
            <h1>
                <span className='cursive'>E</span><span className='pixel'>MILY YU</span>
            </h1>
        </div>
    )
});

export default TitlePage;