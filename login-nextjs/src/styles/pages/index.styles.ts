import styled, { css } from 'styled-components'

export const Sect = styled.section`
  ${({ theme }) => {
    return css`
      background-image: url('/images/stars-gradient.png');
    `
  }};
`
export const Container = styled.section`
  ${({ theme }) => {
    return css`
      background: ${theme.colors.primary};
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      width: 100%;
    `
  }};
`

export const Content = styled.section`
  ${({ theme }) => {
    return css`
      background-image: url('/images/trooper.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 80%;
      height: 60%;
      display: flex;
      justify-content: space-between;
      border-radius: 5%;
    `
  }};
`

export const TitleContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      color: white;
      width: 50%;
    `
  }};
`

export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      background-image: url('/images/stars-gradient.png');
    `
  }};
`

export const ContainerLogin = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.secondary};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 44%;
      border-top-right-radius: 10%;
      border-bottom-right-radius: 10%;
    `
  }};
`

export const Strong = styled.strong`
  ${({ theme }) => {
    return css`
      font-size: 1.5rem;
      font-weight: bold;
    `
  }};
`

export const InputContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
    `
  }};
`
