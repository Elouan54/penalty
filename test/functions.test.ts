import { expect, test } from "bun:test";
import { goalOrNotGoal, finished } from "../src/functions/controller"
import type { Team } from "../src/functions/model"


test("goalOrNotGoal return true or false", () => {
    expect(goalOrNotGoal()).toBeBoolean;
});

test("finished return Team_A when score A=3 and B=1", () => {
    const team_A: Team = { type: "Team_A", score : 3 }; 
    const team_B: Team = { type: "Team_B", score : 1 }; 
    const round_max: number = 5;
    expect(finished(team_A, team_B, round_max)?.type === 'Team_A');
});

/* test("getTeam return Team", () => {
    const team: Team = { type: "Team_A" }; 
    console.log(team)
    console.log(getTeam(team))
    expect(getTeam(team));
}); */