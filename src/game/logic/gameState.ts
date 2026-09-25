import type { Level } from "../levels";

export interface GameState {
  readonly level: Level;
  readonly running: boolean;
}

export function createGameState(level: Level): GameState {
  return {
    level,
    running: true
  };
}
