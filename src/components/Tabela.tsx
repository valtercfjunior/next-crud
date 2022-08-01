import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
	clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

	function renderizarCabecalho() {
		return (
			<tr>
				<th className="text-left p-4" >Código</th>
				<th className="text-left p-4" >Nome</th>
				<th className="text-left p-4" >Idade</th>
				{exibirAcoes ? <th className=" p-4" >Ações</th> : false }  
			</tr>
		);
	}

	function renderizarDados() {
		return props.clientes?.map((cliente, i) => {
			return (
				<tr key={cliente.id}
                className={`${i  % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
					<td className="text-left p-4" >{cliente.id}</td>
					<td className="text-left p-4" >{cliente.nome}</td>
					<td className="text-left p-4" >{cliente.idade}</td>
					{exibirAcoes ? renderizarAcoes(cliente) : false}
				</tr>
			);
		});
	}

    function renderizarAcoes(cliente: Cliente) {
        return(
            <td className="flex justify-center " >
                {props.clienteSelecionado ? (<button onClick={() => props.clienteSelecionado?.(cliente)} className="flex justify-center items-center p-2 m-1 rounded-full text-zinc-400 hover:text-green-600 hover:bg-white " >{IconeEdicao}</button>) : false}
                {props.clienteExcluido ? (<button onClick={() => props.clienteExcluido?.(cliente)} className="flex justify-center items-center p-2 m-1 rounded-full text-zinc-400  hover:text-red-600 hover:bg-white">{IconeLixo}</button>) : false}
                
                
            </td>
        )
    }

	return (
		<table className="w-full rounded-xl overflow-hidden" >
			<thead className={`
                bg-gradient-to-r from-cyan-500 to-blue-400 text-gray-100 
            `}>
                {renderizarCabecalho()}</thead>
			<tbody>{renderizarDados()}</tbody>
		</table>
	);
}
