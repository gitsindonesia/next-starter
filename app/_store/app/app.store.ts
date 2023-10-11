// Zunstand
import { create } from 'zustand'

// Types
import { TAppStoreState, TAppStoreAction } from './app.store.type'

export const useAppStore = create<TAppStoreState & TAppStoreAction>(set => ({
  counter: 0,
  handleCounter: type =>
    set(state => ({
      counter:
        type === 'increment' ? (state.counter += 1) : (state.counter -= 1)
    }))
}))
