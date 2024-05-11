import styles from './ShoppingCartItem.module.scss';

const { shoppingCartItem, shoppingCartItemName, itemsQuantity, quantity, shoppingCartItemButton } = styles;

export const ShoppingCartItem = () => {

    return (
        <>
            <div className={shoppingCartItem}>
                <img src="https://placehold.co/50x60" alt="Imagem do produto no carrinho de compras" />
                <h2 className={shoppingCartItemName}>TESTE</h2>
                <div className={itemsQuantity}>
                    <span>Qtd:</span>
                    <div className={quantity}>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                </div>
                <span>R$Preço</span>
                <button className={shoppingCartItemButton}>X</button>
            </div>
        </>
    )
}