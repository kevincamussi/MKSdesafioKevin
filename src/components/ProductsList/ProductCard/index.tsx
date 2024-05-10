import styles from './ProductCard.module.scss';

const { productInfo, productCard, productImg, productPriceBox, productName, productPrice, productDescription, productCardButton, productButtonImg } = styles;

export const ProductCard = () => {
    return (
        <>
            <div className={productCard}>
                <div className={productInfo}>
                    <img className={productImg} src="https://placehold.co/120x138" />
                    <div className={productPriceBox}>
                        <h2 className={productName}>Apple Watch Series 4 GPS</h2>
                        <p className={productPrice}>R$399</p>
                    </div>
                    <p className={productDescription}>Redesigned from scratch and completely revised.</p>
                </div>
                <button className={productCardButton}>
                    <img className={productButtonImg} src="../../src/assets/shopping-bag.png" alt="Botão comprar" />
                    Comprar
                </button>
            </div>
            <div className={productCard}>
                <div className={productInfo}>
                    <img className={productImg} src="https://placehold.co/120x138" />
                    <div className={productPriceBox}>
                        <h2 className={productName}>JBL Speaker</h2>
                        <p className={productPrice}>R$399</p>
                    </div>
                    <p className={productDescription}>Redesigned from scratch and completely revised.</p>
                </div>
                <button className={productCardButton}>
                    <img className={productButtonImg} src="../../src/assets/shopping-bag.png" alt="Botão comprar" />
                    Comprar
                </button>
            </div>
        </>
    )
}