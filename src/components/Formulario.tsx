import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    return(
        <div>
            {id ? (
            <Entrada 
            somenteLeitura
            texto="Código" 
            valor={id}
            className="mb-5" />
            ) : false}

            <Entrada 
            texto="Nome"  
            valor={nome}             
            valorMudou={setNome}
            className="mb-5" />

            <Entrada 
            texto="Idade" 
            tipo="number"  
            valor={idade} 
            valorMudou={setIdade} />

            <div className=" flex justify-end mt-3" >
                <Botao
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))  } cor="blue"
                className="mr-2 hover:bg-blue-400 hover:border-blue-400 border-blue-400 text-blue-400 " >
                    {id ? 'Alterar' : 'Salvar'}
                    </Botao>
                <Botao
                onClick={props.cancelado} cor="gray"
                className="mr-2 hover:bg-gray-400 hover:border-gray-400 border-gray-400 text-gray-400" >Cancelar</Botao>
            </div>

        </div>
    )
}