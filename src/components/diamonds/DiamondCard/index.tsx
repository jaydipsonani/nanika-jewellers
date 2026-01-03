import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Clock, ShoppingBag, Gem, Scale, Sparkles, Droplets } from "lucide-react";
import OrderModal from "@/components/order/OrderModal";
import styles from "./DiamondCard.module.scss";

interface Diamond {
    id: string;
    image: string;
    carat: number;
    color: string;
    clarity: string;
    cut: string;
    type: string;
    price: number;
}

interface DiamondCardProps {
    diamond: Diamond;
}

const DiamondCard = ({ diamond }: DiamondCardProps) => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    // Construct title and description for display consistency
    const title = `${diamond.carat} Carat ${diamond.cut} Diamond`;
    const description = `${diamond.type} • ${diamond.color} Color • ${diamond.clarity} Clarity`;

    return (
        <>
            <div className={styles.card}>
                {/* Image */}
                <div className={styles.imageWrapper}>
                    <img
                        src={diamond.image}
                        alt={title}
                        className={styles.image}
                        loading="lazy"
                    />
                    <div className={styles.badge}>
                        <span>{diamond.type}</span>
                    </div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        {title}
                    </h3>
                    <p className={styles.description}>
                        {description}
                    </p>

                    {/* Quick Specs Grid (Mimicking JewelleryCard) */}
                    <div className={styles.specsGrid}>
                        <div className={styles.specItem}>
                            <Scale />
                            <span>{diamond.carat} ct</span>
                        </div>
                        <div className={styles.specItem}>
                            <Gem />
                            <span>{diamond.cut}</span>
                        </div>
                        <div className={styles.specItem}>
                            <Droplets />
                            <span>{diamond.color}</span>
                        </div>
                        <div className={styles.specItem}>
                            <Sparkles />
                            <span>{diamond.clarity}</span>
                        </div>
                    </div>

                    {/* Detailed Grid (Optional detailed view, styled like tab content) */}
                    <div className={styles.detailsGrid}>
                        <div className={styles.detailItem}>
                            <span className={styles.label}>Weight</span>
                            <span className={styles.value}>{diamond.carat} ct</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.label}>Cut</span>
                            <span className={styles.value}>{diamond.cut}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.label}>Color</span>
                            <span className={styles.value}>{diamond.color}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.label}>Clarity</span>
                            <span className={styles.value}>{diamond.clarity}</span>
                        </div>
                    </div>

                    <div className={styles.delivery}>
                        <Clock />
                        <span>Get it within 5 days</span>
                    </div>

                    <div className={styles.pricing}>
                        <span className={styles.price}>
                            ₹{diamond.price.toLocaleString()}
                        </span>
                    </div>

                    <Button
                        variant="gold"
                        className={styles.actionButton}
                        onClick={() => setIsOrderModalOpen(true)}
                    >
                        <ShoppingBag className="w-4 h-4" />
                        Order Now
                    </Button>
                </div>
            </div>

            <OrderModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
                productName={title}
                price={diamond.price}
            />
        </>
    );
};

export default DiamondCard;
