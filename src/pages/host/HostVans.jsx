import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import HostVanThumbnail from "../../components/HostVanThumbnail"
import { getHostVans } from "../../utility/api"

export default function HostVans(){
    const [ vanData, setVanData ] = useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVanData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

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

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="host-vans">
            <h1 className="host-vans__title">Your listed vans</h1>
            <div className="host-vans__grid">
                { vansElement }
            </div>
        </div>
    )
}
