import styles from "./DiamondSkeleton.module.scss";

const DiamondSkeleton = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles.image} />
            <div className={styles.content}>
                <div className={styles.grid}>
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="space-y-2">
                            <div className={styles.line} style={{ width: '3rem' }} />
                            <div className={styles.block} style={{ width: '4rem' }} />
                        </div>
                    ))}
                </div>
                <div className={styles.block} style={{ width: '8rem' }} />
                <div className={styles.block} style={{ width: '6rem', height: '2rem' }} />
                <div className={styles.button} />
            </div>
        </div>
    );
};

export default DiamondSkeleton;
