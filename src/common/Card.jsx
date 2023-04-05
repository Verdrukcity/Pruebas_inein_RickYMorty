import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCharacterInfo } from '../Redux/Reducer'
import "./Card.css"
const Card = ({name, status, species, image, id}) => {
  const dispatch = useDispatch();

  return (
    <div className='container'>
        <div>
            <p className='fontName'>{name}</p>
        </div>
        <div>
            <img className='caracterImg' src={image}></img>
        </div>
        <div className='fontInfo'>

            <p>Status: {status}</p>
            <p>species: {species}</p>
            <Link onClick={()=> dispatch(getCharacterInfo(id))} className='linkBtn' to={`/character/${id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Card