import React from "react";
import {specials} from '../../../data';
import {SpecialButton} from "./SpecialButton";


//import any components needed

//Import your array data to from the provided data file

export const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = React.useState(specials);
  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specialState.map((specialC, index)=>{
         return (
           <SpecialButton special={specialC}/>
         )
       })
       }
    </div>
  );
};
