'use client'

// Types
import { INextPageError } from '@/types'

const Error = ({ error, reset }: INextPageError) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <h2>Error: {error.message}</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}

export default Error
