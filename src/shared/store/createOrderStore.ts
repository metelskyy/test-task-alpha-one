import { makeAutoObservable } from 'mobx'
import { isEmptyPrice, normalizePrice } from '../utils'
import { currTokenStore } from './currentTokenStore'

class CreateOrderStore {
  // сумма в валюте
  currAmountValue = ''
  // сумма в токенах
  currTokenAmountValue = ''
  // флаг, говорящий, что сейчас ввод в валюте
  isCurrencyMode = true
  // флаг загрузки
  isPending = false

  constructor() {
    makeAutoObservable(this)
  }

  // при изменении цены токена рассчитывает сумму в валюте
  get calcAmount() {
    return normalizePrice(
      +this.currTokenAmountValue * +currTokenStore.tokenRate,
    )
  }

  // при изменении цены токена рассчитывает сумму в токенах
  get calcTokenAmount() {
    return normalizePrice(+this.currAmountValue / +currTokenStore.tokenRate)
  }

  // переключалка между валютой и токеном
  toggleCurrencyMode() {
    this.recalcSecondaryAmount()
    this.isCurrencyMode = !this.isCurrencyMode
  }

  // перерасчитывает только вторичное значение т.е. если выбран ввод суммы в валюте, то перерасчитывается сумма в токенах и наоборот
  recalcSecondaryAmount() {
    if (this.isCurrencyMode) {
      this.setCurrTokenAmountValue(
        isEmptyPrice(this.calcTokenAmount) ? '' : this.calcTokenAmount,
      )
    } else {
      this.setCurrAmountValue(
        isEmptyPrice(this.calcAmount) ? '' : this.calcAmount,
      )
    }
  }

  setCurrAmountValue(currAmountValue: string) {
    this.currAmountValue = currAmountValue
  }

  setCurrTokenAmountValue(currTokenAmountValue: string) {
    this.currTokenAmountValue = currTokenAmountValue
  }

  setIsPending(isPending: boolean) {
    this.isPending = isPending
  }
}

export const createOrderStore = new CreateOrderStore()
