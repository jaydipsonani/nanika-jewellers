import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import ContactSection from "@/components/home/ContactSection";
import styles from "./Index.module.scss";

const Index = () => {
    return (
        <div className={styles.page}>
            <Header />
            <main>
                <HeroSection />
                <CategorySection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
