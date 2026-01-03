import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select";
import styles from "./DiamondFilters.module.scss";

interface DiamondFiltersProps {
    diamondType: string;
    cutType: string;
    onDiamondTypeChange: (value: string) => void;
    onCutTypeChange: (value: string) => void;
}

const diamondTypes = [
    { value: "all", label: "All Types" },
    { value: "natural", label: "Natural" },
    { value: "lab-grown", label: "Lab Grown" },
];

const cutTypes = [
    { value: "all", label: "All Cuts" },
    { value: "round", label: "Round" },
    { value: "oval", label: "Oval" },
    { value: "princess", label: "Princess" },
    { value: "cushion", label: "Cushion" },
    { value: "emerald", label: "Emerald" },
];

const DiamondFilters = ({
    diamondType,
    cutType,
    onDiamondTypeChange,
    onCutTypeChange,
}: DiamondFiltersProps) => {
    return (
        <div className={styles.filters}>
            <div className={styles.filterGroup}>
                <label className={styles.label}>
                    Diamond Type
                </label>
                <Select value={diamondType} onValueChange={onDiamondTypeChange}>
                    <SelectTrigger className="w-full bg-secondary border-border">
                        <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                        {diamondTypes.map((type) => (
                            <SelectItem
                                key={type.value}
                                value={type.value}
                            >
                                {type.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.label}>
                    Cut Type
                </label>
                <Select value={cutType} onValueChange={onCutTypeChange}>
                    <SelectTrigger className="w-full bg-secondary border-border">
                        <SelectValue placeholder="Select cut" />
                    </SelectTrigger>
                    <SelectContent>
                        {cutTypes.map((cut) => (
                            <SelectItem
                                key={cut.value}
                                value={cut.value}
                            >
                                {cut.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default DiamondFilters;
