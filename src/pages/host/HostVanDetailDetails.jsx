import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetailDetails(){
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
        <div className="host-van--detail__details">
            <p><b>Name: </b>{ vanData.name }</p>
            <p style={{textTransform: "capitalize"}}><b>Category: </b>{ vanData.type }</p>
            <p><b>Description: </b>{ vanData.description }</p>
            <p><b>Visibility: </b>Public</p>
        </div>
    )
}
