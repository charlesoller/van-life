import React from 'react'
import TypeTag from './TypeTag'

export default function VanThumbnail({ name, price, imageUrl, type }){
    return (
        <article className="van-thumbnail">
            <img className="van-thumbnail__image" src={ imageUrl } alt='An image of a van available for rent.' />
            <h3 className="van-thumbnail__name">{ name }</h3>
            <div className="van-thumbnail__pricing-info">
                <h3 className="van-thumbnail__price">{ price }</h3>
                <p>/day</p>
            </div>
            <TypeTag type={type} />
        </article>

    )
}
