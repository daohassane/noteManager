import React from "react";

const Note = ({item, deleteNote}) => {

    return (
        <li className="item">
            <span>{item.id} - { item.message }</span>
            <button onClick={() => deleteNote(item.id)}>
                <i className="fa fa-trash"></i>
            </button>
        </li>
    )
}

export default Note;
