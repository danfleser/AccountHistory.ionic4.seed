export interface Transaction {
  id: number;
  accountId: number;
  action: string;
  name: string;
  value: number;
  balanceBefore: number;
  date: Date;
}