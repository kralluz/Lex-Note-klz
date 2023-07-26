// SetNoteForm.js

import { InputComponent } from "../../InputComponent";
import { TextareaComponent } from "../../TextareaComponent";
import styles from "./style.module.scss";
import { useState } from "react";

export const SetNoteForm = ({addNote}) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const submit = (event) => {
        event.preventDefault();
        addNote({title, message})
        setTitle("");
        setMessage("");
    };

    return (
        <div className={styles.form__container}>
            <form onSubmit={submit}>
                <InputComponent
                    label="Cadastre uma nota"
                    placeholder="Título da nota"
                    type="text"
                    id="title"
                    value={title}
                    setValue={setTitle}
                />

                <TextareaComponent
                    placeholder="Mensagem"
                    id="message"
                    value={message}
                    setValue={setMessage}
                />
                <button className={styles.submitButton} type="submit">Criar nota</button>
            </form>
        </div>
    );
};
