import React, { useEffect, useState } from 'react'
import NoteList from './components/NoteList'
import {nanoid} from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'

function App() {
  const [notes, setnotes] =useState(()=>{
    return JSON.parse(localStorage.getItem('reactapp')) || []
  }))

const [searchText, setSearchText] = useState('')
const [darkMode, setDarkMode] = useState(false)

// useEffect(() => {
//   const savedNotes = JSON.parse(
//     localStorage.getItem('reactapp')
//   );

//   if (savedNotes) {
//     setnotes(savedNotes);
//   }
// }, []);

useEffect(() => {
  localStorage.setItem(
    'reactapp',
    JSON.stringify(notes)
  );
}, [notes]);

const addNote =(text)=>{
  const date = new Date();
  const newNote ={
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes =[...notes, newNote]
  console.log(newNotes);
  setnotes(newNotes)
}

const deleteNote =(id)=>{
 const newNotes = notes.filter((note)=> note.id !== id)
 setnotes(newNotes)
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleDarkMode ={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NoteList 
      notes={notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))} 
      handleAddNote ={addNote} 
      handledeleteNotes={deleteNote}/>
    </div>
    </div>
    
  )
}

export default App
