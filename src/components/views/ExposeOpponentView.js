import React, { forwardRef, useContext, useEffect } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import AttentionCheck from "./AttentionCheck";
import { bold_underlineText } from "../../helpers/semantics";

const ExposeOpponentView = forwardRef(({ timing }, ref) => {
   const { getOpName, setNameExposed } = useContext(SubjectContext);

   useEffect(() => {
      setNameExposed(true);
   }, []);

   const SECOND_ATTENTION = {
      title: "Set 2\\3 Completed!",
      instructions: [
         <p>
            You have completed the first set with{" "}
            {bold_underlineText(getOpName())}, in the next part you will
            continue playing another set of rounds with her.
         </p>,
      ],
      attention_title:
         "Which of the following is a color? (Check all correct answers)",
      attention_questions: [
         {
            label: "Red",
            checked: true,
         },
         { label: "Table Tennis", checked: false },
         {
            label: "Brown",
            checked: true,
         },
      ],
   };

   return (
      <AttentionCheck
         ref={ref}
         title={SECOND_ATTENTION.title}
         instructions={SECOND_ATTENTION.instructions}
         attention_title={SECOND_ATTENTION.attention_title}
         attention_questions={SECOND_ATTENTION.attention_questions}
      />
   );
});

export default ExposeOpponentView;
