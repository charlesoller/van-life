import React from "react"
import { useOutletContext } from "react-router-dom";

export default function HostVanDetailPricing(){
    const [ vanData, setVanData ] = useOutletContext();

    return (
        <h3 className="host-van--detail__pricing"><span className="host-van--detail__pricing__price">${vanData.price}.00</span>/day</h3>
    )
}
