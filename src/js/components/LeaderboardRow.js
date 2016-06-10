import React from "react";

var LeaderboardRow = React.createClass({

    render: function () {
        return (
            <tr>
                <td>{this.props.score}</td>
                <td>{this.props.name}</td>
            </tr>
        )
    }
})

export default LeaderboardRow
