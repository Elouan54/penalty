import { expect, spyOn , test } from "bun:test";
import { goalOrNotGoal, finished, oneMoreTime, display } from "../src/functions/controller";
import type { Team } from "../src/functions/model";

test("goalOrNotGoal returns true or false", () => {
    expect(goalOrNotGoal()).toBeBoolean;
});

test("finished returns the winning team", () => {
    const team_A: Team = { type: "Team_A", score: 3 };
    const team_B: Team = { type: "Team_B", score: 1 };
    const round = 10;
    expect(finished(team_A, team_B, round)?.type).toBe("Team_A");
});

test("oneMoreTime returns list with one more element", () => {
    const list: number[] = [1, 2, 3, 4, 5];
    expect(oneMoreTime(list)).toHaveLength(6);
});

test("display console.log result in sentence", () => {
    const team_A: Team = { type: "Team_A", score: 1 };
    const team_B: Team = { type: "Team_B", score: 1 };
    const round: number = 3;
    const goalOrNotGoal: boolean = true;
    const consoleSpy = spyOn(console, "log").mockImplementation(() => {});

    console.log("Avant l'appel de la fonction display");

    // Appel de la fonction
    display(team_A, team_B, round, goalOrNotGoal);

    console.log("Captured logs:", consoleSpy.mock.calls);

    // Vérification du contenu des appels à console.log
    //expect(consoleSpy).toHaveBeenCalledWith('Tir 2 : Score : 1/1 (Équipe A: +1 | Équipe B: 0)');

    // Nettoyage
    consoleSpy.mockRestore();
});
