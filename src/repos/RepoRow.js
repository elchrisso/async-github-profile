import React, { Component } from 'react'

import { Row, Col, Card, CardHeader, CardBlock } from 'reactstrap'
import PropTypes from 'prop-types'

class RepoRow extends Component {
  render () {
    return (
      <Row>
        <Col>
          {this.props.repoList.map((repo) => {
            return (
              <Card>
                <CardHeader>{repo.name}</CardHeader>
                <CardBlock>
                  {repo.description}
                </CardBlock>
              </Card>
            )
          })}
          </Col>
      </Row>
    )
  }
}

RepoRow.PropTypes = {
  repoList: PropTypes.array.isRequired
}

export default RepoRow
