import React, { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";

function SelectLanguageView({ move }) {
   const { setLang } = useContext(SubjectContext);

   return (
      <div className="select-language">
         <h2>Please select your preferred language</h2>
         <div>
            <button
               onClick={() => {
                  setLang("AR");
                  move(1);
               }}
            >
               العربيّة
            </button>
            <button
               onClick={() => {
                  setLang("EN");
                  move(1);
               }}
            >
               English
            </button>
         </div>
      </div>
   );
}

export default SelectLanguageView;
