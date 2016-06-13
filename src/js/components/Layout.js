import React from "react";
import Background from "./Background";
import GameIDTextField from "./GameIDTextField"
import LeaderboardTable from "./LeaderboardTable";

var rankings = [];

var Layout = React.createClass({
    getInitialState: function() {
        return {
            gameId: ''
        };
    },

    handleUserInput: function(gameId) {
        this.setState({
            gameId: gameId
        });
    },

    render() {
        return (
            <div>
                <div className="title">Blobs World Wide Leaderboard</div>
                <GameIDTextField gameId={this.state.gameId} onUserInput={this.handleUserInput} />
                <LeaderboardTable rankings={rankings} gameId={this.state.gameId}/>
                <Background/>
            </div>
        )
    }
})

export default Layout