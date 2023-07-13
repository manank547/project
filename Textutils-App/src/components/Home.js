import React from 'react'
import TextArea from './TextArea'

export default function Home() {
  return (
    <div className='container my-3'>
        <h1 className="p-3 mb-2 text-center">Welcome to the Text-Utils site</h1>
       <div className="container">
            <h3 className="text-left">Enter your text to analyze</h3>
      </div>
     <TextArea/> 
    </div>
  )
}
