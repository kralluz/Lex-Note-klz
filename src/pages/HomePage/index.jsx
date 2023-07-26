import { v4 as uuidv4 } from 'uuid';
import styles from "./style.module.scss";
import { HeaderComponent } from "../../components/HeaderComponent";
import { SetNoteContainer } from "../../components/SetNoteContainer";
import { RenderNotes } from "../../components/RenderNotes";
import { useState } from "react";


export const HomePage = () => {
   const [noteList, setNoteList] = useState([]);

   const addNote = (formData) => {
      const newNote = {...formData, id: uuidv4()}
      setNoteList([...noteList, newNote]);
   }

   const removeNote = (removeId) => {
      const newNoteList = noteList.filter(note => note.id !== removeId )
      setNoteList(newNoteList);
   }

   return (
      <>
      <header>
         <HeaderComponent />
      </header>
         <main>
            <SetNoteContainer addNote={addNote} />
            <RenderNotes noteList={noteList} removeNote={removeNote}/>
         </main>
      </>
   );
};
