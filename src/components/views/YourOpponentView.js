import React, { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import InstructionsView from "./InstructionsView";

function YourOpponentView() {
   const { getOpName } = useContext(SubjectContext);
   const instructions = {
      title: "Your Opponent",
      instructions: [
         `You will be playing with a computer-controlled fictional character named ${getOpName()}, is 24, he’s a straight man with brown eyes, who is weighing roughly 76 kg. He has 2 siblings, one older and one younger. `,
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
