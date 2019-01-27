import React, { Component } from 'react'
import {
    Container,
    Grid,
    List,
    Header,
    Button,
    Segment,
    Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Resume from '../static/Resume-TeddyCrepineau.pdf'

class Footer extends Component {
    render() {
        return ([
            <Segment className='footerContainer' vertical style={{ backgroundColor: '#fff', borderBottom: 'none'}}> 
            <Container>
                <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <List link>
                            <List.Item>
                                <List.Header>Menu</List.Header>
                            </List.Item>
                            <List.Item as={ Link } to='/'>Home</List.Item>
                            <List.Item as={ Link } to='/#'>About</List.Item>
                            <List.Item as={ Link } to='/blog'>Blog</List.Item>
                            <List.Item disable as={ Link } to='/#'>Contact</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <List link>
                        <List.Item>
                                <List.Header>Network</List.Header>
                            </List.Item>                            
                            <List.Item as='a' href="https://www.linkedin.com/in/teddycrepineau/" target="_blank" rel="noopener noreferrer">Linkedin</List.Item>
                            <List.Item as='a' href="https://github.com/TeddyCr" target="_blank" rel="noopener noreferrer">Github</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column textAlign='center' width={8}>
                        <Header as='h3'>View Resume</Header>
                        <p>Download my resume right now and see how we can work together</p>
                        <Button secondary><a className="buttonLink" href={ Resume } target="_blank" rel="noopener noreferrer">Download Resume</a></Button>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
            </Segment>,
            <Segment style={{ marginTop: '0rem', padding: '3rem' }}>
            <Container>
                <Grid>
                    <Grid.Row textAlign="center" style={{ fontSize: '0.9rem' }}>
                        <Grid.Column>
                            <p><Icon name="copyright outline" /> 2019 - Teddy Crepineau</p>
                            {/* <p style={{ marginTop:'1.5rem', marginBottom: '0.5rem' }}>Built With</p>
                            <p style={{  marginBottom: '0.15rem' }}><Icon name="python" /> Django</p>
                            <p><Icon name="react" /> React</p> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            </Segment>
        ])
    }
}

export default Footer