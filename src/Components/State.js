import React, { Component } from 'react'
import axios from 'axios'
import { Accordion } from 'react-bootstrap'
import { object } from 'prop-types'

export default class State extends Component {
    constructor(props) {
        super()
        this.state = {
            stateData: {}
        }
    }

    componentDidMount() {
        axios.get("https://data.covid19india.org/state_district_wise.json").then((response) => {
            console.log(response);
            this.setState({ stateData: response.data })
            console.log(response.data);
        })
    }



    render() {
        let keys = Object.keys(this.state.stateData)
        console.log(keys)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <Accordion>
                            {
                                keys.map((item, key) => {
                                    let districts = this.state.stateData[item].districtData;
                                    let distric_Keys = Object.keys(districts)

                                    let total_active = 0
                                    let total_confirmed = 0
                                    let total_death = 0
                                    let total_recover = 0

                                    let district_list = []
                                    for (let x in districts) {
                                        total_active += districts[x].active;
                                        total_confirmed += districts[x].confirmed;
                                        total_death += districts[x].deceased;
                                        total_recover += districts[x].recovered

                                        let ob = districts[x];
                                        ob["district_name"] = x;
                                        district_list.push(ob);
                                    }
                                    // console.log(district_list);

                                    return (
                                        <Accordion.Item eventKey={key} >
                                            <Accordion.Header><h5>{item}:</h5> <span className="btn-primary p-1 mr-2">Total Cases:{total_confirmed} </span>|<span className="btn-warning p-1 mr-2"> Active:{total_active}</span>|<span className="btn-success p-1 mr-2"> Death:{total_death}</span>|<span className="btn-danger p-1 mr-2"> Recover:{total_recover}</span></Accordion.Header>
                                            <Accordion.Body>
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>District</th>
                                                            <th>Confirmed</th>
                                                            <th>Active</th>
                                                            <th>Recovered</th>
                                                            <th>Deaths</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            district_list.map((item, key) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{item.district_name}</td>
                                                                        <td>{item.confirmed}</td>
                                                                        <td>{item.active}</td>
                                                                        <td>{item.recovered}</td>
                                                                        <td>{item.deceased}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )
                                })
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}
