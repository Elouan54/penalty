import { expect, test } from "bun:test";
import { goalOrNotGoal, finished, oneRoundMore } from "../src/functions/controller";
import type { Team } from "../src/functions/model";

test("goalOrNotGoal returns true or false", () => {
    expect(goalOrNotGoal()).toBeBoolean;
});

test("finished returns the winning team", () => {
    const team_A: Team = { type: "Team_A", score: 3 };
    const team_B: Team = { type: "Team_B", score: 1 };
    const round_max = 5;
    expect(finished(team_A, team_B, round_max)?.type).toBe("Team_A");
});

test("oneRoundMore returns list with one more element", () => {
    const list: number[] = [1, 2, 3, 4, 5];
    expect(oneRoundMore(list)).toHaveLength(6);
});
