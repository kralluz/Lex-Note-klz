import styles from "./style.module.scss";

export const SetNoteForm = () => {
    return (
        <div className={styles.form__container}>
            <form>
                <label className={styles.label__description} htmlFor="description">Cadastre uma nota</label>
                <input className={styles.input__description} id="description" type="text" placeholder="Título da nota" />
                <textarea className={styles.input__textarea} id="value" placeholder="Mensagem" />
                <button className={styles.submitButton} type="submit">Criar nota</button>
            </form>
        </div>
    )
}