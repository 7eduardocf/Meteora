const { createContext } = require("react");

const CarrinhoContext = createContext()
const CarrinhoProvide = (children) =>{
    return(
        <CarrinhoContext.Provider>
            
        </CarrinhoContext.Provider>
    )
}


export default CarrinhoContext