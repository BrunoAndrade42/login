import type { NextPage } from 'next'
import * as Styles from 'styles/pages/index.styles'
import { Wrapper } from 'components/wrapper'
import { Button } from 'components/Button'
import { Input } from 'components/Input'

const Home: NextPage = () => {
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

            <Input placeholder="Login" />
            <Input placeholder="Password" />

            {/* <Button variant="outlined">outlined</Button>
            <Button>Normal</Button> */}
            <Button  type="submit">
              Entrar
            </Button>
            <Styles.RegisterLink> Cadastre-se aqui! </Styles.RegisterLink>
          </Styles.FormContent>
        </Styles.FormContainer>
      </Styles.Content>
    </Styles.Container>
  )
}

export default Home
