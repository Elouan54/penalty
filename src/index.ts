import { goalOrNotGoal, finished, oneMoreTime, display } from "./functions/controller"; // import controlleur
import { ScoreFunctor, type Team, type Turn } from "./functions/model"; // import model

const game = ( score:Turn[], team_A: Team, team_B: Team, total: ScoreFunctor, index: number = 1 ): Turn[] | null => {
    //const [currentTeam,otherTeam] = (index:number) => index % 2 !== 0 ? [team_A, team_B] : [team_B,team_A]; // alternates between 2 teams
    
    const currentTeam = index % 2 === 0 ? team_A : team_B;
    const otherTeam = index % 2 !== 0 ? team_A : team_B;

    const goal = goalOrNotGoal();

    const turn = {...currentTeam, score:currentTeam.score+goal}

    const updatedScore = [...score,turn]

    if (currentTeam.team === "Team_A") { //mauvaise solution mais fonctionne
        team_A.score += goal;
    } else {
        team_B.score += goal;
    }

    let updatedTotal
    if (currentTeam.team == "Team_A") {
         updatedTotal = total.updateScores({...currentTeam,score:currentTeam.score+goal}, {...otherTeam,score:otherTeam.score}, turn)
    } else {
         updatedTotal = total.updateScores({...otherTeam,score:otherTeam.score}, {...currentTeam,score:currentTeam.score+goal}, turn)
    }

    const  winner = finished({ ...team_A, score: total.score_A },{ ...team_B, score: total.score_B }, index); // check if game is finished (winner)

    display(team_A, team_B, index, goal)
    if (winner !== null) { // game finished 
        console.log(`Victoire : Équipe ${winner.team} !`);
        return updatedScore;
    }


    if (index >= score.length) { // extension of the game
        return game(updatedScore, team_A, team_B, updatedTotal, index + 1); // game continue with extension
    }
    return game(updatedScore, team_A, team_B, updatedTotal, index + 1); // game continue
};


const team_A: Team = { team: "Team_A", score: 0 }; // team A
const team_B: Team = { team: "Team_B", score: 0 }; // team B


 // 5 shots by team also 10 shots

const total = new ScoreFunctor(team_A.score, team_B.score); // initialize score
const result = game(total.history,team_A, team_B, total); // begin of game
//console.log(result);