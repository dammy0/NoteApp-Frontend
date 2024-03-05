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
      <h2>My Notes</h2>
      <ul>
        {notes.forEach(({title, content, key})=>{
          <li key={key}>
            <Link to={`/note/${key}`}>{title}</Link>
          </li>;
        })}
      </ul>
    </div>
  )
}

export default NoteListPage