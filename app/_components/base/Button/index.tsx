'use client'

// React
import { ButtonHTMLAttributes, forwardRef } from 'react'

const BaseButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <button {...props} ref={ref} />
})

BaseButton.displayName = 'BaseButton'

export { BaseButton }
