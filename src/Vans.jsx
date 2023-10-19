import React, { useEffect, useState } from "react";
import Van from "./Van";
import { nanoid } from 'nanoid'
import TypeTag from "./TypeTag";

export default function Vans(){
    const [ vanData, setVanData ] = useState([])

    useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => setVanData(data.vans))
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    const vansElement = vanData.map(van => {
        return (
            <Van
                key={ nanoid() }
                name={ van.name }
                description={ van.description }
                price={ van.price }
                imageUrl = { van.imageUrl }
                type={ van.type }
                isThumbnail={ true }
            />
        )
    })

    const filtersElement = [...new Set(vanData.map(van => van.type))]   //creates set of unique items from type property
                        .map(filter => {
                            return <TypeTag type={filter} isFilter={true} key={nanoid()}/>
                        })

    return (
        <section className="vans">
            <h1 className="vans__title">Explore our van options</h1>
            <div className="vans__filters">
                {filtersElement}
                <p className="vans__filters__clear">Clear filters</p>
            </div>
            <div className="vans__grid">
                {vansElement}
            </div>
        </section>
    )
}
