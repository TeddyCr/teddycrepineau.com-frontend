import React, { Component } from 'react';
import './BlogFeed.css';
import BlogPostsFeedContainer from './containers/BlogPostsFeedContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


class BlogFeed extends Component {

  render() {
    return (
      <div className="feed">
          <NavBar />
          <BlogPostsFeedContainer />
          <Footer />
      </div>
    );
  }
}

export default BlogFeed
