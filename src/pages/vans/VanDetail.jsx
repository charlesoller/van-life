import React, { useState, useEffect } from 'react'
import { useParams, NavLink, useLocation } from 'react-router-dom'
import TypeTag from '../../components/TypeTag'
import { getVan } from '../../utility/api';

export default function VanDetail(){
    const { id }= useParams();
    const location = useLocation();
    const search = location.state?.search || "";
    const [ vanData, setVanData ] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

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
        <div className="van--detail">
            <NavLink to={`..${search}`} relative="path" className="van--detail__back">← Back to { search !== '?' ? vanData.type : 'all' } vans</NavLink>
            <img className="van--detail__image" src={ vanData.imageUrl } alt="An image of a van available for rental." />
            <h1 className="van--detail__name">{ vanData.name }</h1>
            <h3 className="van--detail__price">${ vanData.price }<span className="van--detail__price-subtext">/day</span></h3>
            <p className="van--detail__description"> {vanData.description }</p>
            <TypeTag type={ vanData.type } className="van--detail__type"/>
            <button className="van--detail__button">Rent this van</button>
        </div>
    )
}
