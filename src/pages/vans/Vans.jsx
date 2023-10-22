import React, { useEffect, useState } from "react";
import { useSearchParams, Link  } from "react-router-dom";
import { nanoid } from 'nanoid'
import TypeTag from "../../components/TypeTag";
import VanThumbnail from "../../components/VanThumbnail";

export default function Vans(){
    const [ vanData, setVanData ] = useState([])
    const [ searchParams, setSearchParams ] = useSearchParams();
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => setVanData(data.vans))
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    const vansElement = vanData.map(van => {
        const thumbnailEle =
            <VanThumbnail
                key={ nanoid() }
                id={ van.id }
                name={ van.name }
                price={ van.price }
                imageUrl = { van.imageUrl }
                type={ van.type }
            />

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
                                <Link to={`?type=${filter}`}>
                                    <TypeTag type={filter} isFilter={true} isSelected={typeFilter === filter} className="vans__filter" key={nanoid()} />
                                </Link>
                            )
                        })


    return (
        vanData.length ?
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
        : <h3>Loading...</h3>
    )
}
