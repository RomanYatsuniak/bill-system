export interface BaseBills {
  water?: number;
  heat?: number;
  gas?: number;
  electricity?: number;
  maintenance?: number;
}

// tslint:disable-next-line:no-empty-interface
export interface Count extends BaseBills {
  date?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface Prices extends BaseBills {}

