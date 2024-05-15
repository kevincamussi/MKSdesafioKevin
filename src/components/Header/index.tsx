import styles from './Header.module.scss';
import { IProps } from '../../interface/IProps';


const { header, logo, logoText, cartButton, cartImg } = styles;

export const Header = ({ handleClick, totalQuantity }: IProps) => {

    return (

        <>
            < header className={header} >
                <div>
                    {<h1 className={logo}   >MKS
                        <span className={logoText}>
                            Sistemas
                        </span>
                    </h1>}
                </div>
                <div>
                    <button className={cartButton} onClick={handleClick}  >
                        <img className={cartImg} src="./src/assets/Vector.png" alt="Carrinho de compras" />
                        {totalQuantity}
                    </button>
                </div>
            </header >
        </>


    )
}
