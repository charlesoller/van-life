import React, { useState, useEffect } from "react"
import  { NavLink, Link, Outlet, useParams } from "react-router-dom"
import TypeTag from "../TypeTag";

export default function HostVanDetailLayout(){
    const params = useParams();
    const [ vanData, setVanData ] = useState([])

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVanData(...data.vans))
        .catch((err) => {
            console.log(err.message);
        });
    }, [params.id]);

    return (
        <>
            <NavLink to=".." relative="path" className="host-van--detail__back">← Back to all vans</NavLink>
            <div className="host-van--detail">
                <div className='host-van--detail__top-container'>
                    <img className="host-van--detail__image" src={ vanData.imageUrl } alt="An image of a van available for rental." />
                    <h1 className="host-van--detail__name">{ vanData.name }</h1>
                    <h3 className="host-van--detail__price">${ vanData.price }<span className="host-van--detail__price-subtext">/day</span></h3>
                    <TypeTag type={ vanData.type } className="host-van--detail__type"/>
                </div>
                <nav className='host-van--detail__nav'>
                    <NavLink className={({isActive}) => isActive ? "active-link" : null} to="." end>Details</NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : null} to={`pricing`}>Pricing</NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : null} to={`photos`}>Photos</NavLink>
                </nav>
                <Outlet />
            </div>
        </>
    )
}
