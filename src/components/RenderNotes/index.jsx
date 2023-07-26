import  { CardsNotes } from "./CardsNotes";
import styles from "./style.module.scss";

export const RenderNotes = ({noteList, removeNote}) => {
    return (
        <div className={styles.sumary}>
            <h3 className={styles.title}>Lista de notas</h3>
            <div className={styles.info}>
                <p className={styles.subtitle}>Notas: <span  className={styles.subtitle__bold}>{noteList.length}</span></p>
                <p className={styles.subtitle}>Caracteres: <span  className={styles.subtitle__bold}>321</span></p>
            </div>
            <ul className={styles.card__container}>
                {noteList.map(note => (
                    <CardsNotes id={note.id} title={note.title} message={note.message} removeNote={removeNote}/>
                ))}
            </ul>
        </div >
    )
}