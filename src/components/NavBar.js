import React, { Component } from 'react'
import {
    Menu,
    Container,
    Header,
    Button,
    Icon,
    Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Resume from '../static/Resume-TeddyCrepineau.pdf'
import GoogleTagManager from './gtm'

const navbarContainer = {
    backgroundColor: '#fff',
    marginTop: '2rem',
    marginBottom: '2rem',
    padding: '1.2rem',
  }

  const navbarHeader = {
      marginBottom: '4rem',
      marginTop: '2rem'
  }

  const paraNavbarPara = {
      fontSize: '1.2rem',
      marginTop: '0.5rem',
  }

  const paraNavbarHeader = {
      marginBottom: '0.5rem',
  }

class NavBar extends Component {

    state = { activeItem: null }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        });
    }

    render() {

        const { activeItem } = this.state
        return (
            <div>
                <GoogleTagManager gtmId='GTM-TG54K4G' />
                <Container style={ navbarHeader }>
                    <Header as='h1' style={ paraNavbarHeader }>Teddy Crepineau</Header>
                    <p style={ paraNavbarPara }>Driving Business Efficiency Using Data and Technology</p>
                    <Button secondary><a className='buttonLink'  id="view-resume-nav-bar" href={ Resume } target="_blank" rel="noopener noreferrer">Download Resume</a></Button>
                    <Button color="linkedin">
                        <Icon name="linkedin" /><a id="linkedin-nav-bar" className='buttonLink' href="https://www.linkedin.com/in/teddycrepineau/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </Button>
                    <Button basic color='black'>
                        <Icon name='github'/><a id="github-nav-bar" className='buttonLinkBasic' href="https://github.com/TeddyCr" target="_blank" rel="noopener noreferrer">Github</a>
                    </Button>
                </Container>
                   <Menu pointing secondary style={ navbarContainer }>
                        <Container>
                        <Menu.Item 
                            name="home"
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                            as={ Link }
                            to='/'
                        />
                        <Menu.Item 
                            name="about"
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                            disabled={ true }
                        />
                        <Menu.Item 
                            name="blog"
                            active={activeItem === 'blog'}
                            onClick={this.handleItemClick}
                            as={ Link }
                            to='/blog/'
                        />
                        <Menu.Item 
                            name="contact"
                            active={activeItem === 'contact'}
                            onClick={this.handleItemClick}
                            disabled={ true }
                        />
                        </Container>
                    </Menu>
            </div>
        );
    }
}

export default NavBar