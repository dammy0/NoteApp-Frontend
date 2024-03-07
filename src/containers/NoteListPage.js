import React from 'react'
import { Link } from 'react-router-dom';

const NoteListPage = () => {
  const notes = [
    {
      title: "My First Note",
      content: "This is definitely my first note",
      id: 1,
    },
    {
      title: "My Second Note",
      content: "This is definitely my Second note",
      id: 2,
    },
    {
      title: "My Third Note",
      content: "This is definitely my Third note",
      id: 3,
    },
  ];


  return (
    <div>
      <div>
        <h2>&#9782; Notes</h2>
        <p>{notes.length}</p>
      </div>
      <ul>
        {notes.map(({ title, content, id }) => (
          <li key={id}>
            <Link to={`/notes/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button>New Note</button>
    </div>
  );
}

export default NoteListPage;