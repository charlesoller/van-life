import React from 'react'
import { Link } from "react-router-dom"
import TypeTag from './TypeTag'

export default function VanThumbnail({ id, name, price, imageUrl, type }){
    return (
        <Link className="van--thumbnail" to={id}>
            <img className="van--thumbnail__image" src={ imageUrl } alt='An image of a van available for rent.' />
            <h3 className="van--thumbnail__name">{ name }</h3>
            <h3 className="van--thumbnail__price">${ price }</h3>
            <p className="van--thumbnail__price-subtext">/day</p>
            <TypeTag className="van--thumbnail__type" type={type} isFilter={false}/>
        </Link>
    )
}
