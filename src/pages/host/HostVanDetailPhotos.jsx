import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function HostVanDetailPhotos(){
    const [ vanData, setVanData ] = useOutletContext();

    return (
        <div className='host-van--detail__photos'>
            <img src={vanData.imageUrl} />
        </div>
    )
}
