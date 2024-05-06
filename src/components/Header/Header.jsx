import styles from "./Header.module.css";

function Header() {
    return(
        <div className={styles.container}>
            <section className={styles.header}>
                <div className={styles.header__left}>
                    <h2 className={styles.header__title}>Covid App</h2>
                    <h3 className={styles.header__genre}>
                        Monitoring Perkembangan Covid
                    </h3>
                    <p className={styles.header__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, excepturi veritatis. Cupiditate doloribus nesciunt dolor.
                    </p>
                    <button className={styles.header__button}>Vaccine</button>
                </div>
                <div className={styles.header__right}>
                    <img
                    className={styles.header__image} src="../src/assets/dokter.png" alt="placeholder"
                    />
                </div>
            </section>    
        </div>
    );
}

export default Header;