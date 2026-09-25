export interface Level {
  readonly id: string;
  readonly name: string;
}

export function loadLevel(id: string): Level {
  if (id === "level-1") {
    return {
      id,
      name: "First level"
    };
  }

  throw new Error(`Unknown level: ${id}`);
}
