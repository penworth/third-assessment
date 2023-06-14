import React from 'react'

const Userinput = (props) => {
  return (
    <div>
      {/* passing function to change the the h1 */}
        <input className='border-solid border-2' type="text" onChange= {props.changeHandler}/>
    </div>
  )
}

export default Userinput
