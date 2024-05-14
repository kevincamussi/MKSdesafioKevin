
import { IProps } from '../../interface/IProps';
import { ProductCard } from './ProductCard';
import styles from './ProductsList.module.scss';

const { products } = styles;

export const ProductsList = ({ handleClick }: IProps) => {

    return (
        <div className={products}>
            <ProductCard handleClick={handleClick} productsInCart={undefined} />
        </div>
    )
}