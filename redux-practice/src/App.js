import React, { Component } from 'react'
import Display from './components/Display'
import Form from './components/Form'
import { connect } from 'react-redux'
import { addContact } from './redux'

class App extends Component {
    constructor() {
        super()
        this.state = {
            fName: '',
            lName: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newContact = {
            fName: this.state.fName,
            lName: this.state.lName
        }
        
        this.props.addContact( newContact )

        this.setState(prevState => ({
            fName: '',
            lName: ''
        }))
    }

    render() {
        return (
            <div>
                hi from App
                <Form
                    fName={this.state.fName}
                    lName={this.state.lName}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <Display />
            </div>
        )
        // return <div>hi from App</div>
    }
}

export default connect(null, { addContact })(App)