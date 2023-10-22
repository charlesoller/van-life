import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import HostVanThumbnail from "../../components/HostVanThumbnail"

export default function HostVans(){
    const [ vanData, setVanData ] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
        .then(response => response.json())
        .then(data => setVanData(data.vans))
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    const vansElement = vanData.map(van => {
        return (
            <HostVanThumbnail
                key={ nanoid() }
                id={ van.id }
                name={ van.name }
                price={ van.price }
                imageUrl = { van.imageUrl }
            />
        )
    })

    return (
        vanData.length ?
        <div className="host-vans">
            <h1 className="host-vans__title">Your listed vans</h1>
            <div className="host-vans__grid">
                { vansElement }
            </div>
        </div>
        : <h3>Loading...</h3>
    )
}
