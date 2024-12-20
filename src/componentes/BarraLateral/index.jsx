import { styled } from 'styled-components'
import ItemNavegacao from './ItemNavegacao'

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
  flex-grow: 1;
  max-width: calc(100% - 270px);
`

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo='/icones/home-ativo.png'
            iconeInativo='/icones/home-inativo.png'
            ativo={true}
          >
            Inicio
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo='/icones/mais-vistas-ativo.png'
            iconeInativo='/icones/mais-vistas-inativo.png'
            ativo={false}
          >
            Mais Vistos
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo='/icones/novas-ativo.png'
            iconeInativo='/icones/novas-inativo.png'
            ativo={false}
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo='/icones/surpreenda-me-ativo.png'
            iconeInativo='/icones/surpreenda-me-inativo.png'
            ativo={false}
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  )
}

export default BarraLateral
