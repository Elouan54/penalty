import type { Team } from "./model"

const goalOrNotGoal = () => Math.random() <= 0.76;

const getTeam = (x: Team): { type: Team } => {
    return {
        type: x,
      };
};

const finished = (team_A: Team, team_B: Team, round_max: number): Team | null => {
    const remaining_A = round_max - team_A.score - team_B.score;
    const remaining_B = remaining_A;
  
    if (team_A.score > team_B.score + remaining_B) {
      return team_A; // Team A win 
    }
    if (team_B.score > team_A.score + remaining_A) {
      return team_B; // Team B win
    }
  
    return null; // Continue
  }

export { goalOrNotGoal, getTeam, finished };