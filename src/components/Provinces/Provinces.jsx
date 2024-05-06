import styles from "./Provinces.module.css";

const Provinces = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.provinces__kota}>Kota</th>
                            <th className={styles.provinces__kasus}>Kasus</th>
                            <th className={styles.provinces__sembuh}>Sembuh</th>
                            <th className={styles.provinces__meninggal}>Meninggal</th>
                            <th className={styles.provinces__dirawat}>Dirawat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over the updated data to display */}
                        {data.map((province, index) => (
                            <tr key={index}>
                                <td className={styles.provinces__kota}>{province.kota}</td>
                                <td className={styles.provinces__kasus}>{province.kasus}</td>
                                <td className={styles.provinces__sembuh}>{province.sembuh}</td>
                                <td className={styles.provinces__meninggal}>{province.meninggal}</td>
                                <td className={styles.provinces__dirawat}>{province.dirawat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Provinces;
