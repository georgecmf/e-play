import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'


const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
console.log('Itens no carrinho:', items)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderHow>
        <div>
        <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>
        <Link to="/">
        <h1>
          <img src={logo} alt="EPLAY" />
        </h1>
        </Link>
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link title='Clique aqui para acessar a página de categorias' 
              to="/categorias"
              >
                Categorias
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink 
              title='Clique aqui para acessar a seção de em breve' 
              to="#coming-soon"
              >
                Em breve
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink 
              title='Clique aqui para acessar a seção de promoções' 
              to="#on-sale"
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </nav>
      </div>
      <S.CartButton role='button' onClick={openCart}>
        {items.length > 0 && (
          <>
            <strong>{items.length}</strong> <span> - produto(s)</span>
          </>
        )}
        <img src={cartIcon} alt="Carrinho" />
      </S.CartButton>
      </S.HeaderHow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <Link 
              title='Clique aqui para acessar a página de categorias' 
              to="/categorias"
              onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
              title='Clique aqui para acessar a seção de em breve' 
              to="/categorias#coming-soon"
              onClick={() => setIsMenuOpen(false)}
              >
                Em breve
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink 
              title='Clique aqui para acessar a seção de promoções' 
              to="/categorias#on-sale"
              onClick={() => setIsMenuOpen(false)}
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
