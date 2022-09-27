import { store } from '../../store'

export type AppDispatch = typeof store.dispatch

export interface IDispatchProp {
  dispatch: AppDispatch
}
