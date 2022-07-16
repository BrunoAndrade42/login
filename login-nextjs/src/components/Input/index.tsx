import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import * as Styles from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...props }: InputProps,
  ref
) => {
  return <Styles.Input ref={ref} {...props} />
}

export const Input = forwardRef(InputBase)
