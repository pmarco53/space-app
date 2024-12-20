import { styled } from 'styled-components'

//console.log(props)

const ItemListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? '#7B78E5' : '#D9D9D9')};
  font-family: ${(props) =>
    props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
  display: flex;
  align-items: center;
  gap: 22px;
`
//console.log(props)
const ItemNavegação = ({
  iconeAtivo,
  iconeInativo,
  ativo = false,
  children,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt='' />
      {children}
    </ItemListaEstilizado>
  )
}

export default ItemNavegação
