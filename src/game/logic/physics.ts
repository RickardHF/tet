export interface Position {
  readonly x: number;
  readonly y: number;
}

export function nextPosition(position: Position): Position {
  return position;
}
