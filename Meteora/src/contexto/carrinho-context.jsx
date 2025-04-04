import { createContext, useState } from "react"

const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"

const CarrinhoProvider = ({children}) =>{
    const [carrinho,setCarrinho] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)
    return(
        <CarrinhoContext.Provider value={{carrinho,setCarrinho,quantidade,setQuantidade,valorTotal,setValorTotal}}>
            {children}
        </CarrinhoContext.Provider>
    )
}
export default CarrinhoProvider
export {CarrinhoContext}