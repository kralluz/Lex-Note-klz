
import styles from "./style.module.scss";

export const InputComponent = ({ label, id, type, placeholder, value, setValue }) => {
    return (
        <div>
            <label className={styles.label__description} htmlFor={id}>{label}</label>
            <input
                className={styles.input__description}
                placeholder={placeholder}
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    );
};