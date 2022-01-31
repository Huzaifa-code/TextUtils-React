import React, {useState} from 'react'   


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper Case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!" , "success");
    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!" , "success");

    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const [text , setText] = useState('Enter Text here');
    // text = "new text" ; //wrong way to change the state
    // setText("new text"); //correct way to change the state

    return (
        <> 
        <div className="container" style={{ color: props.mode === 'dark' ?'#fff':'#000' }}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ?'#2d3436':'light', color: props.mode === 'dark' ?'#fff':'#000' }} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container" style={{ color: props.mode === 'dark' ?'#fff':'#000' }}>
            <h1>Your Text summary</h1>
            <p> {text.split(" ").length} words, {text.length} characters</p>
            <p> { 0.008 * text.split(" ").length } minutes read </p>
            <h2>Preview</h2>
            <p>{text.length >0 ? text:"Enter something to perview it here"}</p>
        </div>
        </> 
    )
}
    