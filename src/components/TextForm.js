import React,{useState} from 'react';

export default function TextForm(props) {
    const [Text, setText] = useState("Enter text here");
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleUpClick =() =>{
        const newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick = () =>{
      const newText = Text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success")
    }
    const handleClearClick = () =>{
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared","success")
    }
  return <>
  <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={Text} onChange={handleOnChange} id="MyTextArea" rows="8" style={{color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#2c3135':'white'}}></textarea>
    </div>
    <button disabled={Text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleUpClick}>Convert to uppercase</button>
    <button disabled={Text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleLoClick}>Convert to lowercase</button>
    <button disabled={Text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleClearClick}>Clear text</button>
    {/* <button disabled={Text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleCopyClick}>Copy text</button>  */}
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
    <p>Can be read in {0.008*Text.split(" ").length} minutes</p>
    <h2>Preview</h2>
    <p>{Text.length>0?Text:"Nothing to preview"}</p>
  </div>
  </>
}
// Text.split(" ").length