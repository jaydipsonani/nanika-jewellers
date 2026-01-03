import { useState, useEffect, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DiamondFilters from "@/components/diamonds/DiamondFilters";
import DiamondCard from "@/components/diamonds/DiamondCard";
import DiamondSkeleton from "@/components/diamonds/DiamondSkeleton";
import { diamonds } from "@/data/diamonds";
import { Diamond } from "lucide-react";
import styles from "./Diamonds.module.scss";

const DiamondsPage = () => {
    const [diamondType, setDiamondType] = useState("all");
    const [cutType, setCutType] = useState("all");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, [diamondType, cutType]);

    const filteredDiamonds = useMemo(() => {
        return diamonds.filter((diamond) => {
            const matchesType =
                diamondType === "all" ||
                diamond.type.toLowerCase().replace(" ", "-") === diamondType;
            const matchesCut =
                cutType === "all" || diamond.cut.toLowerCase() === cutType;
            return matchesType && matchesCut;
        });
    }, [diamondType, cutType]);

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Page Header */}
                    <div className={`${styles.header} animate-fade-in-up`}>
                        <span className={styles.subHeading}>
                            Our Collection
                        </span>
                        <h1 className={styles.heading}>
                            Diamonds
                        </h1>
                        <p className={styles.description}>
                            Natural • Lab Grown
                        </p>
                    </div>

                    {/* Filters */}
                    <div className={`${styles.filtersContainer} animate-fade-in`} style={{ animationDelay: "0.2s" }}>
                        <DiamondFilters
                            diamondType={diamondType}
                            cutType={cutType}
                            onDiamondTypeChange={setDiamondType}
                            onCutTypeChange={setCutType}
                        />
                    </div>

                    {/* Results */}
                    {isLoading ? (
                        <div className={styles.grid}>
                            {[...Array(8)].map((_, i) => (
                                <DiamondSkeleton key={i} />
                            ))}
                        </div>
                    ) : filteredDiamonds.length === 0 ? (
                        <div className={styles.emptyState}>
                            <Diamond />
                            <h3>
                                No diamonds found
                            </h3>
                            <p>
                                Try adjusting your filters to see more results
                            </p>
                        </div>
                    ) : (
                        <div className={styles.grid}>
                            {filteredDiamonds.map((diamond, index) => (
                                <div
                                    key={diamond.id}
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <DiamondCard diamond={diamond} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DiamondsPage;
