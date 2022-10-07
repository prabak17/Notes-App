import React from 'react'
import Addnote from './Addnote'
import Note from './Note'


const NoteList = ({notes, handleAddNote, handledeleteNotes}) =>{
   return (
    <div className='note-list'>
      {notes.map((note)=> (
      <Note 
      id={note.id} 
      text={note.text} 
      date={note.date}
      handledeleteNotes ={handledeleteNotes} 
      />))
      }
      <Addnote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NoteList