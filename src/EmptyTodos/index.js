import React from "react";
import './EmptyTodos.css';
import { TodoContext } from "../TodoContext";

function EmptyTodos() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(!openModal);
    };

    return (
        <div className="EmptyTodo-container" onClick={onClickButton}>
            <p className="EmptyTodo-text">¡Crea tu primera tarea!</p>
        </div>
);
};

export { EmptyTodos };

