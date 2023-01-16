import React from "react";
import './TodosError.css'

function TodosError({ error }) {
    return (
        <div className="Error-container">
            <p className="Error-text">{ error }</p>
        </div>
    );
};

export { TodosError };