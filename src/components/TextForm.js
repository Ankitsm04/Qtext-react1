import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick=()=>{
    let newtxt=text.toUpperCase();
    setText(newtxt)
    props.showAlert("Text converted to UpperCase","success")
    }
    const handleLoClick=()=>{
      let newtxt=text.toLowerCase();
      setText(newtxt)
      props.showAlert("Text converted to LowerCase","success")
      }
    const handleOnChange=(event)=>{
      setText(event.target.value)
      }
      const handleCopyText = () => {
        const textBox = document.getElementById('mybox');
        textBox.select();
        document.execCommand('copy');
        props.showAlert("The text is Copied","success");
        };
        const handleClearText = () => {
          setText("")
          props.showAlert("Copied to Clipboard!","success")
          }
          const [text, setText] = useState('');
          let word = text.split(/\s+/).filter((word) => word !== "").length;
          return (
            <>
    <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
    <h3>{props.heading}</h3>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'white':'grey',color : props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="mybox" rows="3"></textarea>
    <div className='Btns'>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary' onClick={handleCopyText}>Copy Text</button>
        <button className='btn btn-primary' onClick={handleClearText}>Clear Text</button>
    </div>
    </div>
    </div>
    <div className="container my-1">
        <h1>Your Text Summary</h1>
        <p>{word} words and {text.length} characters</p>
        <p>Your will take {0.008 * text.split(" ").length} minutes to read</p>
    </div>
    </>
  )
  }
  