class Shipment {
  private shipmentID: number;
  private weight: number;
  private fromAddress: string;
  private fromZipCode: string;
  private toAddress: string;
  private toZipCode: string;
  private fragile: boolean;
  private doNotLeave: boolean;
  private returnReceiptRequested: boolean;

  constructor(
    shipmentID: number = 0,
    weight: number,
    fromAddress: string,
    fromZipCode: string,
    toAddress: string,
    toZipCode: string,
    fragile: boolean,
    doNotLeave: boolean,
    returnReceiptRequested: boolean
  ) {
    this.shipmentID = shipmentID;
    this.weight = weight;
    this.fromAddress = fromAddress;
    this.fromZipCode = fromZipCode;
    this.toAddress = toAddress;
    this.toZipCode = toZipCode;
    this.fragile = fragile;
    this.doNotLeave = doNotLeave;
    this.returnReceiptRequested = returnReceiptRequested;
  }

  public ship(): string {
    const rate = this.getShippingRate();
    const cost = (this.weight * rate).toFixed(2);
    let result = `Shipment with the ID ${this.shipmentID} will be picked up from ${this.fromAddress}, ${this.fromZipCode} and shipped to ${this.toAddress}, ${this.toZipCode}\nCost = ${cost}\n`;

    if (this.fragile) {
      result += '**MARK FRAGILE**\n';
    }

    if (this.doNotLeave) {
      result += '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**\n';
    }

    if (this.returnReceiptRequested) {
      result += '**MARK RETURN RECEIPT REQUESTED**\n';
    }

    return result;
  }

  private getShippingRate(): number {
    const firstDigit = this.fromZipCode.charAt(0);
    let rate: number;

    switch (firstDigit) {
      case '1':
      case '2':
      case '3':
        rate = 0.39;
        break;
      case '4':
      case '5':
      case '6':
        rate = 0.42;
        break;
      default:
        rate = 0.51;
        break;
    }

    if (this.weight <= 15) {
      rate = Math.min(rate, 0.39);
    } else if (this.weight <= 160) {
      rate = Math.min(rate, 0.25);
    } else {
      rate += 0.02;
      if (rate === 0.42) {
        rate += 0.2;
      } else if (rate === 0.51) {
        rate += 0.19;
      } else {
        rate += 10;
      }
    }

    return rate;
  }

  public isFragile(): boolean {
    return this.fragile;
  }

  public isDoNotLeave(): boolean {
    return this.doNotLeave;
  }

  public isReturnReceiptRequested(): boolean {
    return this.returnReceiptRequested;
  }
}

const s = new Shipment(1, 100, 'from', '123', 'to', '333', true, true, false);
console.log(s.ship());
