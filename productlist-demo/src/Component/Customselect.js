import React,{useContext} from 'react'
import Select from 'react-select'
import { Bar } from "../App";
import "../App.css";
const Customselect = () => {
    const {  alldata } =
    useContext(Bar);
    console.log(`alldataqqqqq`, alldata)
    console.log(`alldataqqqqq`, alldata)
    // const defaultOption = alldata[0];
  const onSelect=(e)=> {
  const {name,value} = e.target
   
    const data1 = alldata.filter((val) => val.product === name);
    console.log(`data1`, data1)
      }
      
    return (
    
        <div className="p-2 border-solid border-2 border-white-150 rounded ..." >
            <Select  options={alldata} onChange={(e)=>onSelect(e)}  /> 
        </div>
    )
}

export default Customselect
  