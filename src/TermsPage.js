import { useState } from "react";
import Flashcard from "./Flashcard";

const TermsPage = () => {
  const [prescription, setPrescription] = useState(0)

  function handleClick() {
    setPrescription(prescription + 1)
  }

  return ( 
    <div className="termsPage">
      <Flashcard prescription={prescription}/>
      <button onClick={handleClick}>Next Term</button>
    </div>
   );
}
 
export default TermsPage;