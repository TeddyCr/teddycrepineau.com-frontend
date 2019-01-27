import React, { Component } from 'react'
import BlogPostContainer from './containers/BlogPostContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class BlogPost extends Component {

    render() {
        console.log(this.props.match.params)
        return (
            <div>
                <NavBar />
                <BlogPostContainer params={this.props.match.params}/>
                <Footer />
            </div>
        );
    }
}

export default BlogPost
