import { useState } from "react";
import { prescriptionData } from "./prescription";

const Flashcard = ({prescription}) => {

  return ( 
    <div className="flashcard-data">
      <div>
        {prescriptionData[prescription].brand}
      </div>
      <div>
        {prescriptionData[prescription].generic}
      </div>
      <div>
        {prescriptionData[prescription].function}
      </div>
    </div>
   );
}
 
export default Flashcard;