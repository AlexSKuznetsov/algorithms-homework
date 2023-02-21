import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error("A shape should have at least 3 points.");
    }

    this.points = points;
    this.color = color || "green";
    this.filled = filled ?? true;
  }

  public toString(): string {
    const filledStr = this.filled ? "filled" : "not filled";
    const pointsStr = this.points.map((p) => `(${p.x}, ${p.y})`).join(", ");
    return `A Shape with color of ${this.color} and ${filledStr}. Points: ${pointsStr}.`;
  }

  public getPerimeter(): number {
    const perimeter = this.points.reduce((acc, curr, idx, arr) => {
      if (idx === arr.length - 1) {
        return acc + curr.distance(arr[0]);
      }
      return acc + curr.distance(arr[idx + 1]);
    }, 0);

    return perimeter;
  }
}
