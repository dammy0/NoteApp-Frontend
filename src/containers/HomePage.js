import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import '../App.css'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className='content'>
        <spam className='contentSpan'>10x </spam>Your Productivity Using this NoteApp
      </div>
    </div>
  );
}

export default HomePage;