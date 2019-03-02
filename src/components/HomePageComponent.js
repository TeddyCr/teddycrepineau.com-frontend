import React, { Component } from 'react'
import {
    Container,
    Grid,
    Button,
    Image,
    Header,
    Icon,
    Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
 
class HomePageComponent extends Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return(
            <Container>
            <Grid style={{ marginTop: '5rem' }}>
                <Grid.Row textAlign="center" >
                    {Object.entries(this.props.profile).map(([key, value]) => {
                        return ([
                            <Grid.Column >
                                 <div id={ key }>
                                    <Image src={ value.profile_picture_url } centered='true' size="small" />
                                    <Header as="h2">Welcome</Header>
                                    <div style={{ fontSize: '1.2rem' }} dangerouslySetInnerHTML={{ __html: value.short_bio }}></div>
                                    <Button as={ Link } to='/about/' basic color='black' disabled>More</Button> 
                                 </div>
                            </Grid.Column>
                        ])})}
                </Grid.Row>
            </Grid>
            <Segment style={{ padding: '0rem', borderTop: '1px solid #9e9e9e',  borderBottom: '1px solid #9e9e9e', margin: '5rem 0' }} vertical>
            <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                    <Grid.Column style={{ paddingBottom: '5rem', paddingTop: '5rem' }}>
                        <Header as="h2">Engage Santa Monica</Header>
                        <p style={{ fontSize: '1.2rem' }}>Engage is a digital platform connecting residents with their local government</p>
                        <Button basic color="black">
                            <Icon name="linkify" />
                            <a className='buttonLinkBasic' href="https://sm.engage.town/#/" target="_blank" rel="noopener noreferrer">Website</a>
                        </Button>
                        <Button secondary>
                           <Icon name="github" />
                           <a className="buttonLink" href="https://github.com/hackla-engage" target="_blank" rel="noopener noreferrer">Source</a> 
                        </Button>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5rem', paddingTop: '5rem' }}>
                        <Header as="h2">Twitter Sentiment</Header>
                        <p style={{ fontSize: '1.2rem' }}>Twitter Sentiment is an NPL python library to evaluate the emotion behind a tweet</p>
                        <Button basic color="black">
                            <Icon name="python" />
                            <a className='buttonLinkBasic' href="https://pypi.org/project/twitter-sentiment/" target="_blank" rel="noopener noreferrer">pypi</a>
                        </Button>
                        <Button secondary>
                           <Icon name="github" />
                           <a className="buttonLink" href="https://github.com/TeddyCr/twitter-sentiment" target="_blank" rel="noopener noreferrer">Source</a>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
                <Grid textAlign="center" style={{ margin: '5rem 0' }}>
                    <Header as="h2">Latest from the Blog</Header>
                        {Object.entries(this.props.posts).reverse().slice(0,5).map(([key, value]) => {
                            return (  
                            <Grid.Row style={{ paddingTop:'0.2rem', paddingBottom:'0.3rem' }}>
                                <Grid.Column>
                                    <Link to={`/blog/${value.id}/${value.slug}`}>
                                    <p style={{ fontSize: '1.2rem' }}>{ value.title }</p>
                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                        )})}
                        <Button style={{ marginTop: '2rem' }} basic color="black" as={ Link } to='/blog'>View All</Button>
                    </Grid>
            </Container>
        )
    }
}

export default HomePageComponent