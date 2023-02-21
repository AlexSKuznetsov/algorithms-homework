import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(p1: Point, p2: Point, p3: Point);
  constructor(p1: Point, p2: Point, p3: Point, color: string, filled: boolean);
  constructor(p1: Point, p2: Point, p3: Point, color?: string, filled?: boolean) {
    super([p1, p2, p3], color!, filled!);
  }

  public toString(): string {
    const p1 = this.points[0].toString();
    const p2 = this.points[1].toString();
    const p3 = this.points[2].toString();
    return `Triangle[v1=${p1},v2=${p2},v3=${p3}]`;
  }

  public getType(): string {
    const side1 = this.points[0].distance(this.points[1]);
    const side2 = this.points[1].distance(this.points[2]);
    const side3 = this.points[2].distance(this.points[0]);

    if (Math.abs(side1 - side2) < Number.EPSILON * 10 && Math.abs(side2 - side3) < Number.EPSILON * 10) {
      return "equilateral triangle";
    } else if (
      Math.abs(side1 - side2) < Number.EPSILON * 10 ||
      Math.abs(side2 - side3) < Number.EPSILON * 10 ||
      Math.abs(side3 - side1) < Number.EPSILON * 10
    ) {
      return "isosceles triangle";
    } else {
      return "scalene triangle";
    }
  }
}
