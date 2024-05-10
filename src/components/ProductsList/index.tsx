import styles from './ProductsList.module.scss';

const { products, productsContainer, productCard, productImg, productName, productPrice, productDescription, productCardButton } = styles;

export const ProductsList = () => {
    return (
        <div className={products}>
            <div className={productCard}>
                <div className={productsContainer}>
                    <img className={productImg} src="https://placehold.co/120x138" />
                    <h2 className={productName}>Apple Watch Series 4 GPS</h2>
                    <p className={productPrice}>R$399</p>
                    <p className={productDescription}>Redesigned from scratch and completely revised.</p>
                </div>
                <button className={productCardButton}>Comprar</button>
            </div>
            <div className={productCard}>
                <img src="https://placehold.co/120x138" />
            </div>
            <div className={productCard}>
                <img src="https://placehold.co/120x138" />
            </div>
            <div className={productCard}>
                <img src="https://placehold.co/120x138" />
            </div>
            <div className={productCard}>
                <img src="https://placehold.co/120x138" />
            </div>
        </div>
    )
}