import tags from './tags.json'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`
const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`

const Tags = ({ aoSelecionarTag }) => {
  return (
    <>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Tag>
        {tags.map((tag) => (
          <button key={tag.id} onClick={() => aoSelecionarTag(tag.id)}>
            {tag.titulo}
          </button>
        ))}
      </Tag>
    </>
  )
}

export default Tags
