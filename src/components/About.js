import React, { useState } from 'react';

export default function About(props) {

    return <div className='container my-3 py-3' style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
        <h1 >About us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                        <strong>Analyze Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                        <strong>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or time taken to read the text.</strong> 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                        <strong>Free To Use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                        <strong>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                        <strong>Browser Friendly</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                        <strong>This word counter works in any web browsers such as chrome, firefox, internet explorer, safari, opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.</strong>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>;
}
