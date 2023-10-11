'use client'

// React
import { forwardRef } from 'react'

// Antd
import { Button, ButtonProps } from 'antd'

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button {...props} ref={ref} />
})

BaseButton.displayName = 'BaseButton'

export { BaseButton }
