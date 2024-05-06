import PropTypes from 'prop-types';
import styles from "./Indonesia.module.css";

function Indonesia(props) {
    const { indonesia } = props;

    return (
        <div className={styles.indonesia}>
            <h3 className={styles.indonesia__title}>{indonesia.status}</h3> {}
            <p className={styles.indonesia__date}>{indonesia.total}</p> {}
        </div>
    );
}   

Indonesia.propTypes = {
    indonesia: PropTypes.shape({
        status: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired,
        detail: PropTypes.string.isRequired,
    }).isRequired,
};

export default Indonesia;
