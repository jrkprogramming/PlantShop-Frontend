import React from 'react'
import {Link} from 'react-router-dom'

const Plant = ({plant}) => {
  return (
        <div>
            <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
            Price: ${plant.price}
            <img src={plant.image} alt={plant.name}/>  
        </div>

  )
}

export default Plant