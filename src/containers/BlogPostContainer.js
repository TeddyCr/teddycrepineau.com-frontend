import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getposts } from '../actions/getposts'
import { posts } from '../reducers'
import PostComponent from '../components/postComponent'


class Posts extends Component {

    componentDidMount() {
        (
        this.props.fetchPosts()
    )
    }

    render() {
        const publishedPosts = this.props.fetchedPosts
        return (
            <PostComponent posts={ publishedPosts } params={ this.props.params }/>
        )
    }
}

export default connect(
    state => ({ fetchedPosts: posts(state) }),
    { fetchPosts : getposts }
)(Posts);