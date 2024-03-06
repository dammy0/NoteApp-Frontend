import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notes from "../components/Notes";

const NotePage = () => {
  let params = useParams();
  let navigate = useNavigate();
  
  const notes = {
    1: {
      title: "My First Note",
      content: "This is definitely my first note",
      id: 1,
    },
    2: {
      title: "My Second Note",
      content: "This is definitely my Second note",
      id: 2,
    },
    3: {
      title: "My Third Note",
      content: "This is definitely my Third note",
      id: 2,
    },
  };

  let [note, setNote] = useState(notes[params.noteId]);

  function handleTitleChange({ target }) {
    setNote(prev=>({...prev, "title": target.value}))
  }
  function handleContentChange({ target }) {
    setNote((prev) => ({ ...prev, "content": target.value }));
  }
  function handleSubmit() {
    navigate("/notes")
  }



  return (
    <div>
      <div>
        <button onClick={handleSubmit}>Back</button>
        <button onClick={handleSubmit}>Done</button>
      </div>
      <textarea
        name="noteTitle"
        value={note.title}
        onChange={handleTitleChange}
      ></textarea>
      <textarea
        name="noteContent"
        value={note.content}
        onChange={handleContentChange}
      ></textarea>
    </div>
  );
}

export default NotePage