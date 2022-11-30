import React, {useState} from 'react';
import Input from './components/Input';
import InputOptions from './components/InputOptions';



function App() {

  const [input, setInput] = useState("");


  let computation = [];

  let result;

  /**pushs array of inputs given by user into "computation array"**/

  function inputArray(){

    

    let start;

    for(let i=0; i<input.length; i++){

      if(isNaN(input[i]) && input[i] !== "."){

         if(computation.length === 0){
          computation.push(parseFloat(input.substring(0, i)));
          computation.push(input[i]);
          start = i+1;
         }else{
            computation.push(parseFloat(input.substring(start, i)));
            computation.push(input[i]);
            start = i+1;
         }
      }
    }
    computation.push(parseFloat(input.substring(start, input.length)));
    console.log(computation);
  }


/**
 * gives result of basic math operations
 */


  function computeOperators(){

    for(let i=0; i<computation.length; i++){

         
         let lNum;
         let rNum;

   if(isNaN(computation[i])){
         
      switch (computation[i]) {
          
        case "×":
          lNum = parseFloat(computation[i-1]);
          rNum = parseFloat(computation[i+1]);
          
          result = lNum*rNum;
          break;
        case "/":
          lNum = parseFloat(computation[i-1]);
          rNum = parseFloat(computation[i+1]);
          
          result = lNum/rNum; 
        break;
        case "+":
          lNum = parseFloat(computation[i-1]);
          rNum = parseFloat(computation[i+1]);

          result = lNum + rNum;
        break;
        case "-":
          lNum = parseFloat(computation[i-1]);
          rNum = parseFloat(computation[i+1]);

          result = lNum - rNum;
        break;
      
        default:
          result = null;
          break;
      }
    }
  }
  setInput(result.toString());

  }





/**
 * add functionality to some features of the App
 */

  function computeInput(value){
    let valToInt = parseFloat(input);
    let ans;
    switch (value) {
      case "%":
         ans = input*0.01;
        break;
      case "C":
         setInput("")
      break;
      case "D":

          let text = valToInt.toString();
          ans = "";
          for(let i=0; i<text.length - 1; i++){ans += text[i];}

      break;
      case "1/x":
        ans = valToInt**(-1);
      break;
      case "x²":
        ans = valToInt*valToInt;
      break;
      case "√x":
        ans = (valToInt)**(1/2);
      break;
      case "+/-":
         ans = -(input);
      break;

      case "=":
        inputArray();
        computeOperators();
      break;
    
      default:
         ans = "";
        break;
    }
    setInput(ans.toString());
  }

 /**
  * Handles the click event of App buttons
  */

  function handleClick(event){
    let value = event.target.name;
    if(!isNaN(value) || value === "." || value === "+" || value === "-" || value === "×" || value === "/"){
      setInput((prevItem)=> prevItem+value);
  
    }else{
      computeInput(value);
  }
 }




  return (
    <div className='calc'>
      <h1>Simple Calculator</h1>
        <Input 
          input={input}
       /><br />
    
        <div className='inputs'>
         <InputOptions handleClick={handleClick}/>
        </div>
    </div>
  );
}


export default App;


