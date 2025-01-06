import type { Team } from "./model";

const goalOrNotGoal = () => Math.random() <= 0.76; // probablility of goal

const finished = (team_A: Team, team_B: Team, round: number): Team | null => { // verify if team is winner
  if (round < 10) {
    if (team_A.score > (team_B.score + (10 - round))) { // if impossible to win team B, team A win
        return team_A;
    }
    if ((team_A.score + (10 - round)) < team_B.score) { // if impossible to win team A, team B win
        return team_B;
    }
  } else {
    if ((team_A.score > team_B.score) && (round % 2 === 0)) { // More rounds, team A win
        return team_A;
    }
    if ((team_A.score < team_B.score) && (round % 2 === 0)) { // More rounds, team B win
        return team_B;
    }
  }

  return null;
};


const oneRoundMore = (list: number[]): number[] => [...list, list.length + 1]; // add one round

const display = (team_A: Team, team_B: Team, round: number, goalOrNotGoal: boolean) => { // à corriger 
    let round_display: number = 0;
    let team_A_goal: string = "0";
    let team_B_goal: string = "0";
    if (round % 2 === 0) {
        round_display = round / 2
        if (goalOrNotGoal === true) {
            team_B_goal = "+1";
        }
    } else  {
        round_display = round / 2  + 0.5
        if (goalOrNotGoal === true) {
            team_A_goal = "+1";
        }
    }

    console.log("Tir ", round_display," : Score : ", team_A.score,"/", team_B.score," (Équipe A: ", team_A_goal," | Équipe B: ", team_B_goal,")");
};

export { goalOrNotGoal, finished, oneRoundMore, display };
