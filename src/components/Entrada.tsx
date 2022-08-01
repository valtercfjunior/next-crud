interface EntradaProps {
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    className?: string
    somenteLeitura?: boolean    
    valorMudou?: (valor: any) => void
    
    

}

export default function Entrada(props: EntradaProps) {
   
    return(
        <div className={`flex flex-col ${props.className} `}>
            <label
            className="mb-2" htmlFor="">{props.texto}</label>
            <input
            onChange={(e) => props.valorMudou?.(e.target.value)}
            className={`border border-cyan-300 rounded-lg bg-blue-50 focus:outline-none p-1 ${props.somenteLeitura ? '' : 'focus:bg-white'} `} 
            type={props.tipo ?? 'text'} value={props.valor}  readOnly={props.somenteLeitura}/>

        </div>
    )
}