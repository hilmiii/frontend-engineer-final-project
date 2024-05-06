import { useState } from 'react';
import styles from "./Form.module.css";
import data from "../../utils/constants/provinces";

function Form({ addDataToProvinces }) {
    const [formData, setFormData] = useState({
        provinsi: '',
        status: '',
        jumlah: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.provinsi && formData.status && formData.jumlah) {
            addDataToProvinces(formData);
            setFormData({
                provinsi: '',
                status: '',
                jumlah: ''
            });
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__right}>
                      <img
                        className={styles.form__image}
                        src="../src/assets/berjalan.png"
                        alt="placeholder"
                    />
                </div>
                <div className={styles.form__left}>
                    <h2 className={styles.form__title}>Add Data</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="provinsi">Provinsi :</label>
                            <select
                                id="provinsi"
                                className={styles.inputField}
                                onChange={handleChange}
                                value={formData.provinsi}
                            >
                                <option value="">Select Provinsi</option>
                                {data.provinces.map((province, index) => (
                                    <option key={index} value={province.kota}>{province.kota}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="status">Status :</label>
                            <select
                                id="status"
                                className={styles.inputField}
                                onChange={handleChange}
                                value={formData.status}
                            >
                                <option value="">Select Status</option>
                                {data.statusOptions.map((status, index) => (
                                    <option key={index} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="jumlah">Jumlah :</label>
                            <input
                                type="number"
                                id="jumlah"
                                className={styles.inputField}
                                onChange={handleChange}
                                value={formData.jumlah}
                            />
                        </div>
                        <button type="submit" className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;
