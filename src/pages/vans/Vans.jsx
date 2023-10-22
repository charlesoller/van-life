import React, { useEffect, useState } from "react";
import { useSearchParams, Link  } from "react-router-dom";
import { nanoid } from 'nanoid'
import TypeTag from "../../components/TypeTag";
import VanThumbnail from "../../components/VanThumbnail";
import { getVans } from "../../utility/api";

export default function Vans(){
    const [ vanData, setVanData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ searchParams, setSearchParams ] = useSearchParams();
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVanData(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, []);

    const vansElement = vanData.map(van => {
        const thumbnailEle =
            <Link className="van--thumbnail" to={ van.id } state={{ search: `?${searchParams.toString()}`}} key={ nanoid() }>
                <VanThumbnail
                    id={ van.id }
                    name={ van.name }
                    price={ van.price }
                    imageUrl = { van.imageUrl }
                    type={ van.type }
                />
            </Link>
        return (
            typeFilter ?
                van.type === typeFilter ?
                thumbnailEle : null
            : thumbnailEle
        )
    })

    const filtersElement = [...new Set(vanData.map(van => van.type))]   //creates set of unique items from type property
                        .map(filter => {
                            return (
                                <Link to={`?type=${filter}`} key={ nanoid() }>
                                    <TypeTag type={filter} isFilter={true} isSelected={typeFilter === filter} className="vans__filter" />
                                </Link>
                            )
                        })

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>There was an error: {error.message}</h3>
    }
    
    return (
        <section className="vans">
            <h1 className="vans__title">Explore our van options</h1>
            <div className="vans__filters">
                {filtersElement}
                {typeFilter ? <Link className="vans__filters__clear" to=".">Clear filters</Link> : null}
            </div>
            <div className="vans__grid">
                {vansElement}
            </div>
        </section>
    )
}
