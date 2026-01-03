import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Check, Scale, Gem, Award, Shield } from "lucide-react";
import OrderModal from "@/components/order/OrderModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import type { JewelleryItem } from "@/data/jewellery";
import styles from "./JewelleryCard.module.scss";

interface JewelleryCardProps {
    item: JewelleryItem;
}

const JewelleryCard = ({ item }: JewelleryCardProps) => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    return (
        <>
            <div className={styles.card}>
                {/* Image */}
                <div className={styles.imageWrapper}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className={styles.image}
                        loading="lazy"
                    />
                    <div className={styles.badge}>
                        <span>
                            {item.category}
                        </span>
                    </div>
                    {!item.inStock && (
                        <div className={styles.outOfStock}>
                            <span>Out of Stock</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        {item.title}
                    </h3>
                    <p className={styles.description}>
                        {item.description}
                    </p>

                    {/* Quick Specs */}
                    <div className={styles.specsGrid}>
                        <div className={styles.specItem}>
                            <Scale />
                            <span>{item.specs.metalWeight}g {item.specs.metalPurity}</span>
                        </div>
                        {item.specs.diamondWeight && (
                            <div className={styles.specItem}>
                                <Gem />
                                <span>{item.specs.diamondWeight} ct</span>
                            </div>
                        )}
                        {item.specs.hallmark && (
                            <div className={styles.specItem}>
                                <Award />
                                <span>Hallmarked</span>
                            </div>
                        )}
                        {item.specs.certification && (
                            <div className={styles.specItem}>
                                <Shield />
                                <span>Certified</span>
                            </div>
                        )}
                    </div>

                    {/* Tabs for Details */}
                    <Tabs defaultValue="details" className={styles.tabs}>
                        <TabsList className={styles.tabsList}>
                            <TabsTrigger value="details">Product Details</TabsTrigger>
                            <TabsTrigger value="price">Price Breakup</TabsTrigger>
                        </TabsList>

                        <TabsContent value="details" className={styles.tabsContent}>
                            <div>
                                <div className={styles.detailRow}>
                                    <span className={styles.label}>Metal</span>
                                    <span className={styles.value}>{item.specs.metalType} ({item.specs.metalPurity})</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <span className={styles.label}>Weight</span>
                                    <span className={styles.value}>{item.specs.metalWeight} grams</span>
                                </div>
                                {item.specs.diamondWeight && (
                                    <>
                                        <div className={styles.detailRow}>
                                            <span className={styles.label}>Diamond</span>
                                            <span className={styles.value}>{item.specs.diamondWeight} ct ({item.specs.diamondCount} pcs)</span>
                                        </div>
                                        <div className={styles.detailRow}>
                                            <span className={styles.label}>Clarity/Color</span>
                                            <span className={styles.value}>{item.specs.diamondClarity} / {item.specs.diamondColor}</span>
                                        </div>
                                    </>
                                )}
                                {item.specs.size && (
                                    <div className={styles.detailRow}>
                                        <span className={styles.label}>Size</span>
                                        <span className={styles.value}>{item.specs.size}</span>
                                    </div>
                                )}
                                <div className={styles.detailRow}>
                                    <span className={styles.label}>Certification</span>
                                    <span className={styles.value}>{item.specs.certification || "N/A"}</span>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="price" className={styles.tabsContent}>
                            <div>
                                {item.priceBreakup.goldPrice > 0 && (
                                    <div className={styles.detailRow}>
                                        <span className={styles.label}>Metal Price</span>
                                        <span className={styles.value}>₹{item.priceBreakup.goldPrice.toLocaleString()}</span>
                                    </div>
                                )}
                                {item.priceBreakup.diamondPrice > 0 && (
                                    <div className={styles.detailRow}>
                                        <span className={styles.label}>Diamond Price</span>
                                        <span className={styles.value}>₹{item.priceBreakup.diamondPrice.toLocaleString()}</span>
                                    </div>
                                )}
                                <div className={styles.detailRow}>
                                    <span className={styles.label}>Making Charges</span>
                                    <span className={styles.value}>₹{item.priceBreakup.makingCharges.toLocaleString()}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <span className={styles.label}>GST (3%)</span>
                                    <span className={styles.value}>₹{item.priceBreakup.gst.toLocaleString()}</span>
                                </div>
                                <div className="border-t border-border pt-2 mt-2">
                                    <div className={styles.detailRow} style={{ fontWeight: 600 }}>
                                        <span className={styles.value}>Total</span>
                                        <span className="text-gold">₹{item.totalPrice.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    {/* Price & Stock */}
                    <div className={styles.priceRow}>
                        <span className={styles.price}>
                            ₹{item.totalPrice.toLocaleString()}
                        </span>
                        <div className={item.inStock ? `${styles.stock} ${styles.inStock}` : `${styles.stock} ${styles.outStock}`}>
                            {item.inStock ? (
                                <>
                                    <Check />
                                    <span>In Stock</span>
                                </>
                            ) : (
                                <span>Out of Stock</span>
                            )}
                        </div>
                    </div>

                    <Button
                        variant="gold"
                        className={styles.actionButton}
                        disabled={!item.inStock}
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
                productName={item.title}
                price={item.totalPrice}
            />
        </>
    );
};

export default JewelleryCard;
