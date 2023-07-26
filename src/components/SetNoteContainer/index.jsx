import styles from "./style.module.scss";
import { SetNoteForm } from "./SetNoteForm";

export const SetNoteContainer = ({addNote}) => {
   return (
      <section className={styles.set__movimentation}>
            <SetNoteForm addNote={addNote}/>
      </section>
   );
};