import { useState } from "react";
import { prescriptionData } from "./prescription";

const Flashcard = ({prescription}) => {

  return ( 
    <div className="flashcard-data">
      <h1>
        Brand Name: {prescriptionData[prescription].brand}
      </h1>
      <div className="cardDetails">
        <b>Generic Name:</b> {prescriptionData[prescription].generic}
        <br/>
        <b>Function:</b> {prescriptionData[prescription].function}
      </div>
    </div>
   );
}
 
export default Flashcard;