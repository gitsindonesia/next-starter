// Zunstand
import { create } from 'zustand'

// Types
import { TAppStoreState, TAppStoreMutation } from './app.store.type'

export const useAppStore = create<TAppStoreState & TAppStoreMutation>(set => ({
  // ========== State

  counter: 0,
  todoList: [],

  // ========== End State

  // ========== Mutation

  /**
   * @description Handle counter
   *
   * @param {string} type
   *
   * @return {void} void
   */
  HANDLE_COUNTER: type =>
    set(state => ({
      counter:
        type === 'increment' ? (state.counter += 1) : (state.counter -= 1)
    }))
}))
