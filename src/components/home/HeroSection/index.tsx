import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
    return (
        <section className={styles.section}>
            {/* Video Background */}
            <div className={styles.videoContainer}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.video}
                    poster="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
                >
                    <source
                        src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
                        type="video/mp4"
                    />
                </video>
                {/* Overlay */}
                <div className={styles.overlay} />
            </div>

            {/* Content */}
            <div className={styles.contentContainer}>
                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <span className={styles.yearLabel}>
                        Est. 2024
                    </span>
                </div>

                <h2
                    className={`${styles.title} animate-fade-in-up`}
                    style={{ animationDelay: "0.4s" }}
                >
                    Discover Timeless
                    <br />
                    <span className={styles.textGradient}>Elegance</span>
                </h2>

                <p
                    className={`${styles.subtitle} animate-fade-in-up`}
                    style={{ animationDelay: "0.6s" }}
                >
                    Exquisite craftsmanship meets unparalleled beauty in every piece
                </p>

                <div
                    className={`${styles.buttonGroup} animate-fade-in-up`}
                    style={{ animationDelay: "0.8s" }}
                >
                    <Link to="/jewellery">
                        <Button variant="gold" size="xl">
                            Explore Collection
                        </Button>
                    </Link>
                    <Link to="/diamonds">
                        <Button variant="gold" size="xl">
                            View Diamonds
                        </Button>
                    </Link>
                </div>

                {/* Scroll Indicator */}
                <div
                    className={styles.scrollIndicator}
                    style={{ animationDelay: "1.2s" }}
                >
                    <ChevronDown />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
