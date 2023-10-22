import React, { useState, useEffect } from "react"
import { useParams, useOutletContext } from "react-router-dom"

export default function HostVanDetailDetails(){
    const [ vanData, setVanData ] = useOutletContext();

    return (
        <div className="host-van--detail__details">
            <p><b>Name: </b>{ vanData.name }</p>
            <p style={{textTransform: "capitalize"}}><b>Category: </b>{ vanData.type }</p>
            <p><b>Description: </b>{ vanData.description }</p>
            <p><b>Visibility: </b>Public</p>
        </div>
    )
}
