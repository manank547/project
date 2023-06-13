import React, { useState } from 'react'

export default function CopyText() {
    const [text,setText]=useState("Enter Text Here")

    const handleChange=(e)=>{
        setText(e.target.value)
    }
    
     const  clear=()=>{
       // let copyText=text.
         setText("")
     }

     const  copy=()=>{
     var text= document.getElementById("exampleFormControlTextarea1")
       text.select();
       navigator.clipboard.writeText(text.value);

          setText("")
      }
    
 return (
    <div className='container my-3'>
        <h1 className="p-3 mb-2 text-center">Welcome to the Copy section</h1>
       <div className="container">
            <h3 className="text-left">Enter your text to Copy</h3> </div>

        <div class="mb-3">
         <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleChange} value={text} rows="7">

         </textarea>
        </div>
        <button onClick={copy} className="btn btn-primary mx-1">Copy</button>
        <button onClick={clear} className="btn btn-primary mx-1">Clear</button>
       
        
        <h2 className='my-2'>Your Results</h2>
        <p><b>Word-Count:- </b>{text.split(' ').length} words and {text.length} characters</p>
    </div>
 )
}
