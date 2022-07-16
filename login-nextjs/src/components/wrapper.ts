import styled from 'styled-components'

interface WrapperProps {
  width?: string
  height?: string
  justifyContent?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | 'initial'
    | 'inherit'
    | 'unset'
  alignItems?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline'
    | 'initial'
    | 'inherit'
    | 'unset'
    | 'baseline'
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit'
    | 'unset'
  flexWrap?:
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
    | 'initial'
    | 'inherit'
    | 'unset'
  gap?: string
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  gap: ${({ gap }) => gap || '0'};
`
