import React,{useState} from 'react'


export default function Pagination({each}) {
    
   
    
    return(
        <div className='pagination' style={{marginTop:"1rem"}}>
      <p>{each.name}</p>
      <p>{each.space}</p>
      <p>{each.city}</p>
      <p>{each.space_available}</p>
      <p>{each.code}</p>
      <p>{each.type}</p>
        </div>
    )
    
  
}
