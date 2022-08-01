interface BotaoProps {
	cor?: any;
	children: any;
	className?: string
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
	const cor = props.cor ?? "gray";
	return (
		<button
        onClick={props.onClick}
		className={`
        bg-white
        text-${cor}-500 
        hover:bg-${cor}-400 
        hover:text-white        
        border-2 
        border-${cor}-400        
        rounded-full p-2 m-2 ${props.className} `}
		>
			{props.children}
		</button>
	);
}
