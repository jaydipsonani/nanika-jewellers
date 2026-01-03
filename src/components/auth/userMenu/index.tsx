
import { useAuth } from "@/context/AuthContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/Button";
import { LogOut } from "lucide-react";
import styles from "./UserMenu.module.scss";

const UserMenu = () => {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={styles.triggerButton}>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>
                            {user.displayName || "User"}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={styles.dropdownContent} align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className={styles.labelContainer}>
                        <p className={styles.labelName}>{user.displayName}</p>
                        <p className={styles.labelEmail}>
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className={styles.separator} />
                <DropdownMenuItem onClick={logout} className={styles.menuItem}>
                    <LogOut className={styles.icon} />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;

