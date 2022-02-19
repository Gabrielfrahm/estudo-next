import Image from "next/image";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          width="110"
          height="31"
          alt="ig.news seu blog de tecnologia"
        />
        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Post</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
