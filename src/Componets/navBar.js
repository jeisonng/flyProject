import React, { Component } from 'react';
import { IoIosAirplane } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { GiInfo, GiBackpack } from "react-icons/gi";
import { colors } from '../Commom/index'
import * as routes from '../routes'


export default class Nav extends Component {
    activeUrl(route) {
        const { pathname } = window.location;

        console.log("PATH", pathname, route)
        return pathname === route
    }
    render() {
        return (
            <div className="row nav-container m-0">
                <div className="col-3 p-0 text-center" onClick={() => {
                    window.location = "/flight"
                }}>
                    <div className="col-12">
                        <IoIosAirplane color={this.activeUrl(routes.FLINGH) ? colors.white : colors.gray} />
                    </div>
                    <span className="col-12 p-0" style={{ color: this.activeUrl(routes.FLINGH) ? colors.white : colors.gray }}>Book Flights</span>
                    {this.activeUrl(routes.FLINGH) && <div className="bottom-div" />}
                </div>
                <div className="col-3 p-0 text-center" onClick={() => {
                    window.location = "/travel"
                }}>
                    <div className="col-12">
                        <FiMap color={this.activeUrl(routes.TRAVEL) ? colors.white : colors.gray} />
                    </div>
                    <span className="col-12 p-0" style={{ color: this.activeUrl(routes.TRAVEL) ? colors.white : colors.gray }}>Map View</span>
                    {this.activeUrl(routes.TRAVEL) && <div className="bottom-div" />}
                </div>
                <div className="col-3 p-0 text-center" onClick={() => {
                    window.location = "/status"
                }}>
                    <div className="col-12">
                        <GiInfo color={this.activeUrl(routes.STATUS) ? colors.white : colors.gray} />
                    </div>
                    <span className="col-12 p-0" style={{ color: this.activeUrl(routes.STATUS) ? colors.white : colors.gray }}>Flight Status</span>
                    {this.activeUrl(routes.STATUS) && <div className="bottom-div" />}
                </div>
                <div className="col-3 p-0 text-center" onClick={() => {
                    window.location = "/"
                }}>
                    <div className="col-12">
                        <GiBackpack color={this.activeUrl(routes.HOME) ? colors.white : colors.gray} />
                    </div>
                    <span className="col-12 p-0" style={{ color: this.activeUrl(routes.HOME) ? colors.white : colors.gray }}>My Profile</span>
                    {this.activeUrl(routes.HOME) && <div className="bottom-div" />}
                </div>
            </div>
        )
    }
}