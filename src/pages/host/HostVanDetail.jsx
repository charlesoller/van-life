import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import TypeTag from '../../components/TypeTag'

export default function HostVanDetail(){
    const params = useParams();
    const [ vanData, setVanData ] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVanData(...data.vans))
        .catch((err) => {
            console.log(err.message);
        });
    }, [params.id]);

    console.log(vanData)

    return (
        vanData ?
        <div className="host-van--detail">
            <div className='host-van--detail__top-container'>
                <img className="host-van--detail__image" src={ vanData.imageUrl } alt="An image of a van available for rental." />
                <h1 className="host-van--detail__name">{ vanData.name }</h1>
                <h3 className="host-van--detail__price">${ vanData.price }<span className="host-van--detail__price-subtext">/day</span></h3>
                <TypeTag type={ vanData.type } className="host-van--detail__type"/>
            </div>
            <nav className='host-van--detail__nav'>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/vans/:id/details">Details</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/vans/:id/pricing">Pricing</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/vans/:id/photos">Photos</NavLink>
            </nav>
            <p><b>Name: </b>{ vanData.name }</p>
            <p style={{textTransform: "capitalize"}}><b>Category: </b>{ vanData.type }</p>
            <p><b>Description: </b>{ vanData.description }</p>
            <p><b>Visibility: </b>Public</p>
        </div>
        : <h2>Loading...</h2>
    )
}
