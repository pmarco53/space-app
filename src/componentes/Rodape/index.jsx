import styled from 'styled-components'
import twitterIcon from './sociais/twitter.svg'
import facebookIcon from './sociais/facebook.svg'
import instagramIcon from './sociais/instagram.svg'

const FooterEstilizado = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  background-color: #04244f;
  height: 80px;
  color: #ffffff;
  div {
    display: flex;
    gap: 60px;
    padding: 20px;
    height: 35px;
    width: 162.19px;
  }
`

const Rodape = () => {
  return (
    <FooterEstilizado>
      <div>
        <img src={facebookIcon} alt='facebook' />
        <img src={instagramIcon} alt='instagram' />
        <img src={twitterIcon} alt='twitter' />
      </div>

      <p>Desenvolvido por Alura</p>
    </FooterEstilizado>
  )
}

export default Rodape
