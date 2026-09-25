import { describe, expect, it } from "vitest";
import { createGameState } from "./gameState";
import type { Level } from "../levels";

describe("game state", () => {
  it("starts a game in the running state", () => {
    const level: Level = { id: "test", name: "Test level" };

    expect(createGameState(level)).toEqual({
      level,
      running: true
    });
  });
});
