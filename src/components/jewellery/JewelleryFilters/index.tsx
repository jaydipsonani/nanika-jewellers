import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select";
import styles from "./JewelleryFilters.module.scss";

interface JewelleryFiltersProps {
    category: string;
    gender: string;
    material: string;
    occasion: string;
    onCategoryChange: (value: string) => void;
    onGenderChange: (value: string) => void;
    onMaterialChange: (value: string) => void;
    onOccasionChange: (value: string) => void;
}

const categories = [
    { value: "all", label: "All Categories" },
    { value: "ring", label: "Ring" },
    { value: "earring", label: "Earring" },
    { value: "pendant", label: "Pendant" },
    { value: "bracelet", label: "Bracelet" },
];

const genders = [
    { value: "all", label: "All" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
];

const materials = [
    { value: "all", label: "All Materials" },
    { value: "gold", label: "Gold" },
    { value: "diamond", label: "Diamond" },
    { value: "platinum", label: "Platinum" },
];

const occasions = [
    { value: "all", label: "All Occasions" },
    { value: "wedding", label: "Wedding" },
    { value: "party", label: "Party" },
    { value: "daily-wear", label: "Daily Wear" },
];

const JewelleryFilters = ({
    category,
    gender,
    material,
    occasion,
    onCategoryChange,
    onGenderChange,
    onMaterialChange,
    onOccasionChange,
}: JewelleryFiltersProps) => {
    return (
        <div className={styles.filters}>
            <div className={styles.filterGroup}>
                <label className={styles.label}>
                    Category
                </label>
                <Select value={category} onValueChange={onCategoryChange}>
                    <SelectTrigger className={styles.selectTrigger}>
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className={styles.selectContent} position="popper">
                        {categories.map((cat) => (
                            <SelectItem
                                key={cat.value}
                                value={cat.value}
                            >
                                {cat.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.label}>
                    Gender
                </label>
                <Select value={gender} onValueChange={onGenderChange}>
                    <SelectTrigger className={styles.selectTrigger}>
                        <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className={styles.selectContent} position="popper">
                        {genders.map((g) => (
                            <SelectItem
                                key={g.value}
                                value={g.value}
                            >
                                {g.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.label}>
                    Material
                </label>
                <Select value={material} onValueChange={onMaterialChange}>
                    <SelectTrigger className={styles.selectTrigger}>
                        <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent className={styles.selectContent} position="popper">
                        {materials.map((mat) => (
                            <SelectItem
                                key={mat.value}
                                value={mat.value}
                            >
                                {mat.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.label}>
                    Occasion
                </label>
                <Select value={occasion} onValueChange={onOccasionChange}>
                    <SelectTrigger className={styles.selectTrigger}>
                        <SelectValue placeholder="Select occasion" />
                    </SelectTrigger>
                    <SelectContent className={styles.selectContent} position="popper">
                        {occasions.map((occ) => (
                            <SelectItem
                                key={occ.value}
                                value={occ.value}
                            >
                                {occ.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default JewelleryFilters;
