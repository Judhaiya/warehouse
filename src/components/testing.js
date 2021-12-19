import React from 'react'
import { useParams } from 'react-router'
import Details from './Details'
import { Warehouse } from './warehouse'
export default function  Testing() {
    const {name} = useParams()
    return (
        <div>
            <p>{name}</p>
            {console.log(Warehouse.filter(each=>each.name===name))}
            {Warehouse.filter(each=>each.name===name).map(
               each=>(
                   <Details each={each} />
               )
            )}
        </div>
    )
}
