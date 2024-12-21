export type Team = {
    type: "Team_A" | "Team_B";
    score: number;
};

type BinaryOperation = (x: number) => number;

export class ScoreFunctor {
    public readonly score_A: number;
    public readonly score_B: number;
    public readonly history: { team: Team; goal: boolean }[];

    constructor(score_A: number, score_B: number, history: { team: Team; goal: boolean }[] = []) {
        this.score_A = score_A;
        this.score_B = score_B;
        this.history = history;
    }

    updateScores(teamA: Team, teamB: Team, action: { team: Team; goal: boolean }): ScoreFunctor {
        return new ScoreFunctor(
            teamA.score,
            teamB.score,
            [...this.history, action]
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
