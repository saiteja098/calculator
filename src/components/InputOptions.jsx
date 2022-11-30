import React from "react";


function InputOptions(props){


    
    const calcInputs = [  "%", "Ans", "C","D", 
                          "1/x", "x²", "√x", "/",
                          1, 2, 3, "×",
                          4, 5, 6, "-", 
                          7, 8, 9, "+",
                          0, "+/-" , ".", "="
                       ];



    return (

       calcInputs.map(
         function (elem, id) { 

            if(typeof elem === "number"){
               return <div className="btn num"><button 
                            style={{backgroundColor: "#CDF0EA", color: "black"}} 
                            onClick={props.handleClick}
                            key={id} 
                            type="button" 
                            name={elem}
                           >{elem}</button>
                           </div>;
            }else{
               return <div className="btn"><button  
                       onClick={props.handleClick} 
                       key={id} 
                       type="button"
                       name={elem}
                       >{elem}</button>
                       </div>;
            }
          

         }
         )
    )
}

export default InputOptions;