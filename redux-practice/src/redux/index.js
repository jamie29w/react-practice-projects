import { createStore } from 'redux'
import uuidv4 from 'uuid/v4'

//Initial State
const initState = {
    contacts: []
}

//Actions are Action Creators: fxns that return action objects
export const addContact = newContact => {
    return {
        type: 'ADD_CONTACT',
        newContact
    }
}

export const removeContact = personID => {
    return {
        type: "REMOVE_CONTACT",
        personID
    }
}

//Reducer
const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            action.newContact.id = uuidv4()
            return {
                contacts: [...prevState.contacts, action.newContact]
            }
        case "REMOVE_CONTACT":
            return {
                contacts: prevState.contacts.filter(person => person.id !== action.personID)
            }
        default:
            return prevState
    }
}

//same as redux.createStore(reducer)
export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)