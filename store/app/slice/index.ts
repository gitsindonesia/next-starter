// Interfaces
import {
	IAppSliceHandleCounterAttrs,
	EAppSliceHandleCounterType,
	IAppSliceState
} from './types'

// Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Interfaces
import { TRootState } from '@/store/reducer'

const initialState: IAppSliceState = {
	counter: 0
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		app_HANDLE_COUNTER: (
			state,
			{ payload }: PayloadAction<IAppSliceHandleCounterAttrs>
		): void => {
			if (payload.type === EAppSliceHandleCounterType.INCREASE) {
				state.counter = state.counter += 1
			}

			if (payload.type === EAppSliceHandleCounterType.DECREASE) {
				state.counter = state.counter -= 1
			}
		}
	}
})

// Actions / Mutations
export const { app_HANDLE_COUNTER } = appSlice.actions

// Getters
export const appGetCounter = (state: TRootState) => state.app.counter

export default appSlice.reducer
