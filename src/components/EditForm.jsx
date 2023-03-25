import React, { useState,useEffect } from 'react'


const EditForm = ({editedTask,updateTask,closeEditMode}) => {

  const [updatedTaskName, setupdatedTaskName] = useState(editedTask.name)


  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])


  const handleFormSubmit = (e) => {
    e.preventDefault()
    updateTask({...editedTask,name:updatedTaskName})
   
  }

  return (
     
       <div   
         role="dialog"
       aria-labelledby="editTask"
       onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
       >
         <form
               className='todo'
               onSubmit={handleFormSubmit}
             >
            
               <div className="wrapper">
          <input
            type="text"
            id='editTask'
            className='input'
            value={updatedTaskName}
            onInput={(e) => setupdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={70}
            placeholder="Update task"
          />
          <label htmlFor='editTask'
            className='label'
          >Update task</label>
               </div>
               <button 
               className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}      
            type='submit'
               >
         
         
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

         
         
               </button>
             </form>
       </div>
    
  
  )
}

export default EditForm

