import styles from './ProductCard.module.scss';
import { IProps } from '../../../interface/IProps';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const { productInfo, productCard, productImg, productPriceBox, productName, productPrice, productDescription, productCardButton, productButtonImg } = styles;

export const ProductCard = ({ handleClick }: IProps) => {

    const { data } = useQuery({
        queryKey: ["cat"],
        queryFn: async () => {
            const res = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
            return res.data;
        },
    });


    const itemMotion = {
        hidden: { opacity: 0, x: 0 },
        visible: {
            X: 1,
            opacity: 1,
        }
    }
    return (
        <>
            {data?.products.map((item: { id: any; photo: any; name: any; price: any; description: any; }) => {
                const { id, photo, name, price, description } = item;

                return (
                    <motion.div
                        className={productCard}
                        key={id}
                        variants={itemMotion}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 0.6, type: "Inertia" }}
                    >
                        <div className={productInfo}>
                            <img className={productImg} src={photo} />
                            <div className={productPriceBox}>
                                <h2 className={productName}>{name}</h2>
                                <p className={productPrice}>{price}</p>
                            </div>
                            <p className={productDescription}>{description}</p>
                        </div>
                        <motion.button
                        />
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={productCardButton} onClick={() => handleClick({ id: id, name: name, price: price, photo: photo, quantity: +1 })}>
                            <svg className={productButtonImg} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.737212" fill-rule="evenodd" clip-rule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.737212" d="M1 4.375H13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Comprar
                        </motion.button>
                    </motion.div>
                )
            })
            }
        </>
    )

}
