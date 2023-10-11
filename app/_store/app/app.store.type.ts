export type TAppStoreState = {
  counter: number
}

export type TAppStoreAction = {
  handleCounter: (type: 'decrement' | 'increment') => void
}
