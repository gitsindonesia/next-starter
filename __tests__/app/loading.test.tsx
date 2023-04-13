// React Testing Library
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// App Components
import Loading from '@/app/loading'

describe('App loading', () => {
  it('Loading should be rendered', () => {
    render(<Loading />)
  })
})
