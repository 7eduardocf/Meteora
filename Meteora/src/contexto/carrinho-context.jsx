const { createContext } = require("react");

const CarrinhoContext = createContext()
const CarrinhoProvider = (children) =>{
    return(
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    )
}


export default CarrinhoProvider