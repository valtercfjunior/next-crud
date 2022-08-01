import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";
import useTabelaOuFom from "../hooks/useTabelaOuForm";

export default function Home(){

	const {novoCliente,
		 selecionarCLiente,
		 excluirCLiente,
	     salvarCliente,
		 cliente,
		 clientes,
		 tabelaVisivel,
		 exibirTabela } = useClientes()

	

	return (
		<div
			className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-cyan-400 to-blue-500 
    font-bold font-myfont
    `}
		>
			<Layout titulo="Cadastro Simples">
				{tabelaVisivel ? (
					<>
						<div className="flex justify-end">
							<Botao onClick={novoCliente} cor="green" className="hover:bg-green-500 hover:border-green-500 border-green-500 text-green-600" >
								Adicionar
							</Botao>
						</div>
						<Tabela
							clientes={clientes}
							clienteSelecionado={selecionarCLiente}
							clienteExcluido={excluirCLiente}
						></Tabela>
					</>
				) : (
					<Formulario
						cliente={cliente}
						cancelado={exibirTabela}
						clienteMudou={salvarCliente}
					/>
				)}
			</Layout>
		</div>
	);
}
