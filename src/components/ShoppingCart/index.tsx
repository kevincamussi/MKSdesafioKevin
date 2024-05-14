import styles from './ShoppingCart.module.scss';
import { ShoppingCartItem } from './ShoppingCartItem';
import { IProps } from '../../interface/IProps';

const { shoppingCart, shoppingCartText, shoppingCartButton, finishBuy, finishBuyButton, totalCartPrice } = styles;


export const ShoppingCart = ({ handleClick, productsInCart, removeItem, addMoreItens, totalCart, deleteItem }: IProps) => {

    return (
        <div className={shoppingCart}>
            <h2 className={shoppingCartText}>Carrinho<br /> de compras</h2>
            <button className={shoppingCartButton} onClick={handleClick}>X</button>
            {productsInCart &&
                <ShoppingCartItem productsInCart={productsInCart} removeItem={removeItem} addMoreItens={addMoreItens} deleteItem={deleteItem} />
            }
            <div className={totalCartPrice}>
                <p>Total:</p>
                R${totalCart}
            </div>
            <div className={finishBuy}>
                <button className={finishBuyButton}>Finalizar compra</button>
            </div>
        </div>
    )
}