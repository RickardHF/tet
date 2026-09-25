export interface KeyboardInput {
  start(): void;
  stop(): void;
}

export function createKeyboardInput(target: Window): KeyboardInput {
  const onKeyDown = (): void => {
    // Input handling will be added with the game mechanics.
  };

  return {
    start: () => target.addEventListener("keydown", onKeyDown),
    stop: () => target.removeEventListener("keydown", onKeyDown)
  };
}
