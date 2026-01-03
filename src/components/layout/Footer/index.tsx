import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link to="/">
                        <h3 className={styles.logo}>
                            Nanika Jewellers
                        </h3>
                    </Link>

                    <nav className={styles.nav}>
                        <Link
                            to="/"
                            className={styles.link}
                        >
                            Home
                        </Link>
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

                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Nanika Jewellers. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
