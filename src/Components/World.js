import React, { Component } from 'react'
import axios from 'axios'

export default class World extends Component {
    constructor(props){
        super()
        this.state={
                data:[]
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then((response)=>{
            console.log(response);
            this.setState({data:response.data})
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-primary table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Total Cases</th>
                                <th>Recovery</th>
                                <th>Death</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((item,key)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.country}
                                            <img style={{width:'64px',marginLeft:'10px'}} src={item.countryInfo.flag}/>
                                        </td>
                                        <td>{item.cases}</td>
                                        <td>{item.recovered}</td>
                                        <td>{item.deaths}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
