import Skeleton from "react-loading-skeleton";
import styles from './CardSkeleton.module.scss';

export const CardSkeleton = () => {
    return (
        <div className={styles.cardSkeleton}>
            <Skeleton />
        </div>
    )
}