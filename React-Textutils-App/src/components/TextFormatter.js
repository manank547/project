import React, { useState } from 'react'

export default function TextFormatter() {
    const [text,setText]=useState("Enter Text Here")
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    
    const  upperCase=()=>{
        let upText=text.toLocaleUpperCase()
         setText(upText)
    }

    const  lowerCase=()=>{
        let loText=text.toLocaleLowerCase()
         setText(loText)
     }

     const  clear=()=>{
       // let copyText=text.
         setText("")
     }
     
 return (
    <div className='container my-3'>
       
       <h1 className="p-3 mb-2 text-center">Welcome to the Formatter</h1>
       <div className="container">
            <h3 className="text-left">Enter your text </h3> </div>

        <div class="mb-3">
         <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleChange} value={text} rows="7">

         </textarea>
        </div>
        <button onClick={upperCase} className="btn btn-primary mx-1">Upper Case</button>
        <button onClick={lowerCase} className="btn btn-primary mx-1">Lower Case</button>
        <button onClick={clear} className="btn btn-primary mx-1">Clear</button>

        
        <h2 className='my-2'>Your Results</h2>
       <p>{text}</p>
    </div>
)
}
