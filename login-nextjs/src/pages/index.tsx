import type { NextPage } from 'next'
import * as Styles from 'styles/pages/index.styles'

const Home: NextPage = () => {
  return (
    <Styles.Sect>
      <Styles.Container>
        <Styles.Content>
          <Styles.TitleContainer1>
              <p> Big Little Step </p>
          </Styles.TitleContainer1>

          {/* <Styles.TitleContainer2>
            <Styles.Text1>
              <Styles.Strong1> Falta pouco! </Styles.Strong1>
              <Styles.Text_P> Faça o login </Styles.Text_P>
            </Styles.Text1>
            <Styles.Input_Div>
              <Styles.Input_1>
                <input type="text" placeholder="Email" />

              </Styles.Input_1>
              <Styles.Input_1>
                <input type="text" placeholder="Senha" />
        
              </Styles.Input_1>
            </Styles.Input_Div>
            <Styles.Links_1>
              <Styles.Button_1> Entrar </Styles.Button_1>
              <Styles.Links_A> Cadastre-se aqui! </Styles.Links_A>
            </Styles.Links_1>
          </Styles.TitleContainer2> */}
        </Styles.Content>
      </Styles.Container>
    </Styles.Sect>
  )
}

export default Home
