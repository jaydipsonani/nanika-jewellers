import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Side - Image */}
                    <div className={`${styles.imageContainer} animate-fade-in`}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                                alt="Nanika Jewellers Store"
                                className={styles.image}
                                loading="lazy"
                            />
                        </div>
                        {/* Decorative Frame */}
                        <div className={styles.frame} />
                    </div>

                    {/* Right Side - Content */}
                    <div className={`${styles.content} animate-fade-in-up`}>
                        <span className={styles.label}>
                            Visit Us
                        </span>
                        <h2 className={styles.heading}>
                            Contact Us
                        </h2>

                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Nanika Jewellers</h4>
                                    <p className={styles.infoText}>
                                        123 Diamond Street, Jewellery Quarter<br />
                                        Mumbai, Maharashtra 400001
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Phone</h4>
                                    <p className={styles.infoText}>
                                        +91 98765 43210<br />
                                        +91 22 2345 6789
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Email</h4>
                                    <p className={styles.infoText}>
                                        info@nanikajewellers.com
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>
                                    <Clock />
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Hours</h4>
                                    <p className={styles.infoText}>
                                        Mon - Sat: 10:00 AM - 8:00 PM<br />
                                        Sunday: 11:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button variant="gold" size="lg">
                            Get Directions
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
