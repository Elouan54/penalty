export type Turn =  { team: "Team_A" | "Team_B", score: number }


export type Team = {
    team: "Team_A" | "Team_B";
    score: number;
};

type BinaryOperation = (x: number) => number;

export class ScoreFunctor {
    public readonly score_A: number;
    public readonly score_B: number;
    public readonly history: Turn[];

    constructor(score_A: number, score_B: number, history: Turn[] = []) {
        this.score_A = score_A;
        this.score_B = score_B;
        this.history = history;
    }

    updateScores(team1: Team, team2: Team, turn: Turn): ScoreFunctor {
        return new ScoreFunctor(
            team1.team === "Team_A" ? team1.score : this.score_A,
            team2.team === "Team_B" ? team2.score : this.score_B,
            [...this.history, turn]
        );
    }

    mapScore(fn: BinaryOperation): ScoreFunctor {
        return new ScoreFunctor(
            fn(this.score_A),
            fn(this.score_B),
            this.history
        );
    }
}
