import styles from "./style.module.scss";

export const CardsNotes = ({title, message, removeNote, id}) => {
    return (
        <li className={styles.card__content}>
            <h4 className={styles.card__title}>{title}</h4>
            <p>{message}</p>
            <button onClick={() => removeNote(id)} className={styles.remove__note}>Excluir</button>
        </li>
    )
}