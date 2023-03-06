abstract class Item {
  protected static idCounter: number = 1;
  readonly id: number;
  readonly name: string;
  value: number;
  weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = ++Item.idCounter;
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  static resetIdCounter(): void {
    Item.idCounter = 1;
  }

  abstract use(): void;

  compareTo(otherItem: Item): number {
    if (this.value === otherItem.value) {
      return this.name.localeCompare(otherItem.name);
    } else {
      return this.value > otherItem.value ? 1 : -1;
    }
  }

  getId(): number {
    return this.id;
  }

  toString(): string {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  }
}

export { Item };
