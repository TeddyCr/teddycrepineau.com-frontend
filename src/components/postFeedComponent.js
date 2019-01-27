import React, { Component } from 'react'
import { Container, Grid, Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const readMoreButton = {
    margin: '1.5rem 0 2rem',
}

class PostFeedComponent extends Component {
    render() {
        return (
            <Container text>
                <Grid>
                    {Object.entries(this.props.posts).reverse().map(([key, value], index) => {
                    if(value.is_published === true)
                    return(
                    <Grid.Row>
                    <Grid.Column>
                        <div id={key}>
                        <h2 className="post-title">{value.title}</h2>
                        <p className="author-time-meta">{value.full_name} - {new Date(value.creation_date).toDateString()}</p>
                        <div dangerouslySetInnerHTML={{ __html: value.content.substring(0,400).concat(" [...]") }} />
                        <Link to={`/blog/${value.id}/${value.slug}`}>
                        <Button style={ readMoreButton } basic color='black'>Read More</Button>
                        </Link>
                        <Divider />
                        </div>
                    </Grid.Column>
                    </Grid.Row>
                )})} 
                </Grid> 
            </Container>
        )
    }
}

export default PostFeedComponent