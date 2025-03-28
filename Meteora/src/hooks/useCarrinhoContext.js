import { CarrinhoContext } from "../contexto/carrinho-context"
import { useContext } from "react"


const useCarrinhoContext = () =>{
    const {carrinho, setCarrinho} = useContext(CarrinhoContext)

    function mudarQuantidade({id, quantidade}){
        carrinho.map((itemDoCarrinho) =>{
            if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade
            return itemDoCarrinho
        })
    }

    function adicionarProduto(novoProduto){
        const temOProduto = carrinho.some((itemDoCarrinho)=> {
            return itemDoCarrinho.id === novoProduto.id
        })

        if(!temOProduto){
            novoProduto.quantidade = 1
            return setCarrinho((carrinhoAnterior) =>[
                ...carrinhoAnterior, novoProduto
            ])
        }

        const carrinhoAtualizado = mudarQuantidade(novoProduto.id,1)
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