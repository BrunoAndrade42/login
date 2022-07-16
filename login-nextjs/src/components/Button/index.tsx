import React, {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'
import * as Styles from './sytles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'outlined'
  ref?: React.Ref<HTMLButtonElement>
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, ...props }: ButtonProps,
  ref
) => {
  return (
    <Styles.Button ref={ref} {...props}>
      {children}
    </Styles.Button>
  )
}

export const Button = forwardRef(ButtonBase)
