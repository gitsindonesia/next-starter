// React Redux
import { combineReducers } from '@reduxjs/toolkit'

// Slices
import app from '@/store/app/slice'

// RTK
import { emptySplitApi } from './rtk'

const rootReducer = combineReducers({
	app,
	[emptySplitApi.reducerPath]: emptySplitApi.reducer
})

export type TRootState = ReturnType<typeof rootReducer>

export default rootReducer
