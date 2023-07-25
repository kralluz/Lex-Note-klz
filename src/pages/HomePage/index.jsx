import styles from "./style.module.scss";
import { HeaderComponent } from "../../components/HeaderComponent";
import { SetNoteContainer } from "../../components/SetNoteContainer";
import { RenderNotes } from "../../components/RenderNotes";



export const HomePage = () => {
   return (
      <><header>
         <HeaderComponent/>
      </header>
      <main>
         <SetNoteContainer/>
         <RenderNotes/>
      </main>  
      </>
   );
};
