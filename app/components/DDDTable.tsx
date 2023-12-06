interface DDD {
    DDD : {
        state : string,
        cities: Array<string>
    }
    
}

export default function DDDTable({DDD} : DDD) {

    console.log(DDD)
    if(DDD == null){
        return(
            <div>DDD é nulo, erro request</div>
        )
    } else if(DDD.type == "cors"){
        return(
            <div>
                <h1>ERRO! Servidor entendeu suas request como ataque!</h1>
            </div>
        )
    } else if(DDD == null){
        console.log(DDD)
        return (
        <div>
            <h1 className="text-black font-bold text-center">Erro</h1>
        </div>
    )
    }
}