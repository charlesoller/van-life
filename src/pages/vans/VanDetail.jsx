import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TypeTag from '../../components/TypeTag'

export default function VanThumbnail(){
    const params = useParams();
    const [ vanData, setVanData ] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVanData(data.vans))
        .catch((err) => {
            console.log(err.message);
        });
    }, [params.id]);

    return (
        vanData ?
        <div className="van--detail">
            <img className="van--detail__image" src={ vanData.imageUrl } alt="An image of a van available for rental." />
            <h1 className="van--detail__name">{ vanData.name }</h1>
            <h3 className="van--detail__price">${ vanData.price }<span className="van--detail__price-subtext">/day</span></h3>
            <p className="van--detail__description"> {vanData.description }</p>
            <TypeTag type={ vanData.type } className="van--detail__type"/>
            <button className="van--detail__button">Rent this van</button>
        </div>
        : <h2>Loading...</h2>
    )
}
