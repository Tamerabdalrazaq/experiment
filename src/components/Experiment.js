import React, { useContext, useRef, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../css/App.scss";
import useExperimentFlow from "../exp_config/useExperimentFlow";
import { UI_DATA } from "../exp_config/experiment_config";
import { SubjectContext } from "../context/SubjectContext";

function Experiment() {
   const [progress, setProgress] = useState(0);
   const childRef = useRef(null);
   const experimentFlow = useExperimentFlow();
   const { lang } = useContext(SubjectContext);

   const next_button = experimentFlow[progress].props.next_button;
   const prev_button = experimentFlow[progress].props.prev_button;

   const button_click = (dir) => {
      if (
         !childRef.current ||
         !childRef.current.allow_next ||
         childRef.current.allow_next()
      ) {
         setProgress((curr) => {
            return Math.min(Math.max(curr + dir, 0), experimentFlow.length - 1);
         });
      }
   };

   const el = React.createElement(
      experimentFlow[progress].type,
      {
         ...experimentFlow[progress].props,
         ref: childRef,
         move: button_click,
      },
      experimentFlow[progress].children
   );

   return (
      <div
         className="exp_container"
         style={{ direction: lang === "AR" ? "rtl" : "ltr" }}
      >
         <div className="top">{el}</div>
         <div className="bottom">
            <div className="buttons">
               <button onClick={() => button_click(-1)}>
                  {UI_DATA.BUTTONS.PREV[lang]}
               </button>
               <button onClick={() => button_click(1)}>
                  {next_button || UI_DATA.BUTTONS.NEXT[lang]}
               </button>
            </div>
            <ProgressBar
               animated
               now={(progress / (experimentFlow.length - 1)) * 100}
               label={""}
            />
         </div>
      </div>
   );
}

export default Experiment;
