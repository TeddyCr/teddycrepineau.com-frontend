import React, { Component } from 'react'
import { connect } from 'react-redux'
import { posts } from '../reducers'
import { getposts } from '../actions/getposts'
import { profile } from '../reducers'
import { getprofile } from '../actions/getprofile'
import { bindActionCreators } from 'redux';
import HomePageComponent from '../components/HomePageComponent'

class HomePage extends Component {
    componentDidMount() {
        this.props.getposts()
        this.props.getprofile()
    }

    render() {
        const publishedPosts = this.props.fetchedPosts
        const publishedProfile = this.props.fecthedProfile

        return (
            <HomePageComponent posts={ publishedPosts } profile={ publishedProfile } />
        )
    }
}

const mapSateToProps = (state) => {
    return {
        fetchedPosts: posts(state),
        fecthedProfile: profile(state)
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(Object.assign({},{ getprofile },{getposts}), dispatch)
)

export default connect(mapSateToProps, mapDispatchToProps)(HomePage)