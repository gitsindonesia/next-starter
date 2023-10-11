// React
import { memo } from 'react'

// Antd
import { Spin, SpinProps } from 'antd'

const BaseSpin = memo((props: SpinProps) => {
  return <Spin {...props} />
})

BaseSpin.displayName = 'BaseSpin'

export { BaseSpin }
