import AttentionCheck from "../components/views/AttentionCheck";
import InstructionsView from "../components/views/InstructionsView";
import GameView from "../components/views/GameView";
import { UI_DATA, config } from "./experiment_config";
import DictatorGameView from "../components/views/DictatorGameView";
import GeneralQuestionsView from "../components/views/GeneralQuestionsView";
import DebriefView from "../components/views/DebriefView";
import YourOpponentView from "../components/views/YourOpponentView";
import ExposeOpponentView from "../components/views/ExposeOpponentView";

const { GAME_CONFIG, GAME_TYPES } = config;
const {
   FIRST_ATTENTION,
   INSTRUCTIONS_ARRAY,
   POST_LEARNING_INSTRUCTIONS,
   SECOND_ATTENTION,
   DICTATOR_GAME_INSTRUCTIONS,
   DEBRIEF,
   FIRST_SET_FINISHED,
   OPPONENT_DESCRIPTION_INSTRUCTIONS,
} = UI_DATA;

export const experiment_flow = [
   <AttentionCheck
      title={FIRST_ATTENTION.title}
      instructions={FIRST_ATTENTION.instructions}
      attention_questions={FIRST_ATTENTION.attention_questions}
   />,
   ...INSTRUCTIONS_ARRAY.map((inst, i) => (
      <InstructionsView
         title={inst.title}
         instructions={inst.instructions}
         key={i}
      />
   )),
   <GameView
      opponent_name={GAME_CONFIG.opponent_name}
      type={GAME_TYPES.learning}
   />,
   <YourOpponentView />,
   <GameView
      opponent_name={GAME_CONFIG.opponent_name}
      type={GAME_TYPES.training}
   />,
   <InstructionsView
      title={FIRST_SET_FINISHED.title}
      instructions={FIRST_SET_FINISHED.instructions}
   />,
   <GameView
      opponent_name={GAME_CONFIG.opponent_name}
      type={GAME_TYPES.set_1}
   />,
   <ExposeOpponentView />,
   <GameView
      opponent_name={GAME_CONFIG.opponent_name}
      type={GAME_TYPES.set_2}
   />,
   <DictatorGameView
      title={DICTATOR_GAME_INSTRUCTIONS.title}
      instructions={DICTATOR_GAME_INSTRUCTIONS.instructions}
      next_button={"Finish"}
      prev_button={false}
   />,
   <GeneralQuestionsView />,
   <DebriefView title={DEBRIEF.title} instructions={DEBRIEF.instructions} />,
];
