import styles from "./style.module.scss";

export const RenderNotes = () => {
    return (
        <div className={styles.sumary}>
            <h3 className={styles.title}>Lista de notas</h3>
            <div className={styles.info}>
                <p className={styles.subtitle}>Notas: <span  className={styles.subtitle__bold}>4</span></p>
                <p className={styles.subtitle}>Caracteres: <span  className={styles.subtitle__bold}>321</span></p>
            </div>
            <div className={styles.card__container}>
                <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Titulo da nota</h4>
                    <p className={styles.card__text}>Texto da nota</p>
                    <button className={styles.remove__note}>Excluir</button>
                </div>

                <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Titulo da nota</h4>
                    <p>Texto da nota</p>
                    <button className={styles.remove__note}>Excluir</button>
                </div>

                <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Titulo da nota</h4>
                    <p>Texto da nota</p>
                    <button className={styles.remove__note}>Excluir</button>
                </div>

                <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Titulo da nota</h4>
                    <p>Texto da nota</p>
                    <button className={styles.remove__note}>Excluir</button>
                </div>
            </div>
        </div >
    )
}