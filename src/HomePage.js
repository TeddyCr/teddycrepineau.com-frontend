import React, { Component } from 'react'
import HomePageContainer from './containers/HomePageContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class HomePage extends Component {

    render() {
        return(
        <div>
            <NavBar />
            <HomePageContainer />
            <Footer />
        </div>

        )
    }
}

export default HomePage