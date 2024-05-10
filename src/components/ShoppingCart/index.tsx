import styles from './ShoppingCart.module.scss';
import { ShoppingCartItem } from './ShoppingCartItem';

const { shoppingCart, shoppingCartText, shoppingCartButton } = styles;

export const ShoppingCart = () => {
    return (
        <div className={shoppingCart}>
            <h2 className={shoppingCartText}>Carrinho<br /> de compras</h2>
            <button className={shoppingCartButton}>X</button>
            <ShoppingCartItem />
        </div>
    )
}