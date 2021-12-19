import React,{useState,useParams} from 'react'
import { Link } from 'react-router-dom'

export default function Dish({clusterValue}) {
   const [editOne,setEditOne]=useState(false)
   const[editTwo,setEditTwo]=useState(false)
   const[editThree,setEditThree]=useState(false)
   
   const[editValue,setEditValue]=useState(clusterValue.city)
   const[spaceValue,setSpaceValue]=useState(clusterValue.space_available)
   const[isLive,setIsLive]=useState(clusterValue.is_live)
   
   const changeEditOne=()=>{
      
        setEditOne(true)
      
   }
  const ChangeCityEdit=(e)=>{
    setEditValue(e.target.value)
  }
  const changeEditTwo=()=>{
      
    setEditTwo(true)
  
}
  const SaveCity=()=>{
    clusterValue.city=editValue
    setEditOne(false)
  }
  const ChangeSpaceEdit=(e)=>{
  setSpaceValue(e.target.value)
  }
  const SaveSpace=()=>{
    clusterValue.space_available=spaceValue
    setEditTwo(false)
  }
    return (
   <> 
   <div className='cluster-card'>
   <div style={{display:"flex",justifyContent:"space-between"}}>
    <p>{clusterValue.city}</p>
    {!editOne &&
    <button style={{marginLeft:"1rem"}}onClick={changeEditOne}>edit</button>
}
    {editOne &&
    (
       <div> 
           <input type="text" value={editValue} onChange={ChangeCityEdit}/>
           <button onClick={SaveCity}>save</button> 
         
       </div>
    )
    }
    </div>
    <p>{clusterValue.name}</p>
    <p>{clusterValue.cluster}</p>
    <div className="space-area" style={{display:"flex",justifyContent:"space-between"}} >
    <p style={{marginRight:"1rem"}}>{clusterValue.space_available}</p>
    {!editTwo &&
    <button onClick={changeEditTwo}>edit</button>
}
    
    
    </div>
    <p>{clusterValue.is_live}</p>
    
    {editTwo &&
    (
       <div> 
           <input type="text" value={spaceValue} onChange={ChangeSpaceEdit}/>
           <button onClick={SaveSpace}>save</button> 
           
       </div>
    )
    }
    <Link to={`/warehouse/${clusterValue.name}`}><button>Load more</button></Link>
    </div>
 
    </>
      
    )
}
