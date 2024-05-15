import styles from './ShoppingCartItem.module.scss';
import { IProps } from '../../../interface/IProps';
import { motion } from 'framer-motion';

const { shoppingCartItem, shoppingCartItemName, itemsQuantity, shoppingCartPrice, shoppingCartImg, shoppingCartItemButton, minusButton, plusButton, itemQuantity, quantityBox } = styles;

export const ShoppingCartItem = ({ productsInCart, removeItem, addMoreItens, deleteItem }: IProps) => {

    const itemMotion = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7 }
        }
    }

    return (
        <>
            {productsInCart.map((item: any) => {

                const { id, name, photo, price, quantity } = item;

                {
                    if (quantity != 0) {
                        return (
                            <motion.div className={shoppingCartItem}
                                variants={itemMotion}
                                initial='hidden'
                                animate='visible'

                                key={id}
                            >
                                <img className={shoppingCartImg} src={photo} alt="Imagem do produto no carrinho de compras" />
                                <h2 className={shoppingCartItemName}>{name}</h2>
                                <div className={itemsQuantity}>
                                    <span>Qtd:</span>
                                    <div className={quantityBox}>
                                        <button className={minusButton} onClick={() => removeItem({ id: item.id })} >-</button>
                                        <span className={itemQuantity}>{quantity}</span>
                                        <button className={plusButton} onClick={() => addMoreItens({ id: item.id })}>+</button>
                                    </div>
                                </div>
                                <span className={shoppingCartPrice}>R${price * quantity}</span>
                                <button className={shoppingCartItemButton} onClick={() => deleteItem({ id: item.id, quantity: item.quantity -= item.quantity })}>X</button>
                            </motion.div>
                        )
                    }
                }
            })}
        </>
    )
}