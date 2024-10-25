import Link from "next/link";
import styles from "./styles.module.css";

export default function NavLinks() {
  return (
    <ul className="pageWidth flexJustifyLeft listStyleNone">
      <li className={styles.navLinkWrapper}>
        <Link className={styles.navLink} href="/">
          Home
        </Link>
      </li>
      <li className={styles.navLinkWrapper}>
        <Link className={styles.navLink} href="/about">
          About
        </Link>
      </li>
    </ul>
  );
}
