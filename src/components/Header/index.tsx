import styles from './Header.module.scss';

const { header, logo, logoText, cartButton, cartImg } = styles;

export const Header = () => {
    return (
        <header className={header}>
            <div>
                <h1 className={logo}>MKS
                    <span className={logoText}>
                        Sistemas
                    </span>
                </h1>
            </div>
            <div>
                <button className={cartButton}>
                    <img className={cartImg} src="./src/assets/Vector.png" alt="Carrinho de compras" />
                    0
                </button>
            </div>
        </header>
    )
}
