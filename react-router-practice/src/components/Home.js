import React from 'react'

const Home = props => {
    // console.log(props)

    const routeBtn = () => {
        props.history.goBack()
    }
    return (
        <div>
            Hi from Home
            <button onClick={routeBtn} >Click to About</button>
        </div>
    )
}

export default Home;