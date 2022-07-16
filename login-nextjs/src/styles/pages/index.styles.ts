import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      opacity: 0.9;
      background-image: url('/stars-gradient.png');
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
      background-image: url('/trooper.png');
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

export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      font-size: 2.5rem;
    `
  }};
`

export const FormContainer = styled.form`
  ${({ theme }) => {
    return css`
      width: 44%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      border-top-right-radius: 10%;
      border-bottom-right-radius: 10%;
      background-color: white;
    `
  }};
`

export const FormContent = styled.div`
  ${({ theme }) => {
    return css`
      width: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
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

export const Text = styled.p`
  ${({ theme }) => {
    return css`
      margin: 0.5rem 0 1rem 0;
      font-size: 1rem;
    `
  }};
`

export const RegisterLink = styled.a`
  ${({ theme }) => {
    return css`
      cursor: pointer;
      text-decoration: none;
      color: ${theme.colors.marrom};
      transition: 0.3s;
    `
  }};
`
