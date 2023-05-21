import RewardsTable from "../components/UI/RewardsTable";
import { bold_underlineText } from "../helpers/semantics";

const GAME_TYPES = {
   learning: "LEARNING",
   training: "TRAINING",
   set_1: "SET_1",
   set_2: "SET_2",
};

export const config = {
   subject_types: {
      EARLY_IN: "E_I",
      EARLY_OUT: "E_O",
      LATE_IN: "L_I",
      LATE_OUT: "L_O",
   },
   GAME_CONFIG: {
      opponent_name: { OUT: "Dana Mizrahi", IN: "Dana Ahmadi" },
      rounds: {
         [GAME_TYPES.learning]: 3,
         [GAME_TYPES.training]: 3,
         [GAME_TYPES.set_1]: 3,
         [GAME_TYPES.set_2]: 3,
      },
      round_timer: 3000,
      computer_delay: [500, 3000],
      inputs: {
         COOPORATE_KEY: "K",
         SOLO_KEY: "D",
      },
   },
   GAME_TYPES,
   ALGORITHM: {
      BETRAYAL: 7,
      FOREGIVENESS: 33,
   },
   REDAWRDS: {
      C_C: [30, 30],
      S_C: [20, 0],
      S_S: [10, 10],
   },
   DICTATORS_GAME_MONEY: 100,
};

export const tutorial_steps = [
   {
      selector: ".game-view",
      content: "Welcome! We are going to make a brief tour in the game",
   },
   {
      selector: ".player-card.opponent",
      content: "This is your opponent.",
   },
   {
      selector: "div.choise-status",
      content:
         "This circle indicate the status of the player. \n A blue circle indicates that the player has already played",
   },
   {
      selector: "div.wallet",
      content: "Here is the score of the player",
   },
   {
      selector: "div.choise-buttons > button:nth-child(1)",
      content: "Use these buttons to choose your play each round",
   },
   {
      selector: "div.choise-buttons > button:nth-child(3)",
      content:
         "You can either click on the button, or press on the corresponding key on your keyboard",
   },
   {
      selector: ".player-card.you",
      content: "This is you. \n all data are symmetrical to above.",
   },
   {
      selector: ".player-card.you .choise-status",
      content: "A gray animating circle means the player has not played yet.",
   },
   {
      selector: ".game-view",
      content:
         "You will play 3 round so that you understand the flow of the game. Press X when ready!",
   },
];

export const UI_DATA = {
   FIRST_ATTENTION: {
      title: "Welcome!",
      instructions: [
         "Before we begin the experiment, we need to make sure that please sit in an interruption-free environment, and also put your phone on silent. Thank you!",
      ],
      attention_questions: [
         {
            label: "Are you in an interruption-free environment? ",
            checked: true,
         },
         {
            label: "Is your phone on silent / off? (Please check this box if so) ",
            checked: true,
         },
         { label: "Please do not check this box", checked: false },
      ],
   },

   FIRST_SET_FINISHED: {
      title: "Set 1\\3 Completed!",
      instructions: [
         "You have completed the first round. Your final score will be calculated base on the next two rounds.",
      ],
   },
   SECOND_ATTENTION: {
      title: "Set 2\\3 Completed!",
      instructions: [
         "You have completed the first set with Amir Mizrahi, in the next part you will continue playing another set of rounds with the same player.",
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
   },
   INSTRUCTIONS_ARRAY: [
      {
         title: "What we will do",
         instructions: [
            "In this study, you will play an interactive game that will test your strategic decision-making skills while playing with the computer. This game will be played for several rounds.",
            "Your objective is to accumulate as many points as possible.",
         ],
      },
      {
         title: "Games Rules",
         instructions: [
            "Each turn you will need to choose between collaboration (press “D”) or not to collaborate (press “K”). Not collaborating would be called a “Solo”  move. Score would be assigned to you and Amir as a result of your choices based on the following rules:",
            <RewardsTable />,
         ],
      },
      // {
      //    title: "Order of the game",
      //    instructions: [
      //       "Before each round, decide whether to choose Collaborate or Solo Move. Keep in mind that Amir will also make a choice.",
      //       "After you choose, you will see Amir’s choice, and you will receive award points according to the rules above.",
      //       "The game will repeat for a predetermined amount of rounds. ",
      //       "Your final score would consist of the final amount of points you have at the end of the game.",
      //    ],
      // },
      // {
      //    title: "Order of the game",
      //    instructions: [
      //       "We will first start with a training session to make you familiar with the game. Everything will be exactly the same as in the game including the behavior of Amir. Amir would not remember how you played and he would not take that into consideration in the next stages of the game. This stage is strictly to get you familiarized with the game and Amir.  ",
      //       "A continue button will be displayed at the bottom of the page. ",
      //    ],
      // },
   ],
   OPPONENT_DESCRIPTION_INSTRUCTIONS: {
      title: "Your Opponent",
      instructions: [
         "You will be playing with a computer-controlled fictional character named Amir Mizrahi, is 24, he’s a straight man with brown eyes, who is weighing roughly 76 kg. He has 2 siblings, one older and one younger. ",
      ],
   },
   POST_LEARNING_INSTRUCTIONS: {
      title: "Learning Phase Completed!",
      instructions: [
         "Thank you for playing the first set. The score previously would not count towards your final score.",
         "You will now continue to play against the same player. From now on your behavior would count towards your final score",
      ],
   },
   POST_LEARNING_INSTRUCTIONS: {
      title: "Let the game begin!",
      instructions: [""],
   },
   DICTATOR_GAME_INSTRUCTIONS: {
      title: "Dictator Game",
      instructions: [
         <>
            Before calculating the final score, You are given an{" "}
            {bold_underlineText("extra 100")} points.
         </>,
         "You can choose if and how much to split it with Amir. ",
         <>
            Please choose how much to {bold_underlineText("give")} Amir, the
            remainder would be added to your final amount.
         </>,
      ],
   },
   GENERAL_QUESTIONS: {
      title: "General Questions",
      instructions: [],
      q_1: "Do you think your behavior / Average contribution changed before and after the 20 second break?",
      q_2: "If your behavior changed, Why do you think it changed?",
      q_3: "What do you think was the purpose of this study? ",
   },
   DEBRIEF: {
      title: "Debrief",
      instructions: [
         "Thanks for participating in our study. ",
         <>
            We would like to remind you that you played against a{" "}
            {bold_underlineText("computer")}.
         </>,
         "The study was conducted in order to test if and how people play cooperative games based on timing and types of information presented to them.",
      ],
   },
};
