import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap'

import Blog from './blog/Blog'
import Profile from './profile/Profile'
import AppNoMatch from './AppNoMatch'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar color="faded" light toggleable className="fixed-top">
            <NavbarBrand>Chris Brown</NavbarBrand>
            <NavbarToggler/>
            <Nav className="justify-content-end d-flex w-100">
              <NavItem>
                <NavLink to="/" className="nav-link">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/blog" className="nav-link">Blog</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/blog" component={Blog}/>
            <Route exact path="/" component={Profile}/>
            <Route component={AppNoMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
