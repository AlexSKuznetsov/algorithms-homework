class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);

  constructor(x?: number, y?: number) {
    if (x !== undefined && y !== undefined) {
      this.x = x;
      this.y = y;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(x: number, y: number): number;

  public distance(pointObj: Point): number;

  public distance(): number;

  public distance(arg1?: number | Point | undefined, arg2?: number) {
    if (arg1 === undefined) {
      return Math.hypot(this.x, this.y);
    }

    if (typeof arg1 === "object" && arg1 instanceof Point) {
      const { x, y } = arg1;
      const dx = this.x - x;
      const dy = this.y - y;
      return Math.hypot(dx, dy);
    }

    if (typeof arg1 === "number" && arg2) {
      const dx = this.x - arg1;
      const dy = this.y - arg2;
      return Math.hypot(dx, dy);
    }
  }
}

export { Point };
