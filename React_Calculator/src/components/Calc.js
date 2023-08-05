import React, { useState } from 'react';
import { create, all } from 'mathjs';


function Calc() {
  const math = create(all);
  const [value, setValue] = useState("");
  const MAX_CHARACTERS = 25; 
  
  const handleClick = (e) => {
    if (value.length < MAX_CHARACTERS){
      const newValue = value.concat(e.target.value)
      setValue(newValue);
    }
   }
  
   const handleEqual = () => {
   try {
      const newValue = math.evaluate(value).toString();
      setValue(newValue === "Infinity" ? "0" : newValue)
    } catch (error) { setValue("E") }
  }
  
  const clearScreen = () => {
    const newValue = "";
    setValue(newValue);
  }
  const handleClear = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
  };

  return (


    <div className="calculator">
      <div className="output" >
        {value}
      </div>

      <div className='onpress'>
        <button onClick={handleClick} value="1" >1</button>
        <button onClick={handleClick} value="2" >2</button>
        <button onClick={handleClick} value="3" >3</button>
        <button onClick={clearScreen} >C</button>
      </div>

      <div className='onpress'>
        <button onClick={handleClick} value="4" >4</button>
        <button onClick={handleClick} value="5" >5</button>
        <button onClick={handleClick} value="6" >6</button>
        <button onClick={handleClick} value="-" >-</button>
      </div>

      <div className='onpress'>
        <button onClick={handleClick} value="7" >7</button>
        <button onClick={handleClick} value="8" >8</button>
        <button onClick={handleClick} value="9" >9</button>
        <button onClick={handleClick} value="+" >+</button>
      </div>

      <div className='onpress'>
        <button onClick={handleClick} value="0" >0</button>
        <button onClick={handleClick} value="/" >÷</button>
        <button onClick={handleClick} value="*" >*</button>
        <button onClick={handleClear} value="x"  >x</button>
      </div>

      <button onClick={handleEqual} value="=" className='delete'>=</button>

    </div>
  );
}

export default Calc;
