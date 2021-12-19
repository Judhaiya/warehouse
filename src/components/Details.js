import React from 'react'

export default function Details({each}) {
    return (
        <div className='Details'>
            <div className="flex-center">
         
         <div className="flex-wrapper">
         <h3>{each.name}</h3>
        <div className="main-details">
         <p>{each.city}</p>
         <p>{each.space_available}</p>
         <p>{each.code}</p>
          <p>{each.type}</p>
          </div>
          </div>
            </div>
        </div>
    )
}
