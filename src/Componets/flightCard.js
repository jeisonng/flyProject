import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import moment from 'moment';


export default class FlightCard extends Component {
    render() {
        const { flight } = this.props
        return (
            <LazyLoad height={100}>
                    <div className="card-style mb-1" style={{
                       backgroundImage: `url(${flight.thumb})`
                    }}>
                        <span className="text-card">{flight.destination}</span>
                        <span className="text-data-card">{moment(flight.outboundDate).format("DD MMM")} - {moment(flight.inboundDate).format("DD MMM")}</span>
                    </div>
                    <div className="card-style-2 mb-1"></div>
            </LazyLoad>
        )
    }
}