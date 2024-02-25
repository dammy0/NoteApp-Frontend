import React from 'react';
import { useParams } from 'react-router-dom';
import Notes from "../components/Notes";

const NotePage = () => {
  const params = useParams();
  
  return (
    <>
      <Notes />
      {params.noteId}
    </>
  );
}

export default NotePage