export type Order = {
  id: number
  amountTokens: string
  amountDollars: string
  status: 'Processing' | 'Completed'
  createdAt: string
}
