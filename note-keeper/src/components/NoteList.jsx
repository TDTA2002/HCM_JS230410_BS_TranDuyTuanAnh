import React, { useState , useEffect } from 'react';

export default function NoteList() {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const handleInputChange = (event) => {
        setCurrentNote(event.target.value);
    };

    const handleAddNote = () => {
        if (currentNote.trim() !== '') {
            const updatedNotes = [...notes, currentNote];
            setNotes(updatedNotes);
            setCurrentNote('');
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };
    return (
        <div>
            <div className='note'>
                <div className='takenote'>
                    <div className='title'>Title</div>
                    <input type="text" value={currentNote} onChange={handleInputChange} placeholder="Take a note" />
                    <button className='icon' onClick={handleAddNote}><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div className='rendernote'>
                {notes.map((note, index) => (
                    <div className='rendernote-1' key={index}>
                        <p>{note}</p>
                        <button className='buttondelete' onClick={() => handleDeleteNote(index)}><i class="fa-sharp fa-solid fa-trash"></i></button>
                    </div>
                ))}
            </div>
        </div>
    );
}


