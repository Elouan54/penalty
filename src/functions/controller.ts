import type { Team } from "./model";

const goalOrNotGoal = () => Math.random() <= 0.76; // probablility of goal

const finished = (team_A: Team, team_B: Team, round_max: number): Team | null => { // refaire les conditions
  const remaining_A = Math.ceil((round_max - team_A.score - team_B.score) / 2);
  const remaining_B = remaining_A;

  if (team_A.score > team_B.score + remaining_B) {
      return team_A;
  }
  if (team_B.score > team_A.score + remaining_A) {
      return team_B;
  }

  if (round_max > 10 && (round_max - 10) % 2 === 0) {
      if (team_A.score > team_B.score) {
          return team_A;
      }
      if (team_B.score > team_A.score) {
          return team_B;
      }
  }

  return null;
};


const oneRoundMore = (list: number[]): number[] => [...list, list.length + 1]; // add one round

export { goalOrNotGoal, finished, oneRoundMore };
