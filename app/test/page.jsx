import React from 'react'

function ServerActionTest() {

    const handleForm = async (formData)=>{
        "use server"
        console.log(formData)
    }
  return (
    <div>
        <form action={handleForm}>
            <input type="text" name='username'  />
            <button>Submit</button>
        </form>
        <h2>Hello</h2>
    </div>
  )
}

export default ServerActionTest