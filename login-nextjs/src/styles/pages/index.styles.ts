import styled, { css } from 'styled-components'

export const Sect = styled.section`
  ${({ theme }) => {
    return css`
      background-image: url('../../../public/stars-gradient.png);
    `
  }};
`
export const Container = styled.div`
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

export const Content = styled.div`
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

export const TitleContainer1 = styled.div`
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

export const TitleContainer2 = styled.div`
  ${({ theme }) => {
    return css`
      background-color: white;
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

export const Text1 = styled.div`
  ${({ theme }) => {
    return css`
      width: 16rem;
    `
  }};
`

export const Strong1 = styled.strong`
  ${({ theme }) => {
    return css`
      font-size: 1.5rem;
      font-weight: bold;
    `
  }};
`

export const Text_P = styled.p`
  ${({ theme }) => {
    return css`
      margin: 0.5rem 0 1rem 0;
      font-size: 1rem;
    `
  }};
`

export const Input_Div = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
    `
  }};
`

export const Input_1 = styled.input`
  ${({ theme }) => {
    return css`
      margin: 0.4rem;
      padding: 1rem;
      width: 16rem;
      border: none;
      background-color: #f5f5f5;
      border-radius: 10px;
      font-size: 1rem;
    `
  }};
`
export const Links_1 = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
    `
  }};
`

export const Button_1 = styled.button`
  ${({ theme }) => {
    return css`
      padding: 0.9rem;
      width: 16rem;
      background-color: black;
      color: white;
      border-radius: 10px;
      cursor: pointer;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    `
  }};
`

export const Links_A = styled.a`
  ${({ theme }) => {
    return css`
      text-decoration: none;
      color: rgb(136, 135, 135);
      transition: 0.3s;
    `
  }};
`