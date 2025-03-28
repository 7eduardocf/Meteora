import { CarrinhoContext } from "../contexto/carrinho-context"
import { useContext } from "react"


const useCarrinhoContext = () =>{
    const {carrinho, setCarrinho} = useContext(CarrinhoContext)

    function mudarQuantidade({id, quantidade}){
        return carrinho.map((itemDoCarrinho) =>{
            if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade
            return itemDoCarrinho
        })
    }

    function adicionarProduto(novoProduto){
        
        const carrinhoAtualizado = mudarQuantidade({ id: novoProduto.id, quantidade: 1 })
        const temOProduto = carrinho.some((itemDoCarrinho)=> 
            itemDoCarrinho.id === novoProduto.id
        )

        if(!temOProduto){
            novoProduto.quantidade = 1
            return setCarrinho((carrinhoAnterior) =>[
                ...carrinhoAnterior, novoProduto
            ])
        }

        setCarrinho([...carrinhoAtualizado])
    }

    function removerProduto(id){

        const carrinhoAtualizado = mudarQuantidade(id, -1)

        const produto = carrinho.find((item) => item.id === id)
        const ehOUltimo = produto.quantidade === 1;
        if(ehOUltimo){
            return setCarrinho((carrinhoAnterior) =>
                carrinhoAnterior.filter((itemDoCarrinho) =>itemDoCarrinho.id !== id)
            )
        }
        setCarrinho([...carrinhoAtualizado])
    }
    return {
        carrinho,setCarrinho,adicionarProduto,removerProduto
    }
}
export default useCarrinhoContext