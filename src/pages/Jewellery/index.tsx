import { useState, useEffect, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JewelleryFilters from "@/components/jewellery/JewelleryFilters";
import JewelleryCard from "@/components/jewellery/JewelleryCard";
import DiamondSkeleton from "@/components/diamonds/DiamondSkeleton";
import { jewelleryItems } from "@/data/jewellery";
import { Gem } from "lucide-react";
import styles from "./Jewellery.module.scss";

const JewelleryPage = () => {
    const [category, setCategory] = useState("all");
    const [gender, setGender] = useState("all");
    const [material, setMaterial] = useState("all");
    const [occasion, setOccasion] = useState("all");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, [category, gender, material, occasion]);

    const filteredItems = useMemo(() => {
        return jewelleryItems.filter((item) => {
            const matchesCategory = category === "all" || item.category === category;
            const matchesGender = gender === "all" || item.gender === gender;
            const matchesMaterial = material === "all" || item.material === material;
            const matchesOccasion = occasion === "all" || item.occasion === occasion;
            return matchesCategory && matchesGender && matchesMaterial && matchesOccasion;
        });
    }, [category, gender, material, occasion]);

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Page Header */}
                    <div className={`${styles.header} animate-fade-in-up`}>
                        <span className={styles.subHeading}>
                            Exquisite Collection
                        </span>
                        <h1 className={styles.heading}>
                            Jewellery
                        </h1>
                        <p className={styles.description}>
                            Rings • Earrings • Pendants • Bracelets
                        </p>
                    </div>

                    {/* Filters */}
                    <div className={`${styles.filtersContainer} animate-fade-in`} style={{ animationDelay: "0.2s" }}>
                        <JewelleryFilters
                            category={category}
                            gender={gender}
                            material={material}
                            occasion={occasion}
                            onCategoryChange={setCategory}
                            onGenderChange={setGender}
                            onMaterialChange={setMaterial}
                            onOccasionChange={setOccasion}
                        />
                    </div>

                    {/* Results */}
                    {isLoading ? (
                        <div className={styles.grid}>
                            {[...Array(8)].map((_, i) => (
                                <DiamondSkeleton key={i} />
                            ))}
                        </div>
                    ) : filteredItems.length === 0 ? (
                        <div className={styles.emptyState}>
                            <Gem />
                            <h3>
                                No jewellery found
                            </h3>
                            <p>
                                Try adjusting your filters to see more results
                            </p>
                        </div>
                    ) : (
                        <div className={styles.grid}>
                            {filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <JewelleryCard item={item} />
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

export default JewelleryPage;
