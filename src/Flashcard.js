import { useState } from "react";
import { prescriptionData } from "./prescription";

const Flashcard = () => {
  const [prescription, setPrescription] = useState(0)

  function handleClick() {
    setPrescription(prescription + 1)
  }

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
      <button onClick={handleClick}>Click This</button>
    </div>
   );
}
 
export default Flashcard;