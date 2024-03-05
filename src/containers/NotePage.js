import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Notes from "../components/Notes";

const NotePage = () => {
  const params = useParams();
  
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



  return (
    <div>
      <textarea name='noteTitle' value={note.title}> </textarea>
      <textarea name='noteContent' value={note.content}> </textarea>
    </div>
  );
}

export default NotePage