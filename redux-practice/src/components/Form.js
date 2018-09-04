import React from 'react'

const Form = props => {
    return <form onSubmit={props.handleSubmit}>
        <input type='text' name='fName' value={props.fName} onChange={props.handleChange}/>
        <input type='text' name='lName' value={props.lName} onChange={props.handleChange}/>
        <button>Submit</button>
    </form>
}

export default Form