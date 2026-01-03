import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import styles from "./Header.module.scss";

const Header = () => {
    const { user, loading, signOut } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleSignOut = async () => {
        await signOut();
        toast({
            title: "Signed out",
            description: "You have been signed out successfully.",
        });
        navigate("/");
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    {!loading && (
                        <>
                            {user ? (
                                <Button variant="gold-outline" size="sm" className="gap-2" onClick={handleSignOut}>
                                    <LogOut className="w-4 h-4" />
                                    Sign Out
                                </Button>
                            ) : (
                                <Button
                                    variant="gold-outline"
                                    size="sm"
                                    className="gap-2"
                                    onClick={() => navigate("/auth")}
                                >
                                    <User className="w-4 h-4" />
                                    Sign In
                                </Button>
                            )}
                        </>
                    )}
                    {loading && <div className="w-20" />}

                    <Link to="/" className={styles.logo}>
                        <h1>
                            Nanika Jewellers
                        </h1>
                    </Link>

                    <nav className={styles.navLinks}>
                        <Link
                            to="/diamonds"
                            className={styles.link}
                        >
                            Diamonds
                        </Link>
                        <Link
                            to="/jewellery"
                            className={styles.link}
                        >
                            Jewellery
                        </Link>
                    </nav>

                    <div className={styles.spacer} />
                </div>
            </div>
        </header>
    );
};

export default Header;
