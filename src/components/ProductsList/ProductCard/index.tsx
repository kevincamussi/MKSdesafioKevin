import styles from './ProductCard.module.scss';
import { useFetch } from '../../../http/request';
import { IProduct } from '../../../interface/IProducts';
import { IProps } from '../../../interface/IProps';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';

const { productInfo, productCard, productImg, productPriceBox, productName, productPrice, productDescription, productCardButton, productButtonImg } = styles;

export const ProductCard = ({ handleClick }: IProps) => {

    const { data } = useFetch<IProduct[]>('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(false);

    }, [data])

    return (
        <>
            {/* setIsLoading(false); */}
            {data?.products.map(item => {
                const { id, photo, name, price, description } = item;
                return (
                    <div className={productCard} key={id} >
                        {isLoading && <Skeleton count={3} />}
                        <div className={productInfo}>
                            <img className={productImg} src={photo} />
                            <div className={productPriceBox}>
                                <h2 className={productName}>{name}</h2>
                                <p className={productPrice}>{price}</p>
                            </div>
                            <p className={productDescription}>{description}</p>
                        </div>
                        <button className={productCardButton} onClick={() => handleClick({ id: id, name: name, price: price, photo: photo, quantity: +1 })}>
                            <img className={productButtonImg} src="../../src/assets/shopping-bag.png" alt="Botão comprar" />
                            Comprar
                        </button>
                    </div >
                )
            })
            }
        </>
    )
}