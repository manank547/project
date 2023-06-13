    import React, { useState } from 'react'

    export default function TextArea() {
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

         const  copy=()=>{
         var text= document.getElementById("exampleFormControlTextarea1")
           text.select();
           navigator.clipboard.writeText(text.value);
           alert("Successfully Copied")
          }
          const time= text.split('').length * 0.05
          const time2= time/60
     return (
        <div>
           
            <div class="mb-3">
             <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleChange} value={text} rows="7">

             </textarea>
            </div>
            <button onClick={upperCase} className="btn btn-primary mx-1">Upper Case</button>
            <button onClick={lowerCase} className="btn btn-primary mx-1">Lower Case</button>
            <button onClick={clear} className="btn btn-primary mx-1">Clear</button>
            <button onClick={copy} className="btn btn-primary mx-1">Copy</button>
            
            <h2 className='my-2'>Your Results</h2>
            <p><b>Word-Count:- </b>{text.split(' ').length} words and {text.length} characters</p>
            <p><b>Time to read:- </b>{time2} minutes or {time} seconds </p>

        </div>
    )
    }
