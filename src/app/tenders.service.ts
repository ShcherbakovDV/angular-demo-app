import { Injectable } from "@angular/core";

export interface Tender {
  tenderId: number;
  tam: string;
  region: string;
  inn: string;
  clientName: string;
  tenderStatus: string;
  goszakupkiLink: string;
  dateOfTender: string;
  winner: string;
  indication: string;
  contractDetails: string;
  details: TenderSKU[];
}

export interface TenderSKU {
  tenderId: number;
  brand: string;
  nameEng: string;
  code: number;
  tenderVolume: number;
  tenderValueUSD: string;
  torecastedValueUSD: string;
  diffStartAndEDL: string;
  diffStartAndReference: string;
}

const randomStrings = [
  "From fairest creatures we desire increase,",
  "That thereby beauty's rose might never die,",
  "But as the riper should by time decease,",
  "His tender heir might bear his memory:",
  "But thou, contracted to thine own bright eyes,",
  "Feed'st thy light'st flame with self-substantial fuel,",
  "Making a famine where abundance lies,",
  "Thyself thy foe, to thy sweet self too cruel.",
  "Thou that art now the world's fresh ornament",
  "And only herald to the gaudy spring,",
  "Within thine own bud buriest thy content",
  "And, tender churl, makest waste in niggarding.",
  "Pity the world, or else this glutton be,",
  "To eat the world's due, by the grave and thee."
];

const getRandomInt = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max + 1 - min));

const getRandomString = (): string =>
  randomStrings[getRandomInt(0, randomStrings.length - 1)];

@Injectable({
  providedIn: "root"
})
export class TendersService {
  _tenders: Tender[];

  constructor() {
    this._tenders = TendersService.generate();
  }

  get tenders(): Tender[] {
    return this._tenders;
  }

  private static genirateTenderSKU(tenderId: number): TenderSKU {
    return {
      tenderId,
      brand: getRandomString(),
      nameEng: getRandomString(),
      code: getRandomInt(200, 1920123),
      tenderVolume: getRandomInt(200, 1920123),
      tenderValueUSD: getRandomString(),
      torecastedValueUSD: getRandomString(),
      diffStartAndEDL: getRandomString(),
      diffStartAndReference: getRandomString()
    };
  }

  private static genirateTenderSKUList(tenderId, maxCount): TenderSKU[] {
    const result: TenderSKU[] = [];

    for (let i = 0; i < maxCount; i++) {
      result.push(TendersService.genirateTenderSKU(tenderId));
    }

    return result;
  }

  private static generateTender(id: number): Tender {
    return {
      tenderId: id,
      tam: getRandomString(),
      region: getRandomString(),
      inn: getRandomString(),
      clientName: getRandomString(),
      tenderStatus: getRandomString(),
      goszakupkiLink: getRandomString(),
      dateOfTender: getRandomString(),
      winner: getRandomString(),
      indication: getRandomString(),
      contractDetails: getRandomString(),
      details: TendersService.genirateTenderSKUList(id, getRandomInt(3, 6))
    };
  }

  private static generate(count = 10): Tender[] {
    const tenders: Tender[] = [];

    for (let i = 0; i < 10; i++) {
      tenders.push(TendersService.generateTender(i));
    }

    return tenders;
  }
}
