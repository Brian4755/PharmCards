import { useState } from "react";
import Flashcard from "./Flashcard";
import { prescriptionData } from "./prescription";

const TermsPage = () => {
  const [prescription, setPrescription] = useState(0)

  function handleNext() {
    if (prescription < prescriptionData.length -1) {
      setPrescription(prescription + 1)
    }
  }

  function handlePrevious() {
    if (prescription > 0) {
      setPrescription(prescription - 1)
    }
  }

  return ( 
    <div className="termsPage">
      <Flashcard prescription={prescription}/>
      <button onClick={handlePrevious}>Previous Term</button>
        {prescription + 1} of {prescriptionData.length}
      <button onClick={handleNext}>Next Term</button>
    </div>
   );
}
 
export default TermsPage;