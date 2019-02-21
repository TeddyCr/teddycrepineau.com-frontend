import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getposts } from '../actions/getposts'
import { posts } from '../reducers'
import PostFeedComponent from '../components/postFeedComponent'
import { bindActionCreators } from 'redux';

class Posts extends Component {

    componentDidMount() {
        (
        this.props.getposts()
    )
    window.scrollTo(0,0)
}

    render() {
        const publishedPosts = this.props.fetchedPosts

        return (
            <PostFeedComponent posts={ publishedPosts } />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetchedPosts: posts(state)
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({getposts}, dispatch)
)



export default connect(mapStateToProps, mapDispatchToProps)(Posts)
