import { styled } from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import BarraLateral from './componentes/BarraLateral'
import Banner from './componentes/Banner'
import bannerBackground from '/assets/banner.png'
import Galeria from './componentes/Galeria'
import fotos from './fotos.json'
import { useState } from 'react'
import ModalZoom from './componentes/ModalZoom'
import Rodape from './componentes/Rodape'

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      })
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        }
      })
    )
  }

  const [filtro, setFiltro] = useState('')

  // Filtra as fotos com base no texto de filtro
  const fotosFiltradas = fotos.filter((foto) =>
    foto.titulo.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Cabecalho aoFiltrar={setFiltro} />
          <MainContainer>
            <BarraLateral />
            <ConteudoGaleria>
              <Banner
                texto='A galeria mais completa de fotos do espaço!'
                backgroundImage={bannerBackground}
              />
              <Galeria
                aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
                aoAlternarFavorito={aoAlternarFavorito}
                fotos={fotosFiltradas}
              />
            </ConteudoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSelecionada}
          aoFechar={() => setFotoSelecionada(null)}
          aoAlternarFavorito={aoAlternarFavorito}
        />
      </FundoGradiente>
      <Rodape />
    </>
  )
}

export default App