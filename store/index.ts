// Redux Toolkit
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

// React Redux
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

// Reducers / Slices
import rootReducer, { TRootState } from './reducer'

// RTK
import { emptySplitApi } from './rtk'

// Listener Middleware
export const listenerMiddleware = createListenerMiddleware()

// Root Store
const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => {
		const middleware = getDefaultMiddleware()
			.prepend(listenerMiddleware.middleware)
			.concat(emptySplitApi.middleware)

		return middleware
	},
	devTools: process.env.NODE_ENV === 'development'
})

setupListeners(store.dispatch)

export type TAppDispatch = typeof store.dispatch
export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector

export { store }
