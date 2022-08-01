export default function Titulo(props){
    return(
        <div className="flex flex-col justify-center" >
            <h1 className="px-5 py-2 text-3xl font-700  text-[#4e52c2] " >
                {props.children}
            </h1>
            <hr className="border-2 border-cyan-200" />
        </div>
    )
}