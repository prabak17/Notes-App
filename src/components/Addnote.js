import React, { useState } from 'react'

const Addnote=({handleAddNote})=> {
    const [noteText, setNoteText] =useState('')

    const handleChange=(e)=>{
        if(characterLimit - e.target.value.length >=0){
        setNoteText(e.target.value)}
    }

    const handleSaveClick=()=>{
        if(noteText.trim().length > 0){
        handleAddNote(noteText)
        setNoteText('')
    }
    }
    const characterLimit = 200;

  return (
    <div className='note new'>
        <textarea
        rows='8'
        cols='10'
        placeholder='Type to add note...'
        value ={noteText}
        onChange={handleChange}
        ></textarea>
        <div className='note-footer'>
            <small>{characterLimit - noteText.length} remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default Addnote