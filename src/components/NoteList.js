import React, {useState} from "react";
import Note from "./Note";

const NoteList = () => {
    const [notes, setNotes] = useState([
        {id: 1, message: 'Hello'}
    ])

    const [input, setInput] = useState('')

    const [error, setError] = useState('')

    function handleSubmit(e, notes, setNotes, input, setInput) {
        e.preventDefault()
        if (input !== '') {
            const id = (notes.length) ? notes[notes.length - 1].id + 1 : 1
            setNotes([...notes, {id: id, message: input}])

            setInput('')
            setError('')
        } else {
            setError('Text field is empty')
        }
    }

    const deleteNote = (id, notes, setNotes) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    return (
        <div className="wrapper">
            <h1>Note Manager</h1>
            <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)} className="note-form">
                <div className="field">
                    <label htmlFor="task">Note</label>
                    <input type="text" id="task" placeholder={'new note'} onChange={(e) => setInput(e.target.value)} value={input}/>
                    { error ? (<small>{ error }</small>) : (<small></small>)}
                </div>

                <button>Add note</button>
            </form>

            <ul className="items">
                { notes.map(item => {
                    return <Note item={item} deleteNote={(id) => deleteNote(id, notes, setNotes)} key={item.id} />
                })}
            </ul>
        </div>
    )
}

export default NoteList;
