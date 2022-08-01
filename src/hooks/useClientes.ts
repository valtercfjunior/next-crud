import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuFom from "./useTabelaOuForm";

export default function useClientes() {
	const repo: ClienteRepositorio = new ColecaoCliente();

	
	const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);
	const [clientes, setClientes] = useState<Cliente[]>([]);

	useEffect(obterTodos, []);

    const {exibirTabela, exibirFormulario, tabelaVisivel, formularioVisivel} = useTabelaOuFom()

	function obterTodos() {
		repo.obterTodos().then((clientes) => {
			setClientes(clientes);
			exibirTabela();
		});
	}

   

	function selecionarCLiente(cliente: Cliente) {
		setCliente(cliente);
		exibirFormulario();
	}
	async function excluirCLiente(cliente: Cliente) {
		await repo.excluir(cliente);
		obterTodos();
	}

	async function salvarCliente(cliente: Cliente) {
		await repo.salvar(cliente);
		obterTodos();
	}
	function novoCliente() {
		setCliente(Cliente.vazio());
		exibirFormulario()
	}

    return {
        cliente,
        clientes,
        salvarCliente,
        novoCliente,
        excluirCLiente,
        selecionarCLiente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}
