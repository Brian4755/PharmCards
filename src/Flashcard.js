import { useState } from "react";

const Flashcard = () => {
  const [prescription, setPrescription] = useState(0)

  function handleClick() {
    setPrescription(prescription + 1)
  }

  return ( 
    <div>
      {prescription}
      <button onClick={handleClick}>Click This</button>
    </div>
   );
}
 
export default Flashcard;