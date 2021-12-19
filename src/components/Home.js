
import React,{useState,useEffect} from "react";
import Dish from "./Dish";
import { useSelector} from "react-redux";
import Pagination from "./Pagination"
import { connect } from "react-redux";
import { useGlobalContext } from "../context";
import City from "./city";

import { Warehouse } from "./warehouse";
import {

  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

const Home=() =>{
  // const {value}=useGlobalContext()
    const [cluster, setCluster] = useState(false)
  const[dropDown,setDropDown]=useState(false)
  const[city,setCity]=useState(false)
  const[inputValue,setInputValue]=useState("")
  const[clusterValue,setClusterValue]=useState([])
  const[radioOne,setRadioOne]=useState(false)
  const[radioTwo,setRadioTwo]=useState(false)
  const[radioThree,setRadioThree]=useState(false)
  const[radioFour,setRadioFour]=useState(false)
  const[warehouseData,setWarehouseData]=useState([])
  const [activename,setActive]=useState("")
  const[cityDropDown,setCityDropDown]=useState(false)
  const[secondInput,setSecondInput]=useState("")
  const[secondSearch,setSecondSearch]=useState(false)
  const[secondWarehouse,setSecondWarehouse]=useState([])
  const [cityRadioOne,setCityRadioOne]=useState(false)
  const [cityRadioTwo,setCityRadioTwo]=useState(false)
  const [cityRadioThree,setCityRadioThree]=useState(false)
  const [cityRadioFour,setCityRadioFour]=useState(false)
  const [cityRadioFive,setCityRadioFive]=useState(false)
  const [cityRadioSix,setCityRadioSix]=useState(false)
  const[cityActive,setCityActive]=useState("")
  const[wareHouseCity,setWareHouseCity]=useState([])
  
  useEffect(
    ()=>{
    if(city){
      setCityDropDown(true)
      setDropDown(false)
      
    }
    else{
     setCityDropDown(false)
    
    }
    },[city]
  )
  useEffect(
   ()=>{
   if(cluster){
     setDropDown(true)
    
   }
   else{
    setDropDown(false)
   
   }
   },[cluster]
 )
  useEffect(
    ()=>{
    
    setWarehouseData(Warehouse)
    //  console.log("warehouse",warehouseData)
    // mapStateToProps()
    },
    []
  )
   
  const handleDropdown=(e)=>{
   setDropDown(false)
 }
 const handleSecondInput=(e)=>{
   setSecondInput(e.target.value)
 }
   const handleCluster=()=>{
     setCluster(!cluster)
   }
   const handleCity=()=>{
     setCity(!city)
   }
  const handleActive=(value)=>{
   // if(value=="cluster-a-1"){
     
   //   const data=warehouseData.filter(each=>each.cluster==="cluster-a-1")
   
   //   setClusterValue(warehouseData.filter(each=>each.cluster==="cluster-a-1"))
   //   console.log(clusterValue)
   // }
   // if(value=="cluster-a-32"){
     
   //   const data=warehouseData.filter(each=>each.cluster==="cluster-a-32")
   
   //   setClusterValue(warehouseData.filter(each=>each.cluster==="cluster-a-32"))
   //   console.log(clusterValue)
   // }\
 console.log("active function")
   switch (value) {
     case "cluster-a-2":
       setClusterValue(warehouseData.filter(each=>each.cluster==="cluster-a-2"))
       break;
   case "cluster-a-32":
     setClusterValue(warehouseData.filter(each=>each.cluster==="cluster-a-32"))
     break
     case "cluster-v-2":
       setClusterValue(warehouseData.filter(each=>each.cluster==="cluster-v-2"))
       break
       case "cluster-a-21":
         setClusterValue(warehouseData.filter(each=>each.cluster==="cluster-a-21"))
         break
     default:
       break;
   }
  }
   const handleRadioOne=(e)=>{
   
     
    setRadioOne(!radioOne)
    setActive("cluster-a-2")
   
   }
   const handleRadioTwo=(e)=>{
   
   
    setRadioTwo(!radioTwo)
    setActive("cluster-a-32")
   
  
   
   }
   const handleRadioThree=()=>{
   
    setRadioThree(!radioThree)
    setActive("cluster-a-21")
  
   
   }
   const handleRadioFour=()=>{
   
     setRadioFour(!radioFour)
     setActive("cluster-v-2")
   
    
    }
    const holdActiveName=()=>{
     switch (activename) {
       case "cluster-a-2":
         handleActive("cluster-a-2")
         break;
         case "cluster-a-32":
           handleActive("cluster-a-32")
           break;
           case "cluster-a-21":
           handleActive("cluster-a-21")
           break;
           case "cluster-v-2":
           handleActive("cluster-v-2")
           break;
       default:
         break;
     }
    }
    // const handleCityClick=(value)=>{
    //  switch(value){
    //    case"chennai":
    //    setCityRadioOne(!cityRadioOne)
    //    break;
      
    //    case"Dehi":
    //    setCityRadioOne(!cityRadioTwo)
    //    break;
    //    case"Banglore":
    //    setCityRadioOne(!cityRadioThree)
    //    break;
    //    case"Mumbai":
    //    setCityRadioOne(!cityRadioThree)
    //    break;
    //    case"Guwahati":
    //    setCityRadioOne(!cityRadioFour)
    //    break;
    //  }
    // }
    const handleCityActive=(value)=>{
      switch(cityActive){
        case "Indore":
          console.log(value)
          setWareHouseCity((warehouseData.filter(each=>each.city==="Indore")))
          console.log(wareHouseCity,"wc")
        break;
        case "chennai":
          console.log(value)
          setWareHouseCity((warehouseData.filter(each=>each.city==="Chennai")))
          console.log(wareHouseCity,"w2")
          break;
          case "Delhi":
          console.log(value)
          setWareHouseCity((warehouseData.filter(each=>each.city==="Delhi")))
          console.log(wareHouseCity,"w8")
          break;
          case "Mumbai":
            console.log(value)
            setWareHouseCity((warehouseData.filter(each=>each.city==="Mumbai")))
            console.log(wareHouseCity,"w9")
            break;
            case "Banglore":
            console.log(value)
            setWareHouseCity((warehouseData.filter(each=>each.city==="Bangalore")))
            console.log(wareHouseCity,"w10")
            break;
            
            case "Guwahati":
            console.log(value)
            setWareHouseCity((warehouseData.filter(each=>each.city==="Guwahati")))
            console.log(wareHouseCity,"w11")
            break;
      default:
        break;
    }
  }
    const holdCityActive=()=>{
      switch(cityActive){
        case "Indore":
        console.log(cityActive)
        handleCityActive("Indore")
        break;
        case "chennai":
          console.log(cityActive)
          
          handleCityActive("chennai")
          break;
          case "Delhi":
            console.log(cityActive)
          handleCityActive("Delhi")
          break;
          case "Mumbai":
            console.log(cityActive)
            handleCityActive("Mumbai")
            break;
            case "Banglore":
              console.log(cityActive)
            handleCityActive("Banglore")
            break;
            
            case "Guwahati":
              console.log(cityActive)
            handleCityActive("Guwahati")
            break;
      default:
        break;
      }
    }
    
    const handleCityClick=(e)=>{
    console.log(e.target.value)
    switch (e.target.value) {
      case "Indore":
        console.log("chennaite")
        setCityRadioOne(!cityRadioOne)
        
        setCityActive("Indore")
        break;
        case "chennai":
          console.log("chennaite")
          setCityRadioTwo(!cityRadioTwo)
          setCityActive("chennai")
          break;
          case "Delhi":
          console.log("chennaite")
          setCityRadioThree(!cityRadioThree)
          setCityActive("Delhi")
          break;
          case "Mumbai":
            console.log("chennaite")
            setCityRadioFour(!cityRadioFour)
            setCityActive("Mumbai")
            break;
            case "Banglore":
            console.log("chennaite")
            setCityRadioFive(!cityRadioFive)
            setCityActive("Banglore")
            break;
            
            case "Guwahati":
            console.log("chennaite")
            setCityRadioSix(!cityRadioSix)
            setCityActive("Guwahati")
            break;
      default:
        break;
    }
    }
   const handleSearch=()=>{
    
    
   console.log(activename)
   setSecondSearch(false)
   if(cluster){
   holdActiveName()}
   if(city) {
     console.log("hello")
    holdCityActive()
   }
 }
 const handleDataName=()=>{
   console.log("it is running")
   setSecondSearch(true)
   console.log(secondInput)
   setSecondInput('')
  switch (secondInput) {
 
    case "Warehouse-3039":
     setSecondWarehouse(warehouseData.filter(warehouse=>warehouse.name==="Warehouse-3039"))
     console.log(secondWarehouse)
      break;
      case "Warehouse-276":
      setSecondWarehouse (warehouseData.filter(warehouse=>warehouse.name==="Warehouse-276"))
      console.log('come',secondWarehouse)
       break;
       case "Warehouse-324":
         setSecondWarehouse( warehouseData.filter(warehouse=>warehouse.name==="Warehouse-324"))
         console.log('come',secondWarehouse)
         break;
         case "Warehouse-5454":
           setSecondWarehouse(warehouseData.filter(warehouse=>warehouse.name==="Warehouse-5454"))
         break;
    default:
      break;
  }
 }

 return (
 <div className="main-app">
       
 <>

 <div className="search-area">
  <h3>Search warehouse by filter at ease</h3>
  <div className="filters">
    <div className="city">
  <input type="checkbox" defaultChecked={city} onChange={handleCity}/>
   <label htmlFor="">
   City
   </label>
   </div>

   {
     cityDropDown &&
     <ul>
       <li><input type="checkbox" value="Indore" defaultChecked={cityRadioOne} onChange={handleCityClick} /> Indore</li>
       <li><input type="checkbox" value="chennai"  defaultChecked={cityRadioTwo} onChange={handleCityClick} />chennai</li>
       <li><input type="checkbox" value="Delhi"  defaultChecked={cityRadioThree} onChange={handleCityClick}  />  Delhi</li>
       <li><input type="checkbox" value="Mumbai"  defaultChecked={cityRadioFour} onChange={handleCityClick}  />Mumbai</li>
       <li><input type="checkbox" value="Banglore" defaultChecked={cityRadioFive} onChange={handleCityClick}  />Banglore</li>
       <li><input type="checkbox" value="Guwahati" defaultChecked={cityRadioSix}  onChange={handleCityClick} />Guwahati</li>
     </ul>
   }
   {/* <div className="area">
   <input type="checkbox"  />
   <label htmlFor="">
    Available Area
   </label>
   </div> */}
   <div className="cluster">
   <input type="checkbox" onChange={handleCluster} defaultChecked={cluster}/>
   <label htmlFor="">
    Cluster
   </label>
   </div>
   {
     dropDown &&
     <>
     <div className="flex-cluster" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
     <ul>
       <li><input type="checkbox" value="cluster-a-2"  defaultChecked={radioOne} onChange={handleRadioOne} />cluster-a-2 </li>
       <li><input type="checkbox" value="cluster-a-32" defaultChecked={radioTwo} onChange={handleRadioTwo} />cluster-a-32</li>
       <li><input type="checkbox" value="cluster-a-21"defaultChecked={radioThree} onChange={handleRadioThree} />cluster-a-21</li>
       <li><input type="checkbox" value="cluster-v-2"defaultChecked={radioFour} onChange={handleRadioFour} />cluster-v-2</li>
      
     </ul>
     <button onClick={handleDropdown}>close</button>
     </div>
     </>
   }
   <button style={{backgroundColor:"#F5F5F5"}} onClick={handleSearch} type="submit">search</button>
   </div>
   {/* <p>{clusterValue}</p> */}
   {clusterValue && 
   clusterValue.map((clusterValue,i)=>(
     <Dish key={clusterValue.id} clusterValue={clusterValue}/>
   ))}
   {
   wareHouseCity &&
   wareHouseCity.map(
     (each,i)=>(
       <City key={i} each={each}/>
     )
   )
  }

 </div>
 <div className="get-warehouse-by-search">
   <h3 style={{margin:"0.5rem"}}>Search warehouse by name</h3>
   <div className="search-bar">
<input type="text" value={secondInput} onChange={handleSecondInput} />
<button onClick={handleDataName}>search</button>
</div>


 { secondWarehouse &&
 secondWarehouse.map(
    (each,i)=>(
    console.log(each),
    <Pagination key={i} each={each}/>)
  )}
 



</div>

  {/* {
   wareHouseCity &&
   wareHouseCity.map(
     (each,i)=>(
       <City key={i} each={each}/>
     )
   )
  } */}


 </>








</div>
 )
  
}

export default Home;