"use client"
import DDDTable from "@/app/components/DDDTable"
import { useEffect, useState } from "react"

export default function CidadeDDDPage( {params : {ddd} } ) {
    console.log(ddd)
    const [error, setError] = useState<any>(null)
    const [data, setData] = useState<any>(null)

    const fetching = async () =>{
            try {
                const res = await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
                if (res.type == "cors") {
                    setError("cors")
                    return 
                }
                else if(res.status == 200){
                    console.log(res)
                    const response = res.json()
                    setData(response)
                    setError(null)
                } else if(res.status == 404){
                    setError("DDD não encontrado")
                    setData(null)
                } else if(res.status == 500){
                    setError("Todos os serviços de DDD retornaram erro!")
                    setData(null)
                }
            } catch (error) {
                setError(error)
                setData(null)
            }
    }
    
    fetching()
    
    console.log(data)
    return (
        <div>
            <DDDTable DDD={data}/>
        </div>
        
    )
    
}
