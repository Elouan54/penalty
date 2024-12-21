export type Team = {
    type: 'Team_A'|'Team_B'
    score: number
}

type BinaryOperation = (x: number) => number;

export class ScoreFunctor {
    public readonly score_A: number;
    public readonly score_B: number;

    constructor(score_A: number,score_B: number) {
        this.score_A = score_A;
        this.score_B = score_B;
    }

    updateScores(teamA: Team, teamB: Team): ScoreFunctor {
        return new ScoreFunctor(teamA.score, teamB.score);
    }
    
    mapScore(fn: BinaryOperation) : ScoreFunctor {
        return new ScoreFunctor(fn(this.score_A), fn(this.score_B));
    }
}
