import styles from './ProductCard.module.scss';
import { useFetch } from '../../../http/request';
import { IProduct } from '../../../interface/IProducts';

const { productInfo, productCard, productImg, productPriceBox, productName, productPrice, productDescription, productCardButton, productButtonImg } = styles;

export const ProductCard = () => {

    const { data } = useFetch<IProduct[]>('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');


    return (
        <>
            {data?.products.map(item => {
                const { id, photo, name, price, description } = item;

                return (
                    <div className={productCard} key={id} >
                        <div className={productInfo}>

                            <img className={productImg} src={photo} />
                            <div className={productPriceBox}>
                                <h2 className={productName}>{name}</h2>
                                <p className={productPrice}>{price}</p>
                            </div>
                            <p className={productDescription}>{description}</p>
                        </div>
                        <button className={productCardButton}>
                            <img className={productButtonImg} src="../../src/assets/shopping-bag.png" alt="Botão comprar" />
                            Comprar
                        </button>
                    </div>
                )
            })
            }
        </>
    )
}