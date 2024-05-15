import styles from './ShoppingCart.module.scss';
import { ShoppingCartItem } from './ShoppingCartItem';
import { IProps } from '../../interface/IProps';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const { shoppingCart, shoppingCartText, shoppingCartButton, finishBuyButton, finishBuy, totalCartPrice, shoppingCartItem } = styles;


export const ShoppingCart = ({ handleClick, productsInCart, removeItem, addMoreItens, totalCart, deleteItem }: IProps) => {




    return (
        <>


            <div className={shoppingCart}>
                <h2 className={shoppingCartText}>Carrinho<br /> de compras</h2>
                <div className={shoppingCartItem}>
                    <button className={shoppingCartButton} onClick={handleClick}>X</button>
                    {
                        <ShoppingCartItem productsInCart={productsInCart} removeItem={removeItem} addMoreItens={addMoreItens} deleteItem={deleteItem} />
                        || <Skeleton />
                    }
                </div>
                <div className={totalCartPrice}>
                    <p>Total:</p>
                    R${totalCart}
                </div>
                <div className={finishBuy}>
                    <button className={finishBuyButton}>Finalizar compra</button>
                </div>
            </div >


        </>
    )
}