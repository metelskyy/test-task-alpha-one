import { makeAutoObservable } from 'mobx'

class CurrentTokenStore {
  // цена токена
  tokenRate = '0'

  constructor() {
    makeAutoObservable(this)
  }

  setTokenRate(currTokenRate: string) {
    this.tokenRate = currTokenRate
  }
}

export const currTokenStore = new CurrentTokenStore()
