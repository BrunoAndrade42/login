import type { NextPage } from 'next'
import * as Styles from 'styles/pages/index.styles'
import { Wrapper } from 'components/wrapper'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formLogin = {
      email,
      senha
    }

    console.log(formLogin)
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <Wrapper width="50%" alignItems="center" justifyContent="center">
          <Styles.Title> Big Little Step </Styles.Title>
        </Wrapper>

        <Styles.FormContainer>
          <Styles.FormContent>
            <Wrapper alignItems="flex-start" justifyContent="center">
              <Styles.Strong> Falta pouco! </Styles.Strong>
              <Styles.Text> Faça o login </Styles.Text>
            </Wrapper>

            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Password" onChange={(e) => setSenha(e.target.value)} />

            {/* <Button variant="outlined">outlined</Button>
            <Button>Normal</Button> */}
            <Button  type="submit" onClick={handleSubmit} >
              Entrar
            </Button>
              <Link href="/cadastro">
                <Styles.RegisterLink> 
                    Cadastre-se aqui! 
                </Styles.RegisterLink>
              </Link>
          </Styles.FormContent>
        </Styles.FormContainer>
      </Styles.Content>
    </Styles.Container>
  )
}

export default Home
