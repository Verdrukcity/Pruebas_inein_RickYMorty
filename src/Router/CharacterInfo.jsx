import React from 'react'
import { useSelector } from 'react-redux'

const CharacterInfo = () => {
  const info = useSelector(state => state.rickNMorty.character)
  console.log(info)
  return (
    <div>
      <p>{info.name}</p>
      <img src={info.image}></img>
      <p>Especie:{info.species}</p>
      <p>Status:{info.status}</p>
      <p>Genero:{info.gender}</p>
      <p>Origen: {info.origin.name}</p>
      <p>Locacion: {info.location.name}</p>
    </div>
  )
}

export default CharacterInfo