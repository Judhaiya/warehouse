import React from 'react'

export default function City({each}) {
    return (
        <div className='city' style={{display:"flex"}}>
            <div className="city-wrapper">
            <p>Name of warehouse is {each.name}</p>
            <p>Space availability of warehouse is {each.space_available}</p>
            <p>Warehouse code would be {each.code}</p>
            <p>It is located in {each.city}</p>
            </div>
        </div>
    )
}
