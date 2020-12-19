export interface Record {
  money: number;
  date: Date;
  type: 'cost' | 'earn';
  tag: string[];
  note: string;
}
