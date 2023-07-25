import styles from "./style.module.scss";
import { SetNoteForm } from "./SetNoteForm";

export const SetNoteContainer = () => {
   return (
      <section className={styles.set__movimentation}>
            <SetNoteForm/>
      </section>
   );
};
