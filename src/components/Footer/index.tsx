import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link 
            title='Clique aqui para acessar jogos de RPG'
            to='/categorias#rpg'
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link title='Clique aqui para acessar jogos de Ação'
            to='/categorias#action'
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link title='Clique aqui para acessar jogos de Esportes'
            to='/categorias#sports'
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link title='Clique aqui para acessar jogos de Simulação'
            to='/categorias#simulation'
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link title='Clique aqui para acessar jogos de Lutas' 
            to='/categorias#fight'
            >
              Lutas
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link title='Clique aqui para acessar a seção de promoções' 
            to='/#on-sale'
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link title='Clique aqui para acessar a seção de em breve' 
            to='/#coming-soon'
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
