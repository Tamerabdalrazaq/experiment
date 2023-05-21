import React, { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import InstructionsView from "./InstructionsView";
import { bold_underlineText } from "../../helpers/semantics";

function YourOpponentView() {
   const { getOpName } = useContext(SubjectContext);
   const instructions = {
      title: "Your Opponent",
      instructions: [
         <>
            You will be playing with a computer-controlled fictional character
            named {bold_underlineText(getOpName())}. She is 24, a straight woman
            with brown eyes, who is weighing roughly 64 kg. She has 2 siblings,
            one older and one younger.
         </>,
      ],
   };

   return (
      <InstructionsView
         title={instructions.title}
         instructions={instructions.instructions}
      />
   );
}

export default YourOpponentView;
