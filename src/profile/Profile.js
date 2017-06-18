import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import injectStyles from 'react-jss'

import ProfileInfo from './ProfileInfo'
import RepoRow from '../repos/RepoRow'
import axios from 'axios'

const styles = {
  underNavbar: {
    marginTop: 80
  }
}

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      userAvatar: '',
      userName: '',
      userRepoArray: []
    }
  }

  componentWillMount () {
    axios.get('https://api.github.com/users/elchrisso')
      .then((userInfo) => {
        this.setState({
          userAvatar: userInfo.data.avatar_url,
          userName: userInfo.data.name
        })
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('https://api.github.com/users/elchrisso/repos')
      .then((userRepos) => {
        console.log(userRepos)
        this.setState({
          userRepoArray: userRepos.data
        })
      })
      .catch((error) => {
        console.log(error)
    })
  }

  render () {
    const classes = this.props.classes

    return (
      <Container className={classes.underNavbar}>
        <Row>
          <Col sm="4">
            <ProfileInfo avatarUrl={this.state.userAvatar} name={this.state.userName}/>
          </Col>
          <Col sm="8">
            <h3>Projects</h3>
            <RepoRow repoList={this.state.userRepoArray}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default injectStyles(styles)(Profile)
