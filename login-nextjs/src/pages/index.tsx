import type { NextPage } from 'next'
import * as Styles from 'styles/pages/index.styles'

const Home: NextPage = () => {
  return (
    <Styles.Container>
      <div className="container">
        <div id="conteudo">
          <div className="parte1">
            <p> Big Little Step </p>
          </div>

          <div className="parte2">
            <div className="texto-parte2">
              <strong> Falta pouco! </strong>
              <p>Faça o login</p>
            </div>
            <div className="inputs-parte2">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Senha" />
            </div>
            <div className="links-parte2">
              <button>Entrar</button>
              <a href="./cadastrar.html"> Cadastre-se aqui!</a>
            </div>
          </div>
        </div>
      </div>
    </Styles.Container>
  )
}

export default Home
