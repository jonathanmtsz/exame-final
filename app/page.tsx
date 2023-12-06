"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function Home() {
  const router = useRouter()
  const [ddd, setDDD] = useState(0)

  const handleSubmit = (e : FormEvent) =>{
    e.preventDefault()
    console.log(ddd)
    router.push(`/cidades/${ddd.toString()}`)
  }

  return (
    <div>
        <h1 className="text-center p-2">Lista de DDD</h1>
        <div>
          <form onSubmit={handleSubmit} className="text-center">
            <input type="text" placeholder="insira o DDD" onChange={(e) => (setDDD(Number(e.target.value)))}/>
            <input type="submit"></input>
          </form>
        </div>
    </div>
  )
}
