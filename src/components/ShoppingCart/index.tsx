import styles from './ShoppingCart.module.scss';
import { ShoppingCartItem } from './ShoppingCartItem';
import { IProps } from '../../interface/IProps';
import { motion } from 'framer-motion';

const { shoppingCart, shoppingCartText, shoppingCartButton, finishBuyButton, finishBuy, totalCartPrice, shoppingCartItem } = styles;


export const ShoppingCart = ({ handleClick, productsInCart, removeItem, addMoreItens, totalCart, deleteItem }: IProps) => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    return (
        <>

            <motion.div className={shoppingCart}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <h2 className={shoppingCartText}>Carrinho<br /> de compras</h2>
                <div className={shoppingCartItem}>
                    <button className={shoppingCartButton} onClick={handleClick}>X</button>

                    {
                        <ShoppingCartItem productsInCart={productsInCart} removeItem={removeItem} addMoreItens={addMoreItens} deleteItem={deleteItem} />
                    }
                </div>
                <div className={totalCartPrice}>
                    <p>Total:</p>
                    R${totalCart}
                </div>
                <div className={finishBuy}>
                    <button className={finishBuyButton}>Finalizar compra</button>
                </div>
            </motion.div>

        </>
    )
}