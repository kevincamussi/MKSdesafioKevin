import styles from './Skeleton.module.scss';

type Props = {
    width: number | string,
    height: number | string,
    borderRadius?: number,
}

export const Skeleton = ({ width, height, borderRadius }: Props) => {
    return (
        <div className={styles.cardSkeleton} style={{ width, height, borderRadius }}>

        </div>
    )
}