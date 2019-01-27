import React, { Component } from 'react'
import { Container, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const backButton = {
    color: 'rgba(0,0,0,.87)',
    margin: '0 0 2rem'
}

class PostComponent extends Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    
    render() {
        return(
            <Container text>
            <Grid>
                <Grid.Row>
                {Object.entries(this.props.posts).map(([key, value]) => {
                   if(value.id === parseInt(this.props.params.id,10)) 
                    return (
                    <Grid.Column>
                        <div id={key}>
                        <Link to='/blog'>
                        <p style={ backButton }><Icon name="angle left" />Back</p>
                        </Link>
                        <h2 className="post-title">{value.title}</h2>
                        <p className="author-time-meta">{value.full_name} - {new Date(value.creation_date).toDateString()}</p>
                        <div dangerouslySetInnerHTML={{ __html: value.content }} />
                        </div>
                    </Grid.Column>
                )})}
                </Grid.Row>
            </Grid>
            </Container>
        )
    }
}

export default PostComponent