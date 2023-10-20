import React from 'react'

export default function TypeTag({ type, isFilter, className }){
    const typeStyles = {
        background:
            type === "simple" ? "#E17654"
            : type === "rugged" ? "#115E59"
            : "#161616", //type is Luxury
        color: "#FFEAD0"
    }

    const filterStyle = {
        background: "#FFEAD0",
        color: "#4D4D4D"
    }

    return (
        <button className={`type-tag ${className}`} style={isFilter ? filterStyle : typeStyles}>
            { type }
        </button>
    )
}
