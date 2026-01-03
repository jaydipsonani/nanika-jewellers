import { Link } from "react-router-dom";
import { Play, Diamond, Gem } from "lucide-react";
import styles from "./CategorySection.module.scss";

const categories = [
    // {
    //     title: "Video",
    //     description: "Watch our story",
    //     icon: Play,
    //     href: "#video-gallery",
    //     image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    // },
    {
        title: "Diamonds",
        description: "Natural & Lab Grown",
        icon: Diamond,
        href: "/diamonds",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80",
    },
    {
        title: "Jewellery",
        description: "Rings, Earrings & More",
        icon: Gem,
        href: "/jewellery",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    },
];

const CategorySection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subHeading}>
                        Our Collections
                    </span>
                    <h2 className={styles.heading}>
                        Explore Categories
                    </h2>
                </div>

                <div className={styles.grid}>
                    {categories.map((category, index) => {
                        const isHashLink = category.href.startsWith("#");
                        const cardContent = (
                            <>
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className={styles.bgImage}
                                    loading="lazy"
                                />
                                <div className={styles.overlay} />
                                <div className={styles.cardContent}>
                                    <div className={styles.contentWrapper}>
                                        <div className={styles.iconWrapper}>
                                            <category.icon />
                                        </div>
                                        <h3 className={styles.cardTitle}>
                                            {category.title}
                                        </h3>
                                        <p className={styles.cardDesc}>
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.hoverBorder} />
                            </>
                        );

                        const className = `${styles.categoryCard} animate-fade-in-up`;
                        const style = { animationDelay: `${index * 0.2}s` };

                        if (isHashLink) {
                            return (
                                <a
                                    key={category.title}
                                    href={category.href}
                                    className={className}
                                    style={style}
                                >
                                    {cardContent}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={category.title}
                                to={category.href}
                                className={className}
                                style={style}
                            >
                                {cardContent}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
