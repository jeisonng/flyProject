import React, { Component } from 'react';
import FlightCard from '../Componets/flightCard';
import axios from 'axios';
import moment from 'moment';

export default class Home extends Component {

    state = {
        upcommig: []
    }

    checkUpcommig(date){
      return moment().valueOf() <= moment(date.inboundDate).valueOf()
    }

    checkPast(date){
      return moment().valueOf() > moment(date.inboundDate).valueOf()
    }

    componentDidMount = async () => {
        const { data } = await axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
        this.setState({ upcommig: data })
    }

    render() {
        const { upcommig } = this.state
        return (
            <div style={{
                marginBottom: '100px'
            }}>
                <div/>
                {
                    upcommig.filter(this.checkUpcommig).map(item => {
                        return <FlightCard flight={item} />
                    })
                }
                {
                    upcommig.filter(this.checkPast).map(item => {
                        return <FlightCard flight={item} />
                    })
                }{
                    upcommig.filter(this.checkPast).map(item => {
                        return <FlightCard flight={item} />
                    })
                }
            </div>
        )
    }
}