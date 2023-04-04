'use client'

// Types
import { INextPageError } from '@/types'

export default function Error({ error, reset }: INextPageError) {
	return (
		<>
			<h1>Something went wrong</h1>
			<h2>Error: {error.message}</h2>
			<button onClick={() => reset()}>Try Again</button>
		</>
	)
}
