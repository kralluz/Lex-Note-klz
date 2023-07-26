import styles from "./style.module.scss";

// TextareaComponent.js

export const TextareaComponent = ({ label, id, placeholder, value, setValue }) => {
    return (
        <div>
            <label className={styles.label__description} htmlFor={id}>{label}</label>
            <textarea
                className={styles.input__textarea}
                placeholder={placeholder}
                id={id}
                name={id}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    );
};
