
import React from 'react'

const Add = () => {
  return (
    <>
    <div className='container'>
    
        <input type='numbers' placeholder='mm/dd/yy' />
        <input type="text" placeholder='Descpription'/>
        <input type="text" placeholder='Category'/>
        <input type="text" placeholder='Amount'/>
    </div>
    
    <div>
    <button type="submit">Add</button>
    </div>
    

    </>
    
  )
}

export default Add