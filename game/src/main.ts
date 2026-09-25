import { createGameState } from "../../src/game/logic";
import { createKeyboardInput } from "../../src/game/input";
import { loadLevel } from "../../src/game/levels";
import { createRenderer } from "../../src/game/rendering";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas");

if (!canvas) {
  throw new Error("Game canvas was not found.");
}

const state = createGameState(loadLevel("level-1"));
const renderer = createRenderer(canvas);
const input = createKeyboardInput(window);

function gameLoop(): void {
  renderer.render(state);
  requestAnimationFrame(gameLoop);
}

input.start();
gameLoop();
