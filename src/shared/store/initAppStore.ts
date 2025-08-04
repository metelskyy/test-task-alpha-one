import { makeAutoObservable } from 'mobx'

// стор для глобальных для приложения данных
class InitAppStore {
  // флаг загрузки
  loading = true

  constructor() {
    makeAutoObservable(this)
  }

  setLoading(loading: boolean) {
    this.loading = loading
  }
}

export const initAppStore = new InitAppStore()
