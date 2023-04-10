// jest.setup.js
import '@testing-library/jest-dom/extend-expect'

// RTK Query Warning
// Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.
import 'whatwg-fetch'
