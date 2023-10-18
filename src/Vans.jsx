import React, { useEffect, useState } from "react";
import VanThumbnail from "./VanThumbnail";

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
            <VanThumbnail
                name={ van.name }
                price={ van.price }
                imageUrl = { van.imageUrl }
                type={ van.price }
            />
        )
    })

    console.log(vanData)
    return (
        <section className="vans">
            <h1 className="vans__title">Explore our van options</h1>
            <div className="vans__filters">
                {}
            </div>
            <div className="vans__grid">
                {vansElement}
            </div>
        </section>
    )
}
