// SetNoteForm.js

import { InputComponent } from "../../InputComponent";
import { TextareaComponent } from "../../TextareaComponent";
import styles from "./style.module.scss";
import { useState } from "react";

export const SetNoteForm = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const submit = (event) => {
        event.preventDefault();
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
                    setValue={setTitle} // Passando a prop de callback para atualizar o estado 'title'
                />

                <TextareaComponent
                    placeholder="Mensagem"
                    id="message"
                    value={message}
                    setValue={setMessage} // Passando a prop de callback para atualizar o estado 'message'
                />
                <button className={styles.submitButton} type="submit">Criar nota</button>
            </form>
        </div>
    );
};
