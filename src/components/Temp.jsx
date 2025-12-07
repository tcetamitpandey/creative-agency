import { useState } from "react"


export default function Temp({placeholdertext}){

    const [state , stateFun]= useState(placeholdertext)
    return (
        <>
        <div style={{height:'50vh',width:'100vw',textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center'}} >
           {state}
           
        </div>
        
        </>
    )
}