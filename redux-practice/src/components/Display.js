import React from 'react'
import { connect } from 'react-redux'
import { removeContact } from '../redux'

const Display = props => {
    return (
        <div>
            {props.contacts.map(contact => {
                return (
                    <div key={contact.fName + contact.lName}>
                        <h3>{contact.fName} {contact.lName}</h3>
                        <button onClick={ ()=> props.removeContact(contact.id) }>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

// arg1: whatever your redux state, make it your local state
// arg2: whatever actions (methods) you need from redux folder, get these; we don't need methods this time
export default connect(state=>state, { removeContact })(Display)