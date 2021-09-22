import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import State from './State'
import axios from 'axios'



export default class India extends Component {

    constructor(props) {
        super()
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v2/countries/india").then((result) => {
            this.setState({ data: result.data })
            // console.log(result);
            // console.log(result.data);
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/flat/64.png" />
                    <h3>India</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 col-xs-12">
                            <Card bg="primary" style={{ width: '100%' }}>

                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.cases}</h3>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card bg="warning" style={{ width: '100%' }}>

                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>{this.state.data.active}</h3>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card bg="success" style={{ width: '100%' }}>

                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.data.recovered}</h3>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card bg="danger" style={{ width: '100%' }}>

                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL DEATH</Card.Title>
                                    <h3>{this.state.data.deaths}</h3>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <State />
                </div>

            </div>
        )
    }
}
