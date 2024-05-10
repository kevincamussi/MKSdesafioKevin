import { ProductCard } from './ProductCard';
import styles from './ProductsList.module.scss';

const { products } = styles;

export const ProductsList = () => {
    return (
        <div className={products}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}