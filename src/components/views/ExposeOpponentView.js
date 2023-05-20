import React, { useContext, useEffect } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import AttentionCheck from "./AttentionCheck";

function ExposeOpponentView({ timing }) {
   const { getOpName, setNameExposed } = useContext(SubjectContext);

   useEffect(() => {
      setNameExposed(true);
   }, []);

   const SECOND_ATTENTION = {
      title: "Set 2\\3 Completed!",
      instructions: [
         `You have completed the first set with ${getOpName()}, in the next part you will continue playing another set of rounds with the same player.`,
      ],
      attention_questions: [
         {
            label: "Are you in an interruption-free environment? ",
            checked: true,
         },
         { label: "Please do not check this box", checked: false },
         {
            label: "Is your phone on silent / off? (Please check this box if so) ",
            checked: true,
         },
      ],
   };

   return (
      <AttentionCheck
         title={SECOND_ATTENTION.title}
         instructions={SECOND_ATTENTION.instructions}
         attention_questions={SECOND_ATTENTION.attention_questions}
      />
   );
}

export default ExposeOpponentView;
