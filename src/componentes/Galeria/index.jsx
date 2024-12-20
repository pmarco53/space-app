import Titulo from '../Titulo'
import Tags from './Tags'
import Populares from './Populares'
import styled from 'styled-components'
import Imagem from './Imagem'
import { useEffect, useState } from 'react'

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`
const ImagensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const Galeria = ({ aoFotoSelecionada, aoAlternarFavorito, fotos = [] }) => {
  const [tagSelecionada, setTagSelecionada] = useState(null)

  // Estado para armazenar as fotos filtradas
  const [fotosFiltradas, setFotosFiltradas] = useState(fotos)

  // Filtra as fotos sempre que a tag selecionada mudar
  useEffect(() => {
    if (tagSelecionada && tagSelecionada !== 0) {
      setFotosFiltradas(fotos.filter((foto) => foto.tagId === tagSelecionada))
    } else {
      setFotosFiltradas(fotos)
    }
  }, [tagSelecionada, fotos])

  return (
    <>
      <Tags aoSelecionarTag={setTagSelecionada} />
      <GaleriaContainer>
        <SecaoFluida>
          <ImagensContainer>
            <Titulo>Navegue Pela Galeria</Titulo>
            {fotosFiltradas.map((foto) => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares fotos={fotos} />
      </GaleriaContainer>
    </>
  )
}
export default Galeria
