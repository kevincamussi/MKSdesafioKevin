import styles from './ShoppingCart.module.scss';
import { ShoppingCartItem } from './ShoppingCartItem';

const { shoppingCart, shoppingCartButton } = styles;

export const ShoppingCart = () => {
    return (
        <div className={shoppingCart}>
            <h2>Carrinho de compras</h2>
            <button className={shoppingCartButton}>X</button>
            <ShoppingCartItem />
        </div>
    )
}