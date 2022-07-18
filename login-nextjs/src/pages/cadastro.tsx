import type { NextPage } from 'next'
import * as Styles from 'styles/pages/index.styles'
import { Wrapper } from 'components/wrapper'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import Link from 'next/link'
import { useState } from 'react'

const Cadastro: NextPage = () => {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const registerSubmit = (e) => {
        e.preventDefault()
        const formLogin = {
            user,
            email,
            senha
        }

        console.log(formLogin)
    }

    return (
        <Styles.Container>
        <Styles.Content>
            <Wrapper width="50%" alignItems="center" justifyContent="center">
            <Styles.Title> Little Big Step </Styles.Title>
            </Wrapper>

            <Styles.FormContainer>
            <Styles.FormContent>
                <Wrapper alignItems="flex-start" justifyContent="center">
                <Styles.Strong> Eae! </Styles.Strong>
                <Styles.Text> Registre-se agora! Não perca tempo!! </Styles.Text>
                </Wrapper>

                <Input placeholder="Usuário" onChange={(e) => setUser(e.target.value)} />
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" onChange={(e) => setSenha(e.target.value)} />

                {/* <Button variant="outlined">outlined</Button>
                <Button>Normal</Button> */}
                <Button  type="submit" onClick={registerSubmit}>
                Cadastrar
                </Button>

                <Link href="/">
                    <Styles.RegisterLink> 
                        Voltar para o Login 
                    </Styles.RegisterLink>
                </Link>
            </Styles.FormContent>
            </Styles.FormContainer>
        </Styles.Content>
        </Styles.Container>
    )
}

export default Cadastro