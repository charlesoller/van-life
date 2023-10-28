import React, { useState, useEffect } from "react"
import  { NavLink, Link, Outlet, useParams } from "react-router-dom"
import TypeTag from "../TypeTag";
import { getVan } from "../../utility/api";

export default function HostVanDetailLayout(){
    const [vanData, setVanData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVanData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

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
                <Outlet context={[ vanData, setVanData ]}/>
            </div>
        </>
    )
}
