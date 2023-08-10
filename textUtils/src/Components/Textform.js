import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState('')
    const handleonchangeevent = (event)=>{
        setText(event.target.value)
    }
    const handleupclick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been changed to uppercase!","success");
    }
    const handlelowclick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been changed to lowercase!","success");
    }
    const handleclearclick=()=>{
        setText("")
        props.showAlert("Text has been cleared!","success");
    }
    const handlecopyclick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!","success");
    }
    const handleextraspaceclick=()=>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Extra spaces from text has been removed!","success");
    }

  return (
    <>
    
    <div className='container'>
        <h1 style={{color: props.mode === 'dark'? 'white' : 'black'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} style={{backgroundColor: props.mode === 'dark'? '#313131' : 'white', color: props.mode === 'dark'? 'white' : 'black' }} onChange={handleonchangeevent} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleupclick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlelowclick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleextraspaceclick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlecopyclick}>Copy Text to Clipboard</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclearclick}>Clear Text</button>
    </div>
    <div className="container my-4">
        <h2 style={{color: props.mode === 'dark'? 'white' : 'black'}} className='fs-5'>Words: <strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</strong></h2>
        <h2 style={{color: props.mode === 'dark'? 'white' : 'black'}} className="fs-5">Characters: <strong>{text.length}</strong> </h2>
        <h2 style={{color: props.mode === 'dark'? 'white' : 'black'}} className='fs-5'>Estimated reading time: <strong>{0.008 *(text.split(" ").filter((element)=>{return element.length!==0}).length)}</strong></h2>
        <h2 className=' mt-4' style={{color: props.mode === 'dark'? 'white' : 'black'}}>Text Preview</h2>
        <p className='fs-6' style={{color: props.mode === 'dark'? 'white' : 'black'}}>{text.length>0 ? text : "Enter text in textbox to preview here."}</p>
    </div>
    </>
  )
}