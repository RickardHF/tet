import type { GameState } from "../logic";

export interface Renderer {
  render(state: GameState): void;
}

export function createRenderer(canvas: HTMLCanvasElement): Renderer {
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("A 2D canvas context is required.");
  }

  return {
    render: () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
}
