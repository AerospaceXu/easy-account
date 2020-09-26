export interface ListRecord {
  money: number;
  date: Date;
  type: 'cost' | 'earn';
  tag: string[];
  note: string;
}
