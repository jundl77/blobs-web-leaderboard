import React from "react";
import Favicon from "react-favicon"
import Background from "./Background";
import GameIDTextField from "./GameIDTextField";
import LeaderboardTable from "./LeaderboardTable";
import Footer from "./Footer"
import favicon_img from "../../resources/img/favicon.png"

var rankings = [];

var Layout = React.createClass({
    getInitialState: function () {
        return {
            gameId: ''
        };
    },

    handleUserInput: function (gameId) {
        this.setState({
            gameId: gameId
        });
    },

    render() {
        return (
            <div>
                <Favicon url={favicon_img}/>
                <div className="title">Blobs World Wide Leaderboard</div>
                <GameIDTextField gameId={this.state.gameId} onUserInput={this.handleUserInput}/>
                <LeaderboardTable rankings={rankings} gameId={this.state.gameId}/>
                <Footer/>
                <Background/>
            </div>
        )
    }
})

export default Layout