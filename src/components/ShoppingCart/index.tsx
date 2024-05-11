import styles from './ShoppingCart.module.scss';
import { ShoppingCartItem } from './ShoppingCartItem';
import { IProps } from '../../interface/IProps';

const { shoppingCart, shoppingCartText, shoppingCartButton } = styles;

export const ShoppingCart = ({ handleClick }: IProps) => {

    return (
        <div className={shoppingCart}>
            <h2 className={shoppingCartText}>Carrinho<br /> de compras</h2>
            <button className={shoppingCartButton} onClick={handleClick}>X</button>
            <ShoppingCartItem />
        </div>
    )
}