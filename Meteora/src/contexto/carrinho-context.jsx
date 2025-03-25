const { createContext, useState } = require("react");

export const CarrinhoContext = createContext()

const CarrinhoProvider = (children) =>{
    const [carrinho,setCarrinho] = useState([])
    return(
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}


export default CarrinhoProvider