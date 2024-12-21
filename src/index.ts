import { goalOrNotGoal, finished } from "./functions/controller";
import { ScoreFunctor, type Team  } from "./functions/model"

const team_A: Team = { type: "Team_A", score: 0 }; 
const team_B: Team = { type: "Team_B", score: 0  }; 

let total: ScoreFunctor = new ScoreFunctor(team_A.score, team_B.score)

const liste:number[] = [1,2,3,4,5,6,7,8,9,10];

const game = (list: number[], team_A: Team, team_B: Team, index: number=1) => {
    if (finished(team_A, team_B, list.length) !== null)
        return finished(team_A, team_B, list.length)

    const currentTeam = index % 2 === 0 ? team_B : team_A;
    if (goalOrNotGoal()) {
        currentTeam.score += 1;
    }

    total = total.updateScores(team_A, team_B);

    console.log(total)

    if (index < list.length) {
        return game(list, team_A, team_B, index + 1);
    }
}

game(liste, team_A, team_B)