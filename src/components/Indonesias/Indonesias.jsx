import { useState } from 'react';
import Indonesia from "../Indonesia/Indonesia";
import styles from "./Indonesias.module.css";
import data from "../../utils/constants/indonesia";

function Indonesias() {
    const [indonesias] = useState(data.indonesia);
    const sortedIndonesias = indonesias.sort((a, b) => {
        const statusOrder = {
            "Positif": 1,
            "Sembuh": 2,
            "Meninggal": 3
        };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.indonesias__title}>Indonesia</h2>
                <p className={styles.indonesias__description}>Data Covid Berdasarkan Indonesia</p>
                <section className={styles.indonesias}>
                    <div className={styles.indonesia__container}>
                        {sortedIndonesias.map((indonesia, index) => (
                            <div key={index} className={styles.indonesia}>
                                <Indonesia indonesia={indonesia} />
                            </div>
                        ))}
                    </div>
                </section>     
                <div><br /></div>       
            </div>
        </div>
    );
}

export default Indonesias;
