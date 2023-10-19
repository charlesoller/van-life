import React from 'react'

export default function TypeTag({ type, isFilter }){
    const typeStyles = {
        background:
            type === "simple" ? "#E17654"
            : type === "rugged" ? "#115E59"
            : "#161616", //type is Luxury
        color: "#FFEAD0",
        // height: "100%",
        // width: "100%",
        padding: "1em 2em"
    }

    const filterStyle = {
        background: "#FFEAD0",
        color: "#4D4D4D",
        padding: "1em 2em",
        fontWeight: "500"
    }

    return (
        <button className={`type-tag ${isFilter}`} style={isFilter ? filterStyle : typeStyles}>
            { type }
        </button>
    )
}
