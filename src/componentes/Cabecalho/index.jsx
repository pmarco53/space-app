import { styled } from 'styled-components'
import CampoTexto from '../CampoTexto'
import { useState } from 'react'

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`

const Cabecalho = ({ aoFiltrar }) => {
  const [filtro, setFiltro] = useState('')

  const handleChange = (e) => {
    const valor = e.target.value
    setFiltro(valor)
    aoFiltrar(valor) // Chama a função de filtragem passada como prop
  }
  return (
    <HeaderEstilizado>
      <img src='/imagens/logo.png' alt='' />
      <CampoTexto
        label='Nome'
        valor={filtro}
        placeholder='O que você procura?'
        onChange={handleChange}
      />
    </HeaderEstilizado>
  )
}

export default Cabecalho
