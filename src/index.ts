import { goalOrNotGoal, finished, oneRoundMore, display } from "./functions/controller"; // import controlleur
import { ScoreFunctor, type Team } from "./functions/model"; // import model

const team_A: Team = { type: "Team_A", score: 0 }; // team A
const team_B: Team = { type: "Team_B", score: 0 }; // team B

const liste: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 5 shots by team also 10 shots

const game = ( list: number[], team_A: Team, team_B: Team, total: ScoreFunctor, index: number = 1 ): Team | null => {
    const winner = finished(team_A, team_B, index); // check if game is finished (winner)
    if (winner !== null) // game finished 
        return winner; 

    const currentTeam = index % 2 === 0 ? team_A : team_B; // alternates between 2 teams
    const goal = goalOrNotGoal();

    if (goal) { // if goal, score + 1
        currentTeam.score += 1; 
    }

    const updatedTotal = total.updateScores(team_A, team_B, { team: currentTeam, goal }); 

    if (index >= list.length) { // extension of the game
        return game(oneRoundMore(list), team_A, team_B, updatedTotal, index + 1); // game continue with extension
    }

    display(team_A, team_B, index, goal)

    return game(list, team_A, team_B, updatedTotal, index + 1); // game continue
};


const total = new ScoreFunctor(team_A.score, team_B.score); // initialize score
const result = game(liste, team_A, team_B, total); // begin of game

console.log("Victoire : Équipe ", result?.type,".");
